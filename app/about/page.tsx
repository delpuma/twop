
import Container from "../../components/Container";
import Link from "next/link";
import { buildMeta } from "../../lib/seo";

export const metadata = buildMeta(
  "About Us",
  "Learn about the Warrior Outreach Project — our mission, team, and programs providing veteran housing, healthcare navigation, and workforce training in Florida.",
  "/about",
  "about Warrior Outreach Project, veteran nonprofit mission, veteran housing nonprofit, veteran 501c3 Florida"
);

const TEAM = [
  { name: "Chris Fabiano",    title: "Founder & CEO",  vet: true,  photo: "/images/board/chris.jpg",      bio: "Veteran and visionary behind the Warrior Outreach Project. Chris built this mission from the ground up to ensure no veteran is left behind." },
  { name: "Nicholas Moroz",   title: "CTO",            vet: true,  photo: "/images/board/nicholas.jpg",   bio: "Veteran and technology leader driving the digital infrastructure and innovation behind the project." },
  { name: "Francisco",        title: "COO",            vet: true,  photo: "/images/board/francisco.jpg",  bio: "Veteran and operations leader ensuring every program runs with precision, accountability, and care." },
  { name: "Ryan Morales",     title: "CMO",            vet: false, photo: null,                           bio: "Marketing and brand strategist focused on growing community awareness and driving the mission forward." },
  { name: "Matt Sanjari",     title: "CFO",            vet: false, photo: null,                           bio: "Financial strategist ensuring the organization operates with transparency, sustainability, and impact." },
  { name: "Ernest",           title: "CPO",            vet: true,  photo: "/images/board/ernest.jpg",     bio: "Veteran and program architect designing the systems and pathways that move veterans from crisis to independence." },
];

export default function About(){
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#4A5D3F] text-white">
        <Container className="py-16">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 mb-4">501(c)(3) Nonprofit</div>
            <h1 className="text-5xl font-bold tracking-tight leading-tight">We exist for one reason — to bring veterans home.</h1>
            <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl">
              The Warrior Outreach Project is a veteran-led nonprofit dedicated to ending veteran homelessness through housing, healthcare navigation, workforce training, and community — one veteran at a time.
            </p>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="bg-slate-900 text-white">
        <Container className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "22", label: "Veterans lost to suicide every single day" },
              { stat: "40K+", label: "Veterans experiencing homelessness tonight" },
              { stat: "9–12 mo", label: "Average time to stable housing in our program" },
              { stat: "$2,800", label: "Per veteran per month — all-in stabilization cost" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div className="text-3xl font-bold text-amber-400">{stat}</div>
                <div className="mt-1 text-sm text-slate-400 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* MISSION + STORY */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-3">Our Mission</div>
              <h2 className="text-3xl font-bold leading-snug">Dignity, stability, and independence for every veteran who served.</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The Warrior Outreach Project provides transitional housing, healthcare navigation, workforce training, and emergency support to veterans in crisis. We believe every veteran deserves a clear path to independence — no matter their circumstances.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our program is intentionally designed to help veterans <strong>graduate out of the system</strong>, not remain dependent. Employment placement, skilled trades development, hospitality workforce partnerships, and long-term housing transition support are built into every step.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-3">What We Do</div>
              <div className="space-y-4">
                {[
                  { emoji: "🏠", label: "Housing", desc: "20–30 veterans in residential program at a time. Most graduate to independent housing in 9–12 months, cycling in the next veteran. Goal: thousands served annually." },
                  { emoji: "🏥", label: "Healthcare", desc: "Navigate VA benefits, connect to medical care, mental health support, and substance use treatment." },
                  { emoji: "🔧", label: "Workforce", desc: "Construction, skilled trades, disaster response, hospitality (IG Hotels), and small business ownership pathways." },
                  { emoji: "🍽️", label: "Basic Needs", desc: "Food, clothing, transportation, emergency financial assistance, and case management." },
                  { emoji: "🤝", label: "Community", desc: "Peer mentorship, group support, service projects, and an alumni network that keeps veterans connected." },
                  { emoji: "🏆", label: "Victory Pointe (Proposed 2026–2027)", desc: "A proposed nationally distinctive veteran fitness & memorial corridor in Clermont, FL — with intake hub, Honor Plaza, and QR/VR education at every station. Currently in proposal phase with the City of Clermont." },
                ].map(({ emoji, label, desc }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#4A5D3F]/10 flex items-center justify-center text-lg shrink-0">{emoji}</div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{label}</div>
                      <p className="text-sm text-slate-500 leading-snug mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 border-b border-slate-200">
        <Container className="py-14">
          <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-3 text-center">What We Stand For</div>
          <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <ValueCard emoji="🎖️" title="Dignity" body="Every veteran deserves respect, safety, and a path forward — no matter their circumstances, discharge status, or how long they've been struggling." />
            <ValueCard emoji="📊" title="Accountability" body="We track veterans housed, workforce placements, private dollars leveraged, volunteer hours, and community partnership growth — and we publish the results." />
            <ValueCard emoji="🚀" title="Independence" body="Our model is designed to help veterans graduate out of the system into stable employment, independent housing, and small business ownership — not dependency." />
            <ValueCard emoji="🤝" title="Community" body="Veterans heal in community. We build belonging, purpose, and connection alongside every practical service we provide." />
            <ValueCard emoji="🇺🇸" title="Service" body="Most of our team are veterans themselves. We serve because we know what it means to be served — and what it means to be left behind." />
            <ValueCard emoji="💡" title="Innovation" body="From QR/VR education at Victory Pointe to workforce pipelines and public-private partnerships, we build solutions that scale." />
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-16">
          <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-3 text-center">The People Behind the Mission</div>
          <h2 className="text-3xl font-bold text-center mb-10">Leadership Team</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {TEAM.map(m => (
              <div key={m.name} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col items-center text-center hover:border-[#4A5D3F] hover:shadow-md transition-all">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#4A5D3F]/20" style={{ objectPosition: "center 15%" }} />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-[#4A5D3F] mb-4 flex items-center justify-center text-white text-2xl font-bold border-4 border-[#4A5D3F]/20">
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </div>
                )}
                <div className="font-bold text-lg text-slate-900">{m.name}</div>
                <div className="flex items-center gap-2 mt-1 justify-center flex-wrap">
                  <span className="text-sm text-[#4A5D3F] font-semibold">{m.title}</span>
                  {m.vet && <span className="text-xs bg-amber-100 text-amber-700 border border-amber-200 rounded-full px-2 py-0.5 font-semibold">🎖️ Veteran</span>}
                </div>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#4A5D3F] text-white">
        <Container className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Join the mission.</h2>
            <p className="mt-1 text-white/80 max-w-xl">Sponsor a veteran, volunteer your time, or support Victory Pointe. Every action moves us closer to a world where no veteran is left behind.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/sponsor" className="rounded-lg bg-amber-500 text-white font-semibold px-6 py-3 hover:bg-amber-600 transition-colors">Sponsor a Vet →</Link>
            <Link href="/volunteer" className="rounded-lg bg-white text-[#4A5D3F] font-semibold px-6 py-3 hover:bg-slate-100 transition-colors">Volunteer →</Link>
          </div>
        </Container>
      </section>

    </main>
  );
}

function ValueCard({ emoji, title, body }: { emoji: string; title: string; body: string }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="text-3xl mb-3">{emoji}</div>
      <div className="font-bold text-slate-900 mb-2">{title}</div>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}
