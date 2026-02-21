
import Container from "../../components/Container";
import Link from "next/link";
import { buildMeta } from "../../lib/seo";

export const metadata = buildMeta(
  "Veteran Programs — Housing, Healthcare & Workforce",
  "Warrior Outreach Project programs: transitional housing, healthcare navigation, workforce development, Victory Pointe fitness corridor, and community support for veterans in Florida.",
  "/programs",
  "veteran transitional housing, veteran healthcare navigation, veteran workforce training, veteran programs Florida, veteran support programs"
);

export default function Programs(){
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#4A5D3F] text-white">
        <Container className="py-16">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 mb-4">What We Do</div>
            <h1 className="text-5xl font-bold tracking-tight leading-tight">Programs built to get veterans home — and keep them there.</h1>
            <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl">
              We don't just hand out resources. We walk alongside veterans through housing, healthcare, workforce training, and community — until they're stable, employed, and thriving.
            </p>
          </div>
        </Container>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-slate-900 text-white">
        <Container className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "20–30", label: "Veterans in residential program at a time" },
              { stat: "9–12 mo", label: "Average time to stable independent housing" },
              { stat: "$2,800–$3,500", label: "Per veteran per month — all-in cost" },
              { stat: "1,000s", label: "Veterans we aim to serve annually at scale" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-amber-400">{stat}</div>
                <div className="mt-1 text-sm text-slate-400 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROGRAMS */}
      <section className="bg-slate-50 border-b border-slate-200">
        <Container className="py-16 space-y-6">

          <ProgramCard
            emoji="🏠"
            color="green"
            title="Transitional Housing"
            subtitle="Safe, dignified housing with a clear path to independence"
            details={[
              "20–30 veterans accepted into residential program at a time",
              "Private or semi-private rooms with shared common areas",
              "On-site case management and peer support 7 days a week",
              "Average program length: 9–12 months — graduates cycle out into independent housing, making room for the next veteran",
              "Sobriety support, stability planning, and life skills development built into daily structure",
              "Long-term goal: serve thousands of veterans annually as the program scales",
            ]}
          />

          <ProgramCard
            emoji="🏥"
            color="red"
            title="Healthcare Navigation"
            subtitle="Cutting through the red tape so veterans get the care they've earned"
            details={[
              "VA benefits enrollment and disability claims assistance",
              "Coordination with local healthcare providers and specialists",
              "Mental health counseling referrals — PTSD, depression, anxiety, and trauma",
              "Substance use treatment connections and ongoing recovery support",
              "Prescription assistance and medication management",
              "Dental, vision, and preventive care navigation",
              "Telehealth setup and support for veterans with mobility or transportation barriers",
            ]}
          />

          <ProgramCard
            emoji="🔧"
            color="amber"
            title="Workforce Development"
            subtitle="Real skills, real jobs, real independence"
            details={[
              "Construction skills training — framing, electrical, plumbing, HVAC basics",
              "OSHA 10 and OSHA 30 certifications and safety training",
              "Job placement with local contractors, builders, and businesses",
              "Emergency response team participation — hurricane prep, disaster relief, and recovery operations",
              "Hospitality pathway in partnership with IG Hotels",
              "Small business ownership track for veterans ready to build their own future",
              "Resume building, interview prep, and ongoing career counseling",
              "Employer partner network actively hiring program graduates",
            ]}
          />

          <ProgramCard
            emoji="🍽️"
            color="blue"
            title="Basic Needs & Stabilization"
            subtitle="Meeting veterans where they are — no questions, no barriers"
            details={[
              "Three meals a day and full nutrition support",
              "Clothing, hygiene supplies, and personal care items",
              "Transportation to VA appointments, job interviews, and program activities",
              "Emergency financial assistance for critical needs — utilities, medications, ID replacement",
              "Connection to community food banks, pantries, and mutual aid networks",
              "Phone and internet access for job searching and benefit management",
            ]}
          />

          <ProgramCard
            emoji="🤝"
            color="purple"
            title="Peer Support & Community"
            subtitle="Because healing happens in community, not isolation"
            details={[
              "Peer mentorship from veterans who've successfully completed the program",
              "Group activities, recreational outings, and team-building events",
              "Service projects that give back to the Clermont community — veterans as contributors, not just recipients",
              "Family reunification support and counseling when appropriate",
              "Alumni network and ongoing support after program graduation",
              "Weekly group sessions focused on purpose, identity, and life after service",
            ]}
          />

          <ProgramCard
            emoji="🏆"
            color="amber"
            title="Victory Pointe Fitness & Memorial Corridor"
            subtitle="A living, breathing veteran community hub at the heart of Clermont"
            details={[
              "11 branch-themed outdoor fitness stations along the South Lake Trail at Victory Pointe",
              "Each station features exercise equipment AND a custom bronze relief memorial honoring fallen Central Florida veterans",
              "Dual push-up/dip stations at every location — 22 total, symbolizing the mission to end the 22 veteran suicides per day",
              "QR code + VR education experience at every station — interactive veteran stories for visitors and school groups",
              "Station 11: Honor Plaza — 6 life-size bronze Military Working Dog statues, reflection seating, and flag feature",
              "Veteran Intake & Navigation Office at the existing yellow building on-site",
              "Free weekly programming: military bootcamp, lakeside yoga, live music by veterans, survival skills classes, and more",
              "Adopt-a-Station program for local businesses and civic groups to steward the corridor long-term",
            ]}
          />

        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-16">
          <h2 className="text-3xl font-semibold">How the program works</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">Our model is designed to move veterans through stabilization efficiently — so we can serve more people without sacrificing quality of care.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { step: "1", title: "Intake & Assessment", desc: "Veteran applies or is referred. We assess housing, health, employment, and support needs within 48 hours." },
              { step: "2", title: "Stabilization", desc: "Housing, meals, healthcare navigation, and basic needs secured. Focus on safety and stability first." },
              { step: "3", title: "Growth & Training", desc: "Workforce training, mental health support, peer mentorship, and life skills development." },
              { step: "4", title: "Independence", desc: "Veteran graduates into stable independent housing and employment. Alumni network keeps them connected." },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <div className="w-12 h-12 rounded-full bg-[#4A5D3F] text-white flex items-center justify-center text-xl font-bold mb-4">{step}</div>
                <div className="font-semibold text-lg">{title}</div>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* COST MODEL */}
      <section className="bg-slate-900 text-white">
        <Container className="py-12">
          <h2 className="text-2xl font-semibold mb-2">What it costs — and why it's worth it</h2>
          <p className="text-slate-400 max-w-2xl text-sm mb-8">Our stabilization model is dramatically more cost-effective than emergency services, incarceration, or chronic homelessness — and it produces lasting outcomes.</p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="text-xs uppercase tracking-wide text-amber-400 font-semibold mb-1">Our Program</div>
              <div className="text-3xl font-bold text-white">$2,800–$3,500<span className="text-base font-normal text-slate-400">/mo</span></div>
              <p className="mt-2 text-sm text-slate-400">Housing + food + case management + healthcare navigation + workforce support</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="text-xs uppercase tracking-wide text-red-400 font-semibold mb-1">Emergency Room Visits</div>
              <div className="text-3xl font-bold text-white">$3,500+<span className="text-base font-normal text-slate-400">/visit</span></div>
              <p className="mt-2 text-sm text-slate-400">A single ER visit for an unhoused veteran often costs more than a full month in our program</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="text-xs uppercase tracking-wide text-red-400 font-semibold mb-1">Incarceration</div>
              <div className="text-3xl font-bold text-white">$3,500–$5,000+<span className="text-base font-normal text-slate-400">/mo</span></div>
              <p className="mt-2 text-sm text-slate-400">The cost of incarcerating a veteran — with no path to stability or reintegration</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#4A5D3F] text-white">
        <Container className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Ready to get involved?</h2>
            <p className="mt-1 text-white/80 max-w-xl">Sponsor a veteran, volunteer your time, or submit a letter of support for Victory Pointe. Every action moves the mission forward.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/sponsor" className="rounded-lg bg-amber-500 text-white font-semibold px-6 py-3 hover:bg-amber-600 transition-colors">Sponsor a Vet →</Link>
            <Link href="/get-help" className="rounded-lg bg-white text-[#4A5D3F] font-semibold px-6 py-3 hover:bg-slate-100 transition-colors">Get Help →</Link>
          </div>
        </Container>
      </section>

    </main>
  );
}

