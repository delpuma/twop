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
      supabase.from("signatures").select("*", { count: "exact" }),
      supabase.from("sponsor_leads").select("*", { count: "exact" }),
      supabase.from("volunteers").select("*", { count: "exact" }),
      supabase.from("contact_messages").select("*", { count: "exact" }),
      supabase.from("intake_requests").select("*", { count: "exact" })
    ]);
    setData({ sigs, sponsors, vols, contacts, intakes });
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
        <Container className="py-12">
          <div className="grid gap-4 md:grid-cols-3">
            <Stat label="Signatures" value={data.sigs?.count || 0} />
            <Stat label="Sponsor Leads" value={data.sponsors?.count || 0} />
            <Stat label="Volunteers" value={data.vols?.count || 0} />
            <Stat label="Contact Messages" value={data.contacts?.count || 0} />
            <Stat label="Intake Requests" value={data.intakes?.count || 0} />
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Export Data</h2>
            <p className="mt-2 text-sm text-slate-600">Download CSV exports of all data</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {["signatures", "sponsors", "volunteers", "contacts", "intake"].map((type) => (
                <a
                  key={type}
                  href={`/api/admin/export?type=${type}&key=${prompt("Enter ADMIN_KEY:")}`}
                  className="rounded-md px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 no-underline"
                >
                  Export {type}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}
