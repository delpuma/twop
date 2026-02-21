
import Link from "next/link";
import Container from "../../components/Container";
import { buildMeta } from "../../lib/seo";

export const metadata = buildMeta(
  "Donate — Support Veterans",
  "Donate to the Warrior Outreach Project. Fund veteran housing, the Victory Pointe fitness corridor in Clermont FL, and the Wash Bus mobile shower project for homeless veterans.",
  "/donate",
  "donate to veterans, veteran charity donation, fund veteran housing, Victory Pointe donation, homeless veteran donation, 501c3 veteran donation tax deductible"
);

export default function Donate(){
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-[#1a2416] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{position:'absolute',width:600,height:600,borderRadius:'50%',background:'#4A5D3F',filter:'blur(90px)',opacity:0.2,top:-200,right:-100}} />
          <div style={{position:'absolute',width:400,height:400,borderRadius:'50%',background:'#b45309',filter:'blur(80px)',opacity:0.15,bottom:-100,left:'10%'}} />
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',backgroundSize:'60px 60px'}} />
        </div>
        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              501(c)(3) · All Donations Tax-Deductible
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">Every dollar<br /><span className="text-amber-400">brings a veteran home.</span></h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              When we say bring every man home, we mean it. Your support funds housing, healthcare, workforce training, and a proposed veteran memorial corridor in Clermont, Florida.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#campaigns" className="rounded-xl bg-amber-500 text-white font-bold px-8 py-4 hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/20">Donate Now →</a>
              <a href="#mail" className="rounded-xl bg-white/10 border border-white/20 text-white font-bold px-8 py-4 hover:bg-white/20 transition-all">Donate by Check</a>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
              {[
                { value: "$25", label: "Feeds a vet for a week" },
                { value: "$100", label: "A month of transportation" },
                { value: "$500", label: "A month of case management" },
                { value: "$2,800", label: "Full month of stabilization" },
              ].map(({ value, label }) => (
                <div key={value}>
                  <div className="text-2xl font-black text-amber-400">{value}</div>
                  <div className="mt-1 text-xs text-white/50 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 22 A DAY URGENCY */}
      <section className="bg-red-700 text-white">
        <Container className="py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black opacity-90">22</div>
              <div>
                <div className="font-bold">Veterans lost to suicide every single day.</div>
                <div className="text-sm text-red-200">40,000+ veterans are homeless tonight. Your donation changes that.</div>
              </div>
            </div>
            <a href="#campaigns" className="shrink-0 rounded-xl bg-white text-red-700 font-bold px-6 py-2.5 hover:bg-red-50 transition-colors text-sm">Give Now →</a>
          </div>
        </Container>
      </section>

      {/* CAMPAIGNS */}
      <section id="campaigns" className="bg-slate-50 border-b border-slate-200">
        <Container className="py-16">
          <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-2">Active Campaigns</div>
          <h2 className="text-3xl font-bold mb-3">Choose where your dollars go</h2>
          <p className="text-slate-600 mb-10 max-w-2xl">Every dollar goes directly to veterans. Pick a campaign or give to the general fund to support wherever it's needed most.</p>
          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border-2 border-slate-200 bg-white p-7 flex flex-col">
              <div className="text-4xl mb-4">🇺🇸</div>
              <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">General Fund</div>
              <h3 className="text-xl font-bold mb-3">General Mission Fund</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">Keeps operations running across NYC and Florida — housing navigation, healthcare support, workforce training, emergency assistance, and basic needs for veterans in crisis.</p>
              <div className="mt-5 pt-5 border-t border-slate-100">
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-slate-500">Goal</span>
                  <span className="font-bold text-slate-900">$150,000</span>
                </div>
                <a href="#mail" className="block text-center rounded-lg bg-[#4A5D3F] text-white font-semibold px-4 py-2.5 hover:bg-[#3a4a30] transition-colors text-sm">Donate to This Fund →</a>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-[#4A5D3F] bg-[#4A5D3F]/5 p-7 flex flex-col relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-[#4A5D3F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Featured</span>
              </div>
              <div className="text-4xl mb-4">🏆</div>
              <div className="text-xs uppercase tracking-wide text-[#4A5D3F] font-semibold mb-1">Clermont, FL</div>
              <h3 className="text-xl font-bold mb-3">Victory Pointe Corridor</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">11-station veteran fitness corridor, bronze memorials, Military Working Dog Honor Plaza, QR/VR education at every station, and veteran intake office. $3M private fundraising matched by $3M public partnership.</p>
              <div className="mt-5 pt-5 border-t border-[#4A5D3F]/20">
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-slate-500">Goal</span>
                  <span className="font-bold text-slate-900">$3M private + $3M public</span>
                </div>
                <a href="#mail" className="block text-center rounded-lg bg-[#4A5D3F] text-white font-semibold px-4 py-2.5 hover:bg-[#3a4a30] transition-colors text-sm">Donate to Victory Pointe →</a>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-orange-400 bg-orange-50 p-7 flex flex-col relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Urgent</span>
              </div>
              <div className="text-4xl mb-4">🚌</div>
              <div className="text-xs uppercase tracking-wide text-orange-600 font-semibold mb-1">Mobile Services</div>
              <h3 className="text-xl font-bold mb-3">Wash Bus Project</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">Mobile shower and laundry services for homeless veterans. Each fully-equipped bus brings dignity directly to veterans living on the street — no shelter required, no barriers.</p>
              <div className="mt-5 pt-5 border-t border-orange-200">
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-slate-500">Goal per bus</span>
                  <span className="font-bold text-slate-900">$125,000</span>
                </div>
                <a href="#mail" className="block text-center rounded-lg bg-orange-500 text-white font-semibold px-4 py-2.5 hover:bg-orange-600 transition-colors text-sm">Fund a Wash Bus →</a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* VICTORY POINTE BREAKDOWN */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-16">
          <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-2">Victory Pointe — Proposed 2026–2027</div>
          <h2 className="text-3xl font-bold mb-3">What we're proposing — piece by piece</h2>
          <p className="text-slate-600 mb-10 max-w-2xl">Every station can be sponsored by one organization or crowdfunded by the whole community. No contribution is too small — every dollar moves us closer to breaking ground.</p>

          {/* Big total callout */}
          <div className="rounded-2xl bg-slate-900 text-white p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">Full Project Goal</div>
              <div className="text-5xl font-black text-white">$3,000,000</div>
              <p className="mt-2 text-slate-400 text-sm max-w-lg">Private fundraising goal for the complete Victory Pointe Veteran Fitness &amp; Memorial Corridor — stations, memorials, Honor Plaza, QR/VR education, and veteran intake hub.</p>
            </div>
            <div className="shrink-0 flex flex-col gap-3 text-center">
              <Link href="/sponsor" className="rounded-xl bg-amber-500 text-white font-bold px-8 py-3.5 hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/20">Become a Sponsor →</Link>
              <a href="#mail" className="rounded-xl bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 hover:bg-white/20 transition-all text-sm">Donate by Check</a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Stations 1–10 — Bronze Memorials", amount: "$300,000", desc: "Custom bronze relief plaques and polished granite pedestals honoring fallen Central Florida veterans by name.", color: "green" },
              { title: "Stations 1–10 — Fitness Equipment", amount: "$300,000", desc: "Branch-themed outdoor fitness equipment — Army, Marines, Navy, Air Force, Coast Guard, Space Force, Special Ops, First Responders, Skilled Trades, and Wellness.", color: "green" },
              { title: "Station 11 — Honor Plaza", amount: "~$200,000", desc: "6 life-size bronze Military Working Dog statues, multi-user fitness structure, reflection seating, and flag feature.", color: "amber" },
              { title: "Yellow Building — Intake Office", amount: "$100,000", desc: "Equipment and renovations for the veteran intake and navigation hub — where veterans get connected to housing, healthcare, and workforce support.", color: "green" },
              { title: "QR & VR Education", amount: "$250,000", desc: "Interactive and VR content at all 11 stations — veteran stories, 360° experiences, and school-ready curriculum for K–12 students.", color: "blue" },
              { title: "Program Operations & Staffing", amount: "$1,850,000", desc: "Veteran intake staff, case managers, program coordinators, and operational costs to run the corridor and intake hub at full capacity for the first 3 years.", color: "purple" },
            ].map(({ title, amount, desc, color }) => (
              <div key={title} className={`rounded-xl border-2 p-6 ${
                color === "amber" ? "border-amber-300 bg-amber-50" :
                color === "blue" ? "border-blue-200 bg-blue-50" :
                color === "purple" ? "border-purple-200 bg-purple-50" :
                "border-slate-200 bg-white"}`}>
                <div className={`text-xs uppercase tracking-wide font-semibold mb-1 ${
                  color === "amber" ? "text-amber-700" : color === "blue" ? "text-blue-700" : color === "purple" ? "text-purple-700" : "text-slate-500"}`}>{title}</div>
                <div className={`text-2xl font-bold mb-2 ${
                  color === "amber" ? "text-amber-700" : color === "blue" ? "text-blue-700" : color === "purple" ? "text-purple-700" : "text-[#4A5D3F]"}`}>{amount}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CHECK DONATIONS */}
      <section id="mail" className="bg-slate-50 border-b border-slate-200">
        <Container className="py-16">
          <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-2 text-center">Prefer to write a check?</div>
          <h2 className="text-3xl font-bold text-center mb-10">Donate by Mail</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-[#4A5D3F]/30 bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4A5D3F]/10 flex items-center justify-center text-xl">🗽</div>
                  <div className="font-bold text-lg">NYC Operations</div>
                </div>
                <p className="text-sm text-slate-500 mb-3">General mission support and NYC programs</p>
                <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-700 leading-relaxed">
                  The Warrior Outreach Project<br/>
                  567 Tompkins Ave Unit 50427<br/>
                  Staten Island, NY 10305
                </div>
              </div>
              <div className="rounded-xl border-2 border-[#4A5D3F]/30 bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4A5D3F]/10 flex items-center justify-center text-xl">🌴</div>
                  <div className="font-bold text-lg">Florida Operations</div>
                </div>
                <p className="text-sm text-slate-500 mb-3">Victory Pointe and Clermont programs</p>
                <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-700 leading-relaxed">
                  The Warrior Outreach Project<br/>
                  11505 Pineloch Loop<br/>
                  Clermont, FL 34711
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-[#4A5D3F] text-white p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="text-3xl shrink-0">✉️</div>
              <div>
                <div className="font-bold text-lg">Make checks payable to: The Warrior Outreach Project</div>
                <p className="mt-1 text-white/80 text-sm">Include a note indicating which campaign you'd like to support, or leave blank for general mission support.</p>
              </div>
            </div>
            <div className="text-center text-sm text-slate-500 space-y-1">
              <p>The Warrior Outreach Project is a 501(c)(3) nonprofit organization.</p>
              <p>All contributions are fully tax-deductible under current law.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-slate-900 text-white">
        <Container className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-lg">Not ready to donate? There are other ways to help.</div>
            <p className="mt-1 text-slate-400 text-sm">Volunteer your time, sponsor a station, or submit a letter of support for Victory Pointe.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/volunteer" className="rounded-lg bg-white text-slate-900 font-semibold px-5 py-2.5 hover:bg-slate-100 transition-colors text-sm">Volunteer →</Link>
            <Link href="/sponsor" className="rounded-lg bg-amber-500 text-white font-semibold px-5 py-2.5 hover:bg-amber-600 transition-colors text-sm">Sponsor →</Link>
          </div>
        </Container>
      </section>

    </main>
  );
}
