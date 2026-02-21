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
    const [sigs, sponsors, vols, contacts, intakes, partners, newsletter] = await Promise.all([
      supabase.from("signatures").select("*").order("created_at", { ascending: false }),
      supabase.from("sponsor_leads").select("*").order("created_at", { ascending: false }),
      supabase.from("volunteers").select("*").order("created_at", { ascending: false }),
      supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
      supabase.from("intake_requests").select("*").order("created_at", { ascending: false }),
      supabase.from("partners").select("*").order("display_order", { ascending: true }),
      supabase.from("newsletter_subscribers").select("*").order("created_at", { ascending: false }),
    ]);
    setData({ sigs: sigs.data || [], sponsors: sponsors.data || [], vols: vols.data || [], contacts: contacts.data || [], intakes: intakes.data || [], partners: partners.data || [], newsletter: newsletter.data || [] });
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
        <Container className="py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">Admin Dashboard</h1>
              <p className="text-sm text-slate-600 truncate">{user.email}</p>
            </div>
            <button onClick={signOut} className="rounded-md px-4 py-2 border border-slate-300 hover:bg-slate-50 text-sm">
              Sign Out
            </button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-8">
          <div className="flex gap-2 border-b border-slate-200 mb-6 overflow-x-auto">
            {["overview", "signatures", "sponsors", "volunteers", "contacts", "intakes", "newsletter", "partners"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 border-b-2 whitespace-nowrap ${view === v ? "border-[#4A5D3F] text-[#4A5D3F]" : "border-transparent text-slate-600 hover:text-slate-900"}`}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>

          {view === "overview" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Stat label="Signatures" value={data.sigs?.length || 0} onClick={() => setView("signatures")} />
              <Stat label="Sponsor Leads" value={data.sponsors?.length || 0} onClick={() => setView("sponsors")} />
              <Stat label="Volunteers" value={data.vols?.length || 0} onClick={() => setView("volunteers")} />
              <Stat label="Contact Messages" value={data.contacts?.length || 0} onClick={() => setView("contacts")} />
              <Stat label="Intake Requests" value={data.intakes?.length || 0} onClick={() => setView("intakes")} />
              <Stat label="Partners" value={data.partners?.length || 0} onClick={() => setView("partners")} />
              <Stat label="Newsletter" value={data.newsletter?.length || 0} onClick={() => setView("newsletter")} />
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

          {view === "partners" && <PartnersManager data={data.partners} onUpdate={loadData} />}

          {view === "newsletter" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Newsletter Subscribers ({data.newsletter?.length || 0})</h2>
                <a
                  href={`/api/admin/export?type=newsletter&key=${process.env.NEXT_PUBLIC_ADMIN_KEY || ""}`}
                  className="rounded-md px-4 py-2 bg-[#4A5D3F] text-white text-sm hover:bg-[#3d4d34]"
                  download
                >
                  Export CSV
                </a>
              </div>
              <Table
                title=""
                columns={["Email", "First Name", "Source", "Active", "Date"]}
                rows={(data.newsletter || []).map((s: any) => [
                  s.email,
                  s.first_name || "—",
                  s.source,
                  s.is_active ? "Yes" : "No",
                  new Date(s.created_at).toLocaleDateString()
                ])}
              />
            </div>
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
        <table className="w-full text-sm min-w-max">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-3 py-3 text-left font-semibold text-slate-700 whitespace-nowrap">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                {row.map((cell, j) => (
                  <td key={j} className="px-3 py-3 text-slate-700 max-w-xs truncate" title={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PartnersManager({ data, onUpdate }: { data: any[]; onUpdate: () => void }) {
  const [form, setForm] = useState({ name: "", logo_url: "", website: "", description: "", display_order: 0 });
  const [editing, setEditing] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (editing) {
      await supabase.from("partners").update(form).eq("id", editing);
      setEditing(null);
    } else {
      await supabase.from("partners").insert([{ ...form, is_active: true }]);
    }
    setForm({ name: "", logo_url: "", website: "", description: "", display_order: 0 });
    onUpdate();
  }

  async function handleDelete(id: number) {
    if (confirm("Delete this partner?")) {
      await supabase.from("partners").delete().eq("id", id);
      onUpdate();
    }
  }

  async function toggleActive(id: number, isActive: boolean) {
    await supabase.from("partners").update({ is_active: !isActive }).eq("id", id);
    onUpdate();
  }

  function startEdit(partner: any) {
    setForm({ name: partner.name, logo_url: partner.logo_url, website: partner.website, description: partner.description, display_order: partner.display_order });
    setEditing(partner.id);
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Partners & Sponsors ({data.length})</h2>
      
      <form onSubmit={handleSubmit} className="mb-6 p-4 rounded-xl border border-slate-200 bg-slate-50">
        <h3 className="font-semibold mb-3">{editing ? "Edit Partner" : "Add New Partner"}</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <input type="text" placeholder="Partner Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-md border border-slate-300 px-3 py-2" required />
          <input type="url" placeholder="Logo URL" value={form.logo_url} onChange={(e) => setForm({ ...form, logo_url: e.target.value })} className="rounded-md border border-slate-300 px-3 py-2" required />
          <input type="url" placeholder="Website (optional)" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="rounded-md border border-slate-300 px-3 py-2" />
          <input type="number" placeholder="Display Order" value={form.display_order} onChange={(e) => setForm({ ...form, display_order: parseInt(e.target.value) })} className="rounded-md border border-slate-300 px-3 py-2" />
        </div>
        <textarea placeholder="Description (optional)" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full mt-3 rounded-md border border-slate-300 px-3 py-2" rows={2} />
        <div className="flex gap-2 mt-3">
          <button type="submit" className="rounded-md px-4 py-2 bg-[#4A5D3F] text-white hover:bg-[#3d4d34]">{editing ? "Update" : "Add"} Partner</button>
          {editing && <button type="button" onClick={() => { setEditing(null); setForm({ name: "", logo_url: "", website: "", description: "", display_order: 0 }); }} className="rounded-md px-4 py-2 border border-slate-300 hover:bg-slate-50">Cancel</button>}
        </div>
      </form>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((p: any) => (
          <div key={p.id} className="rounded-xl border border-slate-200 p-4 bg-white">
            <img src={p.logo_url} alt={p.name} className="h-16 w-auto object-contain mb-3" />
            <h4 className="font-semibold">{p.name}</h4>
            {p.website && <a href={p.website} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block truncate">{p.website}</a>}
            {p.description && <p className="text-sm text-slate-600 mt-2">{p.description}</p>}
            <div className="flex gap-2 mt-3 text-sm">
              <button onClick={() => startEdit(p)} className="text-blue-600 hover:underline">Edit</button>
              <button onClick={() => toggleActive(p.id, p.is_active)} className="text-slate-600 hover:underline">{p.is_active ? "Hide" : "Show"}</button>
              <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:underline">Delete</button>
            </div>
            <div className="text-xs text-slate-500 mt-2">Order: {p.display_order} • {p.is_active ? "Active" : "Hidden"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
