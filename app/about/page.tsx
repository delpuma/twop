
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
  { name: "Chris Fabiano",  title: "Founder & CEO", vet: true,  photo: "/images/board/chris.jpg",      bio: "Veteran and visionary behind the Warrior Outreach Project. Chris built this mission from the ground up to ensure no veteran is left behind." },
  { name: "Nicholas Moroz", title: "CTO",            vet: true,  photo: "/images/board/nicholas.jpg",   bio: "Veteran and technology leader driving the digital infrastructure and innovation behind the project." },
  { name: "Francisco Baez", title: "COO",            vet: true,  photo: "/images/board/francisco.jpg",  bio: "Veteran and operations leader ensuring every program runs with precision, accountability, and care." },
  { name: "Ryan Morales",   title: "CMO",            vet: false, photo: null,                           bio: "Marketing and brand strategist focused on growing community awareness and driving the mission forward." },
  { name: "Matt Sanjari",   title: "CFO",            vet: false, photo: null,                           bio: "Financial strategist ensuring the organization operates with transparency, sustainability, and impact." },
  { name: "Ernest Reid",    title: "CPO",            vet: true,  photo: "/images/board/ernest.jpg",     bio: "Veteran and program architect designing the systems and pathways that move veterans from crisis to independence." },
];

const VALUES = [
  { emoji: "🎖️", title: "Dignity",        color: "border-amber-400",   body: "Every veteran deserves respect, safety, and a path forward — no matter their circumstances, discharge status, or how long they've been struggling." },
  { emoji: "📊", title: "Accountability", color: "border-blue-400",    body: "We track veterans housed, workforce placements, private dollars leveraged, and volunteer hours — and we publish the results." },
  { emoji: "🚀", title: "Independence",   color: "border-green-400",   body: "Our model helps veterans graduate out of the system into stable employment, independent housing, and small business ownership — not dependency." },
  { emoji: "🤝", title: "Community",      color: "border-purple-400",  body: "Veterans heal in community. We build belonging, purpose, and connection alongside every practical service we provide." },
  { emoji: "🇺🇸", title: "Service",       color: "border-red-400",     body: "Most of our team are veterans themselves. We serve because we know what it means to be served — and what it means to be left behind." },
  { emoji: "💡", title: "Innovation",     color: "border-cyan-400",    body: "From QR/VR education at Victory Pointe to workforce pipelines and public-private partnerships, we build solutions that scale." },
];

