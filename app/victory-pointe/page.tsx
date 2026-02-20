
"use client";
import { useEffect, useState } from "react";
import Container from "../../components/Container";
import SignatureForm from "../../components/SignatureForm";
import ProposalSlider from "../../components/ProposalSlider";

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
          <h1 className="text-4xl font-semibold tracking-tight">Victory Pointe Veteran Fitness &amp; Support Initiative</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            A public-private partnership proposal for the City of Clermont, Florida — creating a nationally distinctive Veteran Fitness &amp; Memorial Corridor at Victory Pointe that honors service, activates public space, and builds measurable community impact.
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
                <li>11 branch-themed fitness stations along the existing Victory Pointe trail</li>
                <li>Dual push-up/dip stations at each location — 22 total, symbolizing the mission to reduce the 22 veteran suicides per day</li>
                <li>QR memorial storytelling honoring local veterans at every station</li>
                <li>A signature Honor Plaza at the final station</li>
                <li>Uses existing trail, waterfront, and parking — minimal new infrastructure</li>
                <li>Veteran Intake &amp; Navigation Office at the existing yellow building at Victory Pointe</li>
                <li>Workforce pipeline: construction, repairs, skilled trades, and emergency-response support</li>
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

      <ProposalSlider />

      <section className="bg-slate-50 border-y border-slate-200">
        <Container className="py-12">
          <h2 className="text-2xl font-semibold">Veteran Intake &amp; Support Hub</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            At the existing yellow building at Victory Pointe, Warrior Outreach will establish an Intake &amp; Navigation Office to connect veterans to healthcare providers, coordinate housing assistance, facilitate workforce placement, and provide peer support navigation. Our goal is to initially house and support 20–30 veterans locally, expanding as partnerships grow.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ProgramCard title="Housing" body="Transitional housing with structured support — designed to move veterans toward independence, not dependency." />
            <ProgramCard title="Healthcare Navigation" body="Connect to VA benefits, medical care, and mental health support. Remove barriers. Reduce red tape." />
            <ProgramCard title="Workforce Pathways" body="Construction, skilled trades, disaster response, hospitality (IG Hotels), and a pathway to small business ownership." />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <h2 className="text-2xl font-semibold">Strategic Partnership Model</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            This initiative is structured as a public-private partnership designed to maximize community impact while responsibly leveraging City participation. Our objective is to multiply the impact of public investment by bringing outside dollars and community ownership into the project.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <PartnerType label="Local business sponsors" />
            <PartnerType label="Skilled trades companies" />
            <PartnerType label="Healthcare partners" />
            <PartnerType label="Hospitality partners" />
            <PartnerType label="Community volunteers" />
            <PartnerType label="Regional philanthropic supporters" />
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

function ProgramCard({ title, body }:{ title: string; body: string }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="font-semibold text-[#4A5D3F]">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}

function PartnerType({ label }:{ label: string }){
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 flex items-center gap-2">
      <span className="text-[#4A5D3F] font-bold">✓</span> {label}
    </div>
  );
}
