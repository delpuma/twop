
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
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
                <li>Each station features branch-themed outdoor exercise equipment <strong>and</strong> a custom bronze relief memorial with granite pedestal honoring fallen Central Florida veterans</li>
                <li>Dual push-up/dip stations at each location — 22 total, symbolizing the mission to reduce the 22 veteran suicides per day</li>
                <li>QR memorial storytelling honoring local veterans at every station</li>
                <li>Station 11: Victory Pointe Honor Plaza — signature Military Working Dog Memorial with 6 life-size bronze dogs</li>
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

      <section className="bg-[#4A5D3F]">
        <Container className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Submit a Letter of Support</h2>
            <p className="mt-1 text-sm text-white/80 max-w-xl">Organizations, businesses, and community members can download a template and upload a signed letter — letters are shared with City leadership as part of the proposal.</p>
          </div>
          <Link href="/letters" className="shrink-0 rounded-lg bg-white text-[#4A5D3F] font-semibold px-6 py-3 hover:bg-slate-100 transition-colors">
            Submit a Letter →
          </Link>
        </Container>
      </section>

      <ProposalSlider />

      {/* STATIONS DETAIL */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h2 className="text-3xl font-semibold">The 11 Stations</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Each station honors a branch of service with two components: branch-themed outdoor fitness equipment and a custom bronze relief memorial on a polished granite pedestal — where fallen Central Florida veterans can be remembered by name.
          </p>

          {/* Memorial sponsorship callout */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border-2 border-[#4A5D3F] bg-[#4A5D3F]/5 p-6">
              <div className="text-xs uppercase tracking-wide text-[#4A5D3F] font-semibold">Memorial Sponsorship</div>
              <div className="mt-2 text-2xl font-bold text-slate-900">$30,000 – $50,000</div>
              <p className="mt-2 text-sm text-slate-600">Sponsor a station memorial: custom bronze relief plaque (24–30″), polished granite pedestal with etched names, and installation. Your organization’s name honored at the station permanently.</p>
              <div className="mt-3 text-xs text-slate-500">Bronze relief: ~$10k &bull; Granite base: ~$5k &bull; Install: ~$2k &bull; Per station: ~$17k</div>
            </div>
            <div className="rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
              <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Equipment Sponsorship</div>
              <div className="mt-2 text-2xl font-bold text-slate-900">$30,000 – $50,000</div>
              <p className="mt-2 text-sm text-slate-600">Sponsor the fitness equipment at a station. Branch-themed outdoor equipment built for public use, designed to last decades. Sponsor recognition on station signage.</p>
              <div className="mt-3 text-xs text-slate-500">Equipment per station: $8,500 – $18,000 depending on station</div>
            </div>
            <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-6">
              <div className="text-xs uppercase tracking-wide text-amber-700 font-semibold">Station 11 — Honor Plaza</div>
              <div className="mt-2 text-2xl font-bold text-slate-900">~$200,000</div>
              <p className="mt-2 text-sm text-slate-600">The emotional centerpiece: 6 life-size bronze Military Working Dog statues, multi-user fitness structure, reflection seating, and flag feature. The signature landmark of the entire corridor.</p>
              <div className="mt-3 text-xs text-slate-500">Life-size bronze dogs: $20k–$35k each &bull; Premium equipment: $18k &bull; Site &amp; install included</div>
            </div>
          </div>

          {/* Station grid */}
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StationCard num="1" flag="🇺🇸" branch="Army" subtitle="Strength Zone" equipment={["Multi-height pull-up bar system","Dual push-up/dip unit","Optional low crawl lane"]} budget="$11,500" manufacturer="Outdoor-Fit" />
            <StationCard num="2" flag="🦅" branch="Marine Corps" subtitle="Combat Fitness" equipment={["Parallel dip bars","Elevated push-up platform","Rope climb frame"]} budget="$12,500" manufacturer="Outdoor-Fit" />
            <StationCard num="3" flag="⚓" branch="Navy" subtitle="Core &amp; Stability" equipment={["Core bench","Incline push-up station","Balance step platforms","Dual push-up/dip"]} budget="$10,000" manufacturer="Greenfields" />
            <StationCard num="4" flag="✈️" branch="Air Force" subtitle="Agility Zone" equipment={["Plyometric boxes","Agility step platforms","Dual push-up/dip"]} budget="$10,500" manufacturer="Greenfields" />
            <StationCard num="5" flag="🚨" branch="Coast Guard" subtitle="Rescue Fitness" equipment={["Battle rope anchor station","Pull-up bar","Dual push-up/dip"]} budget="$12,000" manufacturer="Outdoor-Fit" note="Council favorite — hurricane readiness messaging" />
            <StationCard num="6" flag="🛰️" branch="Space Force" subtitle="Future Readiness" equipment={["Suspension trainer frame","Core trainer","Dual push-up/dip"]} budget="$9,500" manufacturer="Greenfields" />
            <StationCard num="7" flag="🪖" branch="Special Operations" subtitle="Tribute" equipment={["Monkey bars","Multi-grip pull-ups","Dual push-up/dip"]} budget="$13,000" manufacturer="Outdoor-Fit" note="Hardest station on the corridor" />
            <StationCard num="8" flag="🚔" branch="Veteran First Responders" subtitle="" equipment={["Functional training frame","Sandbag lift platform","Dual push-up/dip"]} budget="$11,000" manufacturer="Greenfields" />
            <StationCard num="9" flag="🔧" branch="Skilled Trades" subtitle="Builder Zone" equipment={["Farmer carry handles","Grip strength bars","Sledge training post","Dual push-up/dip"]} budget="$11,500" manufacturer="Outdoor-Fit" note="Direct workforce tie-in" />
            <StationCard num="10" flag="🧠" branch="Wellness &amp; Recovery" subtitle="" equipment={["Stretching station","Mobility bars","Light push-up/dip"]} budget="$8,500" manufacturer="Greenfields or PlayCore" />
            <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-6 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-bold text-amber-700">11</span>
                <span className="text-xs uppercase tracking-wide text-amber-700 font-semibold">Signature Piece</span>
              </div>
              <div className="font-semibold text-lg">🏆 Victory Pointe Honor Plaza</div>
              <div className="text-sm text-slate-500 mb-3">KOMPAN or premium Greenfields</div>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• 6 life-size bronze Military Working Dog statues</li>
                <li>• Multi-user pull-up structure</li>
                <li>• Dual symbolic push-up/dip</li>
                <li>• Reflection seating integration</li>
                <li>• Flag feature (if permitted)</li>
              </ul>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">Equipment budget</span>
                <span className="font-bold text-amber-700">$18,000</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-xs text-slate-500">Full plaza sponsorship</span>
                <span className="font-bold text-amber-700">~$200,000</span>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-slate-900 text-white p-6 grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-xs uppercase tracking-wide opacity-60">Stations 1–10 Memorial Total</div>
              <div className="text-2xl font-bold mt-1">$170,000</div>
              <div className="text-xs opacity-60 mt-1">10 × $17,000 per station</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide opacity-60">Stations 1–10 Equipment Total</div>
              <div className="text-2xl font-bold mt-1">~$110,000</div>
              <div className="text-xs opacity-60 mt-1">Varies by station complexity</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide opacity-60">Station 11 Honor Plaza</div>
              <div className="text-2xl font-bold mt-1">~$200,000</div>
              <div className="text-xs opacity-60 mt-1">6 bronze dogs + equipment + site</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <Container className="py-12">
          <h2 className="text-2xl font-semibold">Veteran Intake &amp; Support Hub</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            At the existing yellow building at Victory Pointe, Warrior Outreach will establish an Intake &amp; Navigation Office. Our residential program accepts 20–30 veterans at a time into structured housing, workforce training, and reintegration support — most graduate into stable independent housing within 9–12 months, allowing us to transition the next veteran in and continue the cycle. Our long-term goal is to serve thousands of veterans annually through direct services, healthcare navigation, and community support.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ProgramCard title="Housing" body="Transitional housing with structured support — designed to move veterans toward independence, not dependency." />
            <ProgramCard title="Healthcare Navigation" body="Connect to VA benefits, medical care, and mental health support. Remove barriers. Reduce red tape." />
            <ProgramCard title="Workforce Pathways" body="Construction, skilled trades, disaster response, hospitality (IG Hotels), and a pathway to small business ownership." />
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <Container className="py-12">
          <h2 className="text-2xl font-semibold">Why Clermont?</h2>
          <p className="mt-4 text-slate-700 leading-relaxed max-w-3xl">
            Victory Pointe presents a unique, high-visibility lakeside environment where Clermont can create a nationally distinctive Veteran Fitness &amp; Memorial Corridor that serves both veterans and the broader community. This initiative activates existing public space with minimal new infrastructure while increasing positive foot traffic and demonstrating Clermont&apos;s commitment to veteran wellness and suicide prevention.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed max-w-3xl">
            The initiative is structured to protect the City of Clermont by leveraging existing infrastructure, pursuing private sponsorships, building healthcare and workforce partnerships, and phasing program growth responsibly — tracking measurable performance metrics every step of the way.
          </p>
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

function StationCard({ num, flag, branch, subtitle, equipment, budget, manufacturer, note }:{
  num: string; flag: string; branch: string; subtitle: string;
  equipment: string[]; budget: string; manufacturer: string; note?: string;
}){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg font-bold text-[#4A5D3F]">{num}</span>
        <span className="text-xl">{flag}</span>
      </div>
      <div className="font-semibold text-base">{branch}{subtitle ? ` — ${subtitle}` : ""}</div>
      <div className="text-xs text-slate-400 mb-3">{manufacturer}</div>
      {note && <div className="text-xs text-[#4A5D3F] font-medium mb-2">★ {note}</div>}
      <ul className="text-sm text-slate-600 space-y-1">
        {equipment.map(e => <li key={e}>• <span dangerouslySetInnerHTML={{__html: e}} /></li>)}
      </ul>
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-xs text-slate-400">Equipment budget</span>
        <span className="font-semibold text-[#4A5D3F]">{budget}</span>
      </div>
    </div>
  );
}
