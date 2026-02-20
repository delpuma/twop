
"use client";
import { useEffect, useState } from "react";
import Container from "../../components/Container";
import SignatureForm from "../../components/SignatureForm";

type Stats = { supporters: number; sponsors: number; pledged: number; letters: number };

export default function VictoryPointe(){
  const [stats, setStats] = useState<Stats>({ supporters: 0, sponsors: 0, pledged: 0, letters: 0 });

  async function load(){
    const res = await fetch("/api/public/stats", { cache: "no-store" });
    const j = await res.json().catch(()=>null);
    if(j?.ok) setStats(j.stats);
  }

  useEffect(()=>{ load(); },[]);

  return (
    <div>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">Victory Pointe Veteran Fitness & Support Initiative</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            An 11-station Veteran Fitness & Memorial Corridor paired with a veteran intake and workforce pathway — designed to honor service, strengthen Clermont,
            and build measurable community impact.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Kpi label="Community supporters" value={stats.supporters.toLocaleString()} />
            <Kpi label="Letters of support" value={stats.letters.toLocaleString()} />
            <Kpi label="Sponsor leads" value={stats.sponsors.toLocaleString()} />
            <Kpi label="Pledged pipeline" value={`$${stats.pledged.toLocaleString()}`} />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold">What this creates for Clermont</h2>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
                <li>11 memorial + fitness stops with QR storytelling honoring local heroes</li>
                <li>Each station includes two push-up/dip elements (22 total) to reflect the urgency of reducing veteran suicide</li>
                <li>Uses existing trail, waterfront, and parking — minimal new infrastructure</li>
                <li>Veteran intake + navigation to connect people to healthcare, housing resources, and workforce pathways</li>
                <li>Workforce pipeline: construction, repairs, and emergency-response support</li>
              </ul>

              <div className="mt-6 rounded-lg bg-slate-900 text-white p-4">
                <div className="text-sm opacity-90">Stabilization phase cost target</div>
                <div className="text-2xl font-semibold">$2,800–$3,500 / veteran / month</div>
                <div className="text-sm opacity-90 mt-1">Housing + food + case management + workforce support + medical navigation</div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Sign to show community support</h2>
              <p className="mt-2 text-sm text-slate-600">
                Signatures demonstrate public backing and help unlock sponsor participation. Support totals may be shared as aggregate counts with City leadership.
              </p>
              <div className="mt-5">
                <SignatureForm onDone={load} />
              </div>
              <p className="mt-4 text-xs text-slate-500">
                We will not sell your information. You can unsubscribe from updates at any time.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <h2 className="text-2xl font-semibold">Project visuals</h2>
          <p className="mt-2 text-slate-600">Add park photos and station renders in <code className="bg-slate-100 px-1 rounded">/public/victory-pointe</code>.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="h-44 bg-slate-100 rounded-xl border border-slate-200" />
            <div className="h-44 bg-slate-100 rounded-xl border border-slate-200" />
            <div className="h-44 bg-slate-100 rounded-xl border border-slate-200" />
          </div>
        </Container>
      </section>
    </div>
  );
}

function Kpi({ label, value }:{ label: string; value: string }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}