export default function About() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-[#1a2416] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#4A5D3F] opacity-20 blur-[100px] -top-40 -right-20" />
          <div className="absolute w-[350px] h-[350px] rounded-full bg-amber-700 opacity-15 blur-[80px] bottom-0 left-10" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              501(c)(3) Nonprofit · Veteran-Led
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
              We exist for one reason —<br />
              <span className="text-amber-400">to bring veterans home.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              The Warrior Outreach Project is a veteran-led nonprofit dedicated to ending veteran homelessness through housing, healthcare navigation, workforce training, and community — one veteran at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/programs" className="rounded-xl bg-amber-500 text-white font-bold px-7 py-3.5 hover:bg-amber-400 transition-all hover:scale-105">
                Our Programs →
              </Link>
              <Link href="/donate" className="rounded-xl bg-white/10 border border-white/20 text-white font-bold px-7 py-3.5 hover:bg-white/20 transition-all backdrop-blur-sm">
                Support the Mission
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="bg-slate-900 text-white">
        <Container className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "22",      label: "Veterans lost to suicide every single day",          color: "text-red-400" },
              { stat: "40K+",    label: "Veterans experiencing homelessness tonight",          color: "text-amber-400" },
              { stat: "9–12 mo", label: "Average time to stable housing in our program",       color: "text-green-400" },
              { stat: "$2,800",  label: "Per veteran per month — all-in stabilization cost",   color: "text-blue-400" },
            ].map(({ stat, label, color }) => (
              <div key={label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className={`text-3xl font-black ${color}`}>{stat}</div>
                <div className="mt-1.5 text-xs text-slate-400 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* MISSION + WHAT WE DO */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-3">Our Mission</div>
              <h2 className="text-3xl font-bold leading-snug">Dignity, stability, and independence for every veteran who served.</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The Warrior Outreach Project provides transitional housing, healthcare navigation, workforce training, and emergency support to veterans in crisis. We believe every veteran deserves a clear path to independence — no matter their circumstances.
              </p>
              {/* Pull quote */}
              <blockquote className="mt-6 border-l-4 border-amber-400 pl-5 py-2 bg-amber-50 rounded-r-xl">
                <p className="text-slate-700 font-semibold leading-snug italic">"Our program is designed to help veterans graduate out of the system — not remain dependent on it."</p>
              </blockquote>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Employment placement, skilled trades development, hospitality workforce partnerships, and long-term housing transition support are built into every step.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-3">What We Do</div>
              <div className="space-y-4">
                {[
                  { emoji: "🏠", label: "Housing",                              desc: "20–30 veterans in residential program at a time. Most graduate to independent housing in 9–12 months, cycling in the next veteran." },
                  { emoji: "🏥", label: "Healthcare",                           desc: "Navigate VA benefits, connect to medical care, mental health support, and substance use treatment." },
                  { emoji: "🔧", label: "Workforce",                            desc: "Construction, skilled trades, disaster response, hospitality (IG Hotels), and small business ownership pathways." },
                  { emoji: "🍽️", label: "Basic Needs",                         desc: "Food, clothing, transportation, emergency financial assistance, and case management." },
                  { emoji: "🤝", label: "Community",                            desc: "Peer mentorship, group support, service projects, and an alumni network that keeps veterans connected." },
                  { emoji: "🏆", label: "Victory Pointe (Proposed 2026–2027)", desc: "A proposed nationally distinctive veteran fitness & memorial corridor in Clermont, FL — with intake hub, Honor Plaza, and QR/VR education at every station." },
                ].map(({ emoji, label, desc }) => (
                  <div key={label} className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#4A5D3F]/10 flex items-center justify-center text-lg shrink-0">{emoji}</div>
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
      <section className="bg-[#1a2416] border-b border-white/10">
        <Container className="py-16">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 text-center">What We Stand For</div>
          <h2 className="text-3xl font-black text-white text-center mb-10">Our Values</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {VALUES.map(({ emoji, title, body }) => (
              <div key={title} className="group relative rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-amber-400/40 hover:bg-white/8 transition-all duration-300 overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-amber-500/5 group-hover:bg-amber-500/10 transition-all duration-300" />
                <div className="relative z-10">
                  <div className="text-3xl mb-4">{emoji}</div>
                  <div className="font-bold text-white text-lg mb-2">{title}</div>
                  <p className="text-sm text-white/60 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <section className="bg-slate-900 border-b border-slate-700">
        <Container className="py-16">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 text-center">The People Behind the Mission</div>
          <h2 className="text-3xl font-black text-white text-center mb-2">Leadership Team</h2>
          <p className="text-center text-slate-400 text-sm mb-10 max-w-xl mx-auto">A veteran-majority team united by one mission — making sure no one who served is left behind.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {TEAM.map(m => (
              <div key={m.name} className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-amber-400/40 hover:bg-white/8 transition-all duration-300">
                <div className="h-1 bg-gradient-to-r from-[#4A5D3F] via-amber-500 to-[#4A5D3F] opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="p-6 flex flex-col items-center text-center">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white/10 ring-2 ring-amber-400/20 group-hover:ring-amber-400/50 transition-all" style={{ objectPosition: "center 15%" }} />
                  ) : (
                    <div className="w-24 h-24 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-black border-2 border-white/10 ring-2 ring-amber-400/20 group-hover:ring-amber-400/50 transition-all bg-gradient-to-br from-[#4A5D3F] to-[#2d3a27]">
                      {m.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  )}
                  <div className="font-bold text-lg text-white">{m.name}</div>
                  <div className="flex items-center gap-2 mt-1 justify-center flex-wrap">
                    <span className="text-sm text-amber-400 font-semibold">{m.title}</span>
                    {m.vet && <span className="text-xs bg-amber-400/10 text-amber-300 border border-amber-400/20 rounded-full px-2 py-0.5 font-semibold">🎖️ Veteran</span>}
                  </div>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2416] text-white">
        <Container className="py-14">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">Get Involved</div>
            <h2 className="text-3xl font-black">Every veteran deserves a fighting chance.</h2>
            <p className="mt-3 text-white/70 leading-relaxed">Sponsor a veteran through our Guiding Light Program, volunteer your time, or support Victory Pointe. Every action moves us closer to a world where no veteran is left behind.</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/sponsor" className="rounded-xl bg-amber-500 text-white font-bold px-8 py-4 hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/20">
                Guiding Light Program →
              </Link>
              <Link href="/volunteer" className="rounded-xl bg-white/10 border border-white/20 text-white font-bold px-8 py-4 hover:bg-white/20 transition-all backdrop-blur-sm">
                Volunteer →
              </Link>
              <Link href="/donate" className="rounded-xl border border-white/10 text-white/70 font-medium px-8 py-4 hover:text-white hover:border-white/30 transition-all">
                Donate
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
