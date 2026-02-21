
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

          {/* Crowdfund callout */}
          <div className="mt-8 rounded-xl border border-[#4A5D3F] bg-[#4A5D3F]/5 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-[#4A5D3F] text-lg">You don’t have to sponsor a whole station alone.</div>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">Every station and memorial can be community-funded — $25, $100, $500, whatever you can give. When the community comes together, we can build every station without waiting for a single large donor. Every contribution is recognized and every dollar goes directly toward honoring veterans at Victory Pointe.</p>
            </div>
            <a href="/donate" className="shrink-0 rounded-lg bg-[#4A5D3F] text-white font-semibold px-6 py-3 hover:bg-[#3a4a30] transition-colors text-sm">
              Contribute Now →
            </a>
          </div>

          {/* Station grid */}
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StationCard num="1" flag="🇺🇸" branch="Army" subtitle="Strength Zone" equipment={["Multi-height pull-up bar system","Dual push-up/dip unit","Optional low crawl lane"]} manufacturer="Outdoor-Fit" />
            <StationCard num="2" flag="🦅" branch="Marine Corps" subtitle="Combat Fitness" equipment={["Parallel dip bars","Elevated push-up platform","Rope climb frame"]} manufacturer="Outdoor-Fit" />
            <StationCard num="3" flag="⚓" branch="Navy" subtitle="Core &amp; Stability" equipment={["Core bench","Incline push-up station","Balance step platforms","Dual push-up/dip"]} manufacturer="Greenfields" />
            <StationCard num="4" flag="✈️" branch="Air Force" subtitle="Agility Zone" equipment={["Plyometric boxes","Agility step platforms","Dual push-up/dip"]} manufacturer="Greenfields" />
            <StationCard num="5" flag="🚨" branch="Coast Guard" subtitle="Rescue Fitness" equipment={["Battle rope anchor station","Pull-up bar","Dual push-up/dip"]} manufacturer="Outdoor-Fit" note="Council favorite — hurricane readiness messaging" />
            <StationCard num="6" flag="🛰️" branch="Space Force" subtitle="Future Readiness" equipment={["Suspension trainer frame","Core trainer","Dual push-up/dip"]} manufacturer="Greenfields" />
            <StationCard num="7" flag="🪖" branch="Special Operations" subtitle="Tribute" equipment={["Monkey bars","Multi-grip pull-ups","Dual push-up/dip"]} manufacturer="Outdoor-Fit" note="Hardest station on the corridor" />
            <StationCard num="8" flag="🚔" branch="Veteran First Responders" subtitle="" equipment={["Functional training frame","Sandbag lift platform","Dual push-up/dip"]} manufacturer="Greenfields" />
            <StationCard num="9" flag="🔧" branch="Skilled Trades" subtitle="Builder Zone" equipment={["Farmer carry handles","Grip strength bars","Sledge training post","Dual push-up/dip"]} manufacturer="Outdoor-Fit" note="Direct workforce tie-in" />
            <StationCard num="10" flag="🧠" branch="Wellness &amp; Recovery" subtitle="" equipment={["Stretching station","Mobility bars","Light push-up/dip"]} manufacturer="Greenfields or PlayCore" />
            <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-6 md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-bold text-amber-700">11</span>
                <span className="text-xs uppercase tracking-wide text-amber-700 font-semibold">Signature Piece — Emotional Centerpiece</span>
              </div>
              <div className="font-semibold text-xl mb-1">🏆 Victory Pointe Honor Plaza — Military Working Dog Memorial</div>
              <p className="text-sm text-slate-600 mb-4">Six life-size bronze statues honoring the most legendary Military Working Dogs in American history. Each dog represents a branch of service, a theater of war, and a bond between handler and dog that saved lives. Alongside the memorial: a multi-user fitness structure, reflection seating, and flag feature.</p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <DogCard name="Nemo" branch="U.S. Air Force — Vietnam" summary="Shot through the nose charging an enemy soldier, Nemo crawled back to his wounded handler and lay on top of him to guard him until help arrived. He lost his right eye. His handler, Airman Bob Throneburg, earned the Purple Heart and Bronze Star." />
                <DogCard name="Stubby" branch="U.S. Army — WWI" summary="A stray smuggled to Europe, Stubby served in 17 battles, alerted soldiers to gas attacks, and captured a German spy. He became the first dog to receive a rank — Sergeant — from the U.S. armed forces." />
                <DogCard name="Lucca" branch="U.S. Marine Corps — Iraq &amp; Afghanistan" summary="Led nearly 400 patrols and identified ~40 IEDs over 6 years. Not a single Marine was injured under her watch. She lost her front left leg to a second IED in 2012 and was medically retired a hero." />
                <DogCard name="Gabe" branch="U.S. Army — Iraq" summary="A pound puppy turned war hero. Gabe completed 170 combat patrols and made 26 finds of insurgent explosives and weapons. After retiring, he visited wounded soldiers and children in hospitals." />
                <DogCard name="Chips" branch="U.S. Army — WWII" summary="During the invasion of Sicily in 1943, Chips charged an enemy machine gun team firing on his platoon — taking a scalp wound and powder burns — and is credited with saving the lives of his human teammates." />
                <DogCard name="Cairo" branch="U.S. Navy SEALs" summary="The only military dog on Operation Neptune Spear — the mission that killed Osama Bin Laden in May 2011. Cairo secured the perimeter of the compound and was responsible for catching anyone who tried to escape." />
              </div>
              <div className="mt-6 border-t border-amber-200 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Full Plaza Sponsorship</div>
                  <div className="text-2xl font-bold text-amber-700">~$200,000</div>
                  <div className="text-xs text-slate-400">6 bronze dogs + fitness structure + site &amp; installation</div>
                </div>
                <a href="/sponsors" className="shrink-0 rounded-lg bg-amber-500 text-white text-sm font-semibold px-6 py-3 hover:bg-amber-600 transition-colors">
                  Sponsor This Plaza →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-slate-900 text-white p-6 grid md:grid-cols-5 gap-6">
            <div>
              <div className="text-xs uppercase tracking-wide opacity-60">Stations 1–10 Memorials</div>
              <div className="text-2xl font-bold mt-1">$300,000</div>
              <div className="text-xs opacity-60 mt-1">Bronze + granite per station</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide opacity-60">Stations 1–10 Equipment</div>
              <div className="text-2xl font-bold mt-1">$300,000</div>
              <div className="text-xs opacity-60 mt-1">Branch-themed fitness equipment</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide opacity-60">Station 11 Honor Plaza</div>
              <div className="text-2xl font-bold mt-1">~$200,000</div>
              <div className="text-xs opacity-60 mt-1">6 bronze dogs + equipment + site</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide opacity-60">Yellow Building — Intake Office</div>
              <div className="text-2xl font-bold mt-1">$100,000</div>
              <div className="text-xs opacity-60 mt-1">Equipment &amp; renovations for veteran intake hub</div>
              <a href="/sponsors" className="mt-2 inline-block rounded-lg bg-white/10 text-white text-xs font-semibold px-3 py-1.5 hover:bg-white/20 transition-colors">Sponsor This →</a>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-xs uppercase tracking-wide opacity-60">Total Project</div>
              <div className="text-2xl font-bold mt-1">~$900,000</div>
              <div className="text-xs opacity-60 mt-1">One sponsor, many, or the whole community</div>
              <a href="/donate" className="mt-3 inline-block rounded-lg bg-white text-slate-900 text-xs font-semibold px-4 py-2 hover:bg-slate-100 transition-colors">Contribute Now →</a>
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