function ProgramCard({ emoji, color, title, subtitle, details }: {
  emoji: string; color: string; title: string; subtitle: string; details: string[];
}) {
  const border = color === "green" ? "border-[#4A5D3F]/30" : color === "red" ? "border-red-200" : color === "amber" ? "border-amber-200" : color === "blue" ? "border-blue-200" : "border-purple-200";
  const badge = color === "green" ? "bg-[#4A5D3F]/10 text-[#4A5D3F]" : color === "red" ? "bg-red-50 text-red-700" : color === "amber" ? "bg-amber-50 text-amber-700" : color === "blue" ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700";
  const check = color === "green" ? "text-[#4A5D3F]" : color === "red" ? "text-red-500" : color === "amber" ? "text-amber-500" : color === "blue" ? "text-blue-500" : "text-purple-500";
  return (
    <div className={`rounded-xl border-2 bg-white p-8 ${border}`}>
      <div className="flex items-start gap-4">
        <div className={`text-4xl shrink-0 rounded-xl p-3 ${badge}`}>{emoji}</div>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-1 text-slate-500">{subtitle}</p>
        </div>
      </div>
      <ul className="mt-6 grid gap-2 md:grid-cols-2">
        {details.map((d, i) => (
          <li key={i} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
            <span className={`font-bold shrink-0 mt-0.5 ${check}`}>✓</span>
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
