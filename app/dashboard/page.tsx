
"use client";
import { useEffect, useState } from "react";
import Container from "../../components/Container";

type Stats = { supporters: number; letters: number; sponsors: number; pledged: number };

export default function Dashboard(){
  const [stats, setStats] = useState<Stats>({ supporters: 0, letters: 0, sponsors: 0, pledged: 0 });

  useEffect(()=>{ (async()=>{
    const res = await fetch("/api/public/stats", { cache: "no-store" });
    const j = await res.json().catch(()=>null);
    if(j?.ok) setStats(j.stats);
  })(); },[]);

  const max = Math.max(1, stats.supporters, stats.letters, stats.sponsors);

  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">Impact Dashboard</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            This public dashboard shows community momentum and private support growth. (Operational program KPIs can be added as the initiative launches.)
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Kpi label="Supporters" value={stats.supporters.toLocaleString()} />
            <Kpi label="Letters" value={stats.letters.toLocaleString()} />
            <Kpi label="Sponsor leads" value={stats.sponsors.toLocaleString()} />
            <Kpi label="Pledged pipeline" value={`$${stats.pledged.toLocaleString()}`} />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <h2 className="text-2xl font-semibold">Momentum (relative scale)</h2>
          <div className="mt-6 space-y-4">
            <Bar label="Supporters" value={stats.supporters} max={max} />
            <Bar label="Letters of Support" value={stats.letters} max={max} />
            <Bar label="Sponsor Leads" value={stats.sponsors} max={max} />
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="font-semibold">How this helps Clermont</div>
            <p className="mt-2 text-sm text-slate-700">
              Growing community support and private sponsorship interest reduces risk, increases ownership, and helps deliver a long-term civic asset with measurable outcomes.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Kpi({ label, value }:{ label:string; value:string }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function Bar({ label, value, max }:{ label:string; value:number; max:number }){
  const pct = Math.round((value / max) * 100);
  return (
    <div>
      <div className="flex justify-between text-sm text-slate-700">
        <div>{label}</div>
        <div>{value.toLocaleString()}</div>
      </div>
      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
        <div className="h-3 bg-blue-700" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
