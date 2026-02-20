"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Container from "../../components/Container";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Admin() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("overview");
  const [data, setData] = useState<any>({});

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (session?.user) loadData();
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) loadData();
    });

    return () => subscription.unsubscribe();
  }, []);

  async function loadData() {
    const [sigs, sponsors, vols, contacts, intakes] = await Promise.all([
      supabase.from("signatures").select("*").order("created_at", { ascending: false }),
      supabase.from("sponsor_leads").select("*").order("created_at", { ascending: false }),
      supabase.from("volunteers").select("*").order("created_at", { ascending: false }),
      supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
      supabase.from("intake_requests").select("*").order("created_at", { ascending: false })
    ]);
    setData({ sigs: sigs.data || [], sponsors: sponsors.data || [], vols: vols.data || [], contacts: contacts.data || [], intakes: intakes.data || [] });
  }

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  if (loading) return <Container className="py-20 text-center">Loading...</Container>;

  if (!user) {
    return (
      <main>
        <Container className="py-20 max-w-md">
          <h1 className="text-3xl font-semibold">Admin Login</h1>
          <form onSubmit={signIn} className="mt-6 space-y-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2"
              required
            />
            <button className="w-full rounded-md bg-blue-700 text-white py-2 hover:bg-blue-600">
              Sign In
            </button>
          </form>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
            <p className="text-sm text-slate-600">{user.email}</p>
          </div>
          <button onClick={signOut} className="rounded-md px-4 py-2 border border-slate-300 hover:bg-slate-50">
            Sign Out
          </button>
        </Container>
      </section>

      <section>
        <Container className="py-8">
          <div className="flex gap-2 border-b border-slate-200 mb-6">
            {["overview", "signatures", "sponsors", "volunteers", "contacts", "intakes"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 border-b-2 ${view === v ? "border-blue-700 text-blue-700" : "border-transparent text-slate-600 hover:text-slate-900"}`}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>

          {view === "overview" && (
            <div className="grid gap-4 md:grid-cols-3">
              <Stat label="Signatures" value={data.sigs?.length || 0} onClick={() => setView("signatures")} />
              <Stat label="Sponsor Leads" value={data.sponsors?.length || 0} onClick={() => setView("sponsors")} />
              <Stat label="Volunteers" value={data.vols?.length || 0} onClick={() => setView("volunteers")} />
              <Stat label="Contact Messages" value={data.contacts?.length || 0} onClick={() => setView("contacts")} />
              <Stat label="Intake Requests" value={data.intakes?.length || 0} onClick={() => setView("intakes")} />
            </div>
          )}

          {view === "signatures" && (
            <Table
              title="Signatures"
              columns={["Name", "Email", "Zip", "Resident", "Comment", "Date"]}
              rows={data.sigs.map((s: any) => [
                s.full_name,
                s.email,
                s.zip,
                s.is_resident ? "Yes" : "No",
                s.comment || "-",
                new Date(s.created_at).toLocaleDateString()
              ])}
            />
          )}

          {view === "sponsors" && (
            <Table
              title="Sponsor Leads"
              columns={["Organization", "Contact", "Email", "Phone", "Interest", "Pledged", "Message", "Date"]}
              rows={data.sponsors.map((s: any) => [
                s.org_name,
                s.contact_name,
                s.email,
                s.phone || "-",
                s.interest,
                `$${s.pledged_amount?.toLocaleString() || 0}`,
                s.message || "-",
                new Date(s.created_at).toLocaleDateString()
              ])}
            />
          )}

          {view === "volunteers" && (
            <Table
              title="Volunteers"
              columns={["Name", "Email", "Phone", "Interests", "Availability", "Date"]}
              rows={data.vols.map((v: any) => [
                v.full_name,
                v.email,
                v.phone || "-",
                v.interests || "-",
                v.availability || "-",
                new Date(v.created_at).toLocaleDateString()
              ])}
            />
          )}

          {view === "contacts" && (
            <Table
              title="Contact Messages"
              columns={["Name", "Email", "Topic", "Message", "Date"]}
              rows={data.contacts.map((c: any) => [
                c.full_name,
                c.email,
                c.topic,
                c.message,
                new Date(c.created_at).toLocaleDateString()
              ])}
            />
          )}

          {view === "intakes" && (
            <Table
              title="Veteran Intake Requests"
              columns={["Name", "Email", "Phone", "Branch", "Needs", "Homeless", "Urgent Medical", "Location", "Notes", "Date"]}
              rows={data.intakes.map((i: any) => [
                i.full_name,
                i.email || "-",
                i.phone,
                i.branch || "-",
                i.needs?.join(", ") || "-",
                i.is_homeless,
                i.urgent_medical,
                i.location || "-",
                i.notes || "-",
                new Date(i.created_at).toLocaleDateString()
              ])}
            />
          )}
        </Container>
      </section>
    </main>
  );
}

function Stat({ label, value, onClick }: { label: string; value: number; onClick: () => void }) {
  return (
    <button onClick={onClick} className="rounded-xl border border-slate-200 bg-white p-5 hover:bg-slate-50 text-left w-full">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
    </button>
  );
}

function Table({ title, columns, rows }: { title: string; columns: string[]; rows: any[][] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title} ({rows.length})</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-4 py-3 text-left font-semibold text-slate-700">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-slate-700">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
