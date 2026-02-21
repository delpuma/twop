import Container from "../components/Container";
import Partners from "../components/Partners";
import BranchesSlider from "../components/BranchesSlider";
import HomeHero from "../components/HomeHero";
import Link from "next/link";
import Image from "next/image";
import { buildMeta } from "../lib/seo";
import { supabaseServer } from "../lib/supabaseServer";

export const metadata = buildMeta(
  "Veteran Housing, Fitness & Community",
  "Warrior Outreach Project — 501(c)(3) nonprofit providing veteran housing, healthcare navigation, workforce training, and building Victory Pointe in Clermont, Florida.",
  "/",
  "veteran nonprofit, veteran housing Florida, veteran support Clermont, Victory Pointe Clermont, donate to veterans, veteran charity 501c3"
);

async function getStats() {
  try {
    const supabase = supabaseServer();
    const [{ count: supporters }, { count: letters }] = await Promise.all([
      supabase.from("signatures").select("*", { count: "exact", head: true }),
      supabase.from("letters").select("*", { count: "exact", head: true }),
    ]);
    return { supporters: supporters ?? 0, letters: letters ?? 0 };
  } catch { return { supporters: 0, letters: 0 }; }
}

export default async function Home(){
  const { supporters, letters } = await getStats();

  return (
    <div>

      {/* ANIMATED HERO */}
      <HomeHero supporters={supporters} letters={letters} />

      {/* 22 A DAY — URGENCY STRIP */}
      <section className="bg-red-700 text-white">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-5xl font-black opacity-90">22</div>
              <div>
                <div className="font-bold text-lg">Veterans lost to suicide every single day.</div>
                <div className="text-sm text-red-200">40,000+ veterans are homeless tonight. This is why we exist.</div>
              </div>
            </div>
            <Link href="/donate" className="shrink-0 rounded-xl bg-white text-red-700 font-bold px-6 py-3 hover:bg-red-50 transition-colors">
              Help Change This →
            </Link>
          </div>
        </Container>
      </section>

      <BranchesSlider />

      {/* MISSION PILLARS */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-20">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-2">What We Do</div>
            <h2 className="text-4xl font-black tracking-tight">A complete system of support.</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">We don't hand out resources and walk away. We walk alongside veterans through every step — until they're stable, employed, and thriving.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { emoji: "🏠", title: "Transitional Housing", desc: "20–30 veterans in structured residential program at a time. Most graduate to independent housing in 9–12 months.", href: "/programs" },
              { emoji: "🏥", title: "Healthcare Navigation", desc: "Cut through VA red tape. Connect to medical care, mental health support, and benefits veterans have earned.", href: "/programs" },
              { emoji: "🔧", title: "Workforce Development", desc: "Construction, skilled trades, disaster response, hospitality (IG Hotels), and small business ownership pathways.", href: "/programs" },
              { emoji: "🏆", title: "Victory Pointe Corridor", desc: "Proposed 2026–2027 — 11 branch-themed fitness stations, bronze memorials, Military Working Dog Honor Plaza, and QR/VR education in Clermont, FL. Currently in proposal phase.", href: "/victory-pointe" },
              { emoji: "🍽️", title: "Basic Needs & Stabilization", desc: "Meals, clothing, transportation, emergency financial assistance, and case management — no barriers.", href: "/programs" },
              { emoji: "🤝", title: "Peer Support & Community", desc: "Mentorship from veterans who've made it through. Group support, service projects, and an alumni network.", href: "/programs" },
            ].map(({ emoji, title, desc, href }) => (
              <Link key={title} href={href} className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-[#4A5D3F] hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{emoji}</div>
                <div className="font-bold text-lg text-slate-900 group-hover:text-[#4A5D3F] transition-colors">{title}</div>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{desc}</p>
                <div className="mt-4 text-sm font-semibold text-[#4A5D3F] opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* PHOTO GRID */}
      <section className="bg-slate-900">
        <Container className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="relative col-span-2 md:col-span-1 row-span-2 h-72 md:h-full rounded-2xl overflow-hidden">
              <Image src="/images/site/veteran-attention.jpg" alt="Veteran at attention" fill className="object-cover brightness-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-xs uppercase tracking-wide text-amber-400 font-semibold">Our Mission</div>
                <div className="font-bold text-lg leading-snug">Honoring those who served</div>
              </div>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image src="/images/site/salute-statue.jpg" alt="Salute to veterans" fill className="object-cover brightness-90" />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image src="/images/site/veteran-ptsd.jpg" alt="Veteran support" fill className="object-cover brightness-90" />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image src="/images/site/veteran-photo.jpg" alt="Veterans" fill className="object-cover brightness-90" />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image src="/images/site/homeless-eating.jpg" alt="Outreach support" fill className="object-cover brightness-90" />
            </div>
          </div>
        </Container>
      </section>

      <Partners />

      {/* VICTORY POINTE FEATURE */}
      <section className="bg-slate-50 border-y border-slate-200">
        <Container className="py-20">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-3">Clermont, Florida · Proposed 2026–2027</div>
              <h2 className="text-4xl font-black tracking-tight leading-snug">Victory Pointe — A proposed nationally distinctive veteran corridor.</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Currently in proposal phase with the City of Clermont. If approved, 11 branch-themed fitness stations along the South Lake Trail, bronze memorials honoring fallen Central Florida veterans, a Military Working Dog Honor Plaza, QR/VR education at every station, and a veteran intake office at the existing yellow building on-site.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { value: "11", label: "Fitness stations" },
                  { value: "22", label: "Push-up/dip units" },
                  { value: "6", label: "Bronze MWD statues" },
                  { value: "$3M", label: "Private fundraising goal" },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-xl bg-white border border-slate-200 p-4 text-center">
                    <div className="text-2xl font-black text-[#4A5D3F]">{value}</div>
                    <div className="text-xs text-slate-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <Link href="/victory-pointe" className="rounded-xl bg-[#4A5D3F] text-white font-bold px-6 py-3 hover:bg-[#3a4a30] transition-colors">See the Full Plan →</Link>
                <Link href="/sponsor" className="rounded-xl border-2 border-[#4A5D3F] text-[#4A5D3F] font-bold px-6 py-3 hover:bg-[#4A5D3F] hover:text-white transition-colors">Sponsor a Station</Link>
              </div>
            </div>
            <div className="rounded-2xl bg-[#4A5D3F] text-white p-8 space-y-5">
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Guiding Light Program</div>
              <h3 className="text-2xl font-bold">Directly sponsor a veteran's journey to independence.</h3>
              <p className="text-white/70 text-sm leading-relaxed">Your contribution covers housing, food, case management, healthcare navigation, and workforce support for one veteran — for one month or longer.</p>
              <div className="space-y-3">
                {[
                  { tier: "One Month", price: "$2,800–$3,500" },
                  { tier: "One Quarter", price: "$8,400–$10,500" },
                  { tier: "Full Stabilization", price: "$25,000–$42,000" },
                ].map(({ tier, price }) => (
                  <div key={tier} className="flex justify-between items-center rounded-lg bg-white/10 px-4 py-3">
                    <span className="text-sm font-medium">{tier}</span>
                    <span className="text-amber-400 font-bold text-sm">{price}</span>
                  </div>
                ))}
              </div>
              <Link href="/sponsor" className="block text-center rounded-xl bg-amber-500 text-white font-bold px-6 py-3 hover:bg-amber-400 transition-colors">Join the Guiding Light Program →</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="bg-[#4A5D3F] text-white">
        <Container className="py-16">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">Projected Impact</div>
            <h2 className="text-3xl font-black">Rapid stabilization. Measurable outcomes.</h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto text-sm">Our program tracks housing placements, workforce placements, private dollars leveraged, volunteer hours, and community partnership growth.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            {[
              { label: "Year 1 regional activity", value: "$1.2M – $1.8M" },
              { label: "Year 2 regional activity", value: "$2.0M – $2.8M" },
              { label: "Year 3 regional activity", value: "$3.0M+" },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-2xl bg-white/10 border border-white/20 p-6 text-center">
                <div className="text-xs uppercase tracking-wide text-white/50 mb-2">{label}</div>
                <div className="text-3xl font-black text-amber-400">{value}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/40">Preliminary model using conservative assumptions. Reflects workforce activation, visitation, sponsorship activity, and program operations.</p>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 text-white">
        <Container className="py-16 text-center">
          <h2 className="text-4xl font-black tracking-tight">Ready to make a difference?</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">Every action — big or small — moves a veteran closer to stability, purpose, and home.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="rounded-xl bg-amber-500 text-white font-bold px-10 py-4 hover:bg-amber-400 transition-all hover:scale-105 text-base shadow-lg shadow-amber-500/20">Donate Now →</Link>
            <Link href="/victory-pointe#sign" className="rounded-xl bg-white/10 border border-white/20 text-white font-bold px-8 py-4 hover:bg-white/20 transition-all text-base">✍️ Sign the Petition</Link>
            <Link href="/volunteer" className="rounded-xl border border-white/10 text-white/70 font-medium px-8 py-4 hover:text-white hover:border-white/30 transition-all text-base">Volunteer</Link>
          </div>
          <p className="mt-8 text-slate-500 text-sm">Prefer to write a check? Mail to: <span className="text-slate-300 font-medium">The Warrior Outreach Project, 11505 Pineloch Loop, Clermont FL 34711</span> — <Link href="/donate#mail" className="text-amber-400 hover:text-amber-300">full details →</Link></p>
        </Container>
      </section>

    </div>
  );
}