function DogCard({ name, branch, summary }:{ name: string; branch: string; summary: string }){
  return (
    <div className="rounded-lg bg-white border border-amber-200 p-4">
      <div className="font-bold text-amber-800">{name}</div>
      <div className="text-xs text-amber-600 mb-2">{branch}</div>
      <p className="text-xs text-slate-600 leading-relaxed">{summary}</p>
    </div>
  );
}

function StationCard({ num, flag, branch, subtitle, equipment, manufacturer, note }:{
  num: string; flag: string; branch: string; subtitle: string;
  equipment: string[]; manufacturer: string; note?: string;
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
      <div className="mt-4 border-t border-slate-100 pt-3">
        <div className="text-xs text-slate-500 font-medium mb-1">Station Sponsorship</div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Memorial (bronze + granite)</span>
          <span className="font-semibold text-[#4A5D3F]">$30,000–$50,000</span>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span className="text-slate-500">Exercise equipment</span>
          <span className="font-semibold text-[#4A5D3F]">$30,000–$50,000</span>
        </div>
      </div>
      <a href="/sponsors" className="mt-4 block text-center rounded-lg bg-[#4A5D3F] text-white text-sm font-semibold px-4 py-2 hover:bg-[#3a4a30] transition-colors">
        Sponsor This Station →
      </a>
    </div>
  );
}
