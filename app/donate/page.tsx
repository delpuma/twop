
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
      <section className="bg-[#4A5D3F] text-white">
        <Container className="py-16">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 mb-4">501(c)(3) · Tax-Deductible</div>
            <h1 className="text-5xl font-bold tracking-tight leading-tight">Every dollar brings a veteran home.</h1>
            <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl">
              When we say bring every man home, we mean it. Your support funds housing, healthcare, workforce training, and a permanent veteran memorial corridor in Clermont, Florida.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#campaigns" className="rounded-lg bg-amber-500 text-white font-semibold px-8 py-3.5 hover:bg-amber-600 transition-colors">Donate Now →</a>
              <a href="#check" className="rounded-lg bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 hover:bg-white/20 transition-colors">Donate by Check</a>
            </div>
          </div>
        </Container>
      </section>

      {/* IMPACT PER DOLLAR */}
      <section className="bg-slate-900 text-white">
        <Container className="py-12">
          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">Your Impact</div>
            <h2 className="text-2xl font-bold">See exactly what your donation does</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { amount: "$25", impact: "Covers a week of meals for one veteran in our program" },
              { amount: "$100", impact: "Funds transportation to VA appointments and job interviews for a month" },
              { amount: "$500", impact: "Covers one veteran's case management and support services for a month" },
              { amount: "$2,800+", impact: "Fully sponsors one veteran through a complete month of stabilization" },
            ].map(({ amount, impact }) => (
              <div key={amount} className="rounded-xl bg-white/5 border border-white/10 p-5 text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">{amount}</div>
                <p className="text-sm text-slate-400 leading-relaxed">{impact}</p>
              </div>
            ))}
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
                <a href="#check" className="block text-center rounded-lg bg-[#4A5D3F] text-white font-semibold px-4 py-2.5 hover:bg-[#3a4a30] transition-colors text-sm">Donate to This Fund →</a>
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
                <a href="#check" className="block text-center rounded-lg bg-[#4A5D3F] text-white font-semibold px-4 py-2.5 hover:bg-[#3a4a30] transition-colors text-sm">Donate to Victory Pointe →</a>
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
                <a href="#check" className="block text-center rounded-lg bg-orange-500 text-white font-semibold px-4 py-2.5 hover:bg-orange-600 transition-colors text-sm">Fund a Wash Bus →</a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* VICTORY POINTE BREAKDOWN */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-16">
          <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-2">Victory Pointe Breakdown</div>
          <h2 className="text-3xl font-bold mb-3">What we're building — piece by piece</h2>
          <p className="text-slate-600 mb-10 max-w-2xl">Every station can be sponsored by one organization or crowdfunded by the whole community. No contribution is too small — every dollar is recognized.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Stations 1–10 — Bronze Memorials", amount: "$300,000", desc: "Custom bronze relief plaques and polished granite pedestals honoring fallen Central Florida veterans by name.", color: "green" },
              { title: "Stations 1–10 — Fitness Equipment", amount: "$300,000", desc: "Branch-themed outdoor fitness equipment — Army, Marines, Navy, Air Force, Coast Guard, Space Force, Special Ops, First Responders, Skilled Trades, and Wellness.", color: "green" },
              { title: "Station 11 — Honor Plaza", amount: "~$200,000", desc: "6 life-size bronze Military Working Dog statues, multi-user fitness structure, reflection seating, and flag feature.", color: "amber" },
              { title: "Yellow Building — Intake Office", amount: "$100,000", desc: "Equipment and renovations for the veteran intake and navigation hub — where veterans get connected to housing, healthcare, and workforce support.", color: "green" },
              { title: "QR & VR Education", amount: "$250,000", desc: "Interactive and VR content at all 11 stations — veteran stories, 360° experiences, and school-ready curriculum for K–12 students.", color: "blue" },
            ].map(({ title, amount, desc, color }) => (
              <div key={title} className={`rounded-xl border-2 p-6 ${color === "amber" ? "border-amber-300 bg-amber-50" : color === "blue" ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-white"}`}>
                <div className={`text-xs uppercase tracking-wide font-semibold mb-1 ${color === "amber" ? "text-amber-700" : color === "blue" ? "text-blue-700" : "text-slate-500"}`}>{title}</div>
                <div className={`text-2xl font-bold mb-2 ${color === "amber" ? "text-amber-700" : color === "blue" ? "text-blue-700" : "text-[#4A5D3F]"}`}>{amount}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
            <div className="rounded-xl border-2 border-[#4A5D3F] bg-[#4A5D3F]/5 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wide text-[#4A5D3F] font-semibold mb-1">Total Project</div>
                <div className="text-3xl font-bold text-[#4A5D3F]">~$1,150,000</div>
                <p className="mt-2 text-sm text-slate-600">One sponsor, many sponsors, or the whole community — every contribution moves us closer to breaking ground.</p>
              </div>
              <Link href="/sponsor" className="mt-5 block text-center rounded-lg bg-[#4A5D3F] text-white text-sm font-semibold px-4 py-2.5 hover:bg-[#3a4a30] transition-colors">Become a Sponsor →</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CHECK DONATIONS */}
      <section id="check" className="bg-slate-50 border-b border-slate-200">
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
