
import Container from "../../components/Container";
import VolunteerForm from "../../components/VolunteerForm";
import { buildMeta } from "../../lib/seo";

export const metadata = buildMeta(
  "Volunteer with Veterans",
  "Volunteer with the Warrior Outreach Project. Help with outreach, events, skilled trades, admin, and veteran support programs in Clermont, FL and NYC.",
  "/volunteer",
  "volunteer with veterans, veteran volunteer Florida, veteran nonprofit volunteer, Clermont volunteer, help veterans volunteer"
);

export default function Volunteer(){
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
              Join the Mission
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">Your time can change<br /><span className="text-amber-400">a veteran&apos;s life.</span></h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">Every hour you give is an hour a veteran gets closer to stable housing, a steady job, and a future worth fighting for. No military background required — just heart.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#volunteer-form" className="rounded-xl bg-amber-500 text-white font-bold px-8 py-4 hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/20">Sign Up to Volunteer →</a>
              <a href="/donate" className="rounded-xl bg-white/10 border border-white/20 text-white font-bold px-8 py-4 hover:bg-white/20 transition-all backdrop-blur-sm">Donate Instead</a>
            </div>
          </div>
        </Container>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-slate-900 text-white">
        <Container className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "22",    label: "Veterans lost to suicide every day",              color: "text-red-400" },
              { stat: "40K+", label: "Veterans homeless on any given night",             color: "text-amber-400" },
              { stat: "9–12 mo", label: "Average time to stable housing in our program", color: "text-green-400" },
              { stat: "1 hr",  label: "Is all it takes to make a real difference",       color: "text-blue-400" },
            ].map(({ stat, label, color }) => (
              <div key={label} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className={`text-3xl font-black ${color}`}>{stat}</div>
                <div className="mt-1.5 text-xs text-slate-400 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY VOLUNTEER */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h2 className="text-3xl font-semibold">Why it matters — for everyone</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">Volunteering with Warrior Outreach isn't just good for veterans. It builds community, develops skills, and creates the kind of Clermont we all want to live in.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <BenefitCard
              emoji="🧑‍🤝‍🧑"
              title="For the Veteran"
              color="green"
              points={[
                "A mentor or coach who shows up consistently",
                "Job training support from someone who cares",
                "A friendly face during one of the hardest chapters of their life",
                "Connection to community — not just services",
              ]}
            />
            <BenefitCard
              emoji="🏙️"
              title="For Clermont"
              color="blue"
              points={[
                "Fewer veterans on the streets means a safer, stronger city",
                "Victory Pointe becomes a living, active community hub",
                "Local businesses gain trained, motivated workers",
                "A model other cities will look to replicate",
              ]}
            />
            <BenefitCard
              emoji="💪"
              title="For You"
              color="amber"
              points={[
                "Real, tangible impact you can see and feel",
                "Build leadership, mentorship, and communication skills",
                "Be part of something bigger than yourself",
                "Community service hours for students and professionals",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* VOLUNTEER ROLES */}
      <section className="bg-slate-50 border-b border-slate-200">
        <Container className="py-14">
          <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-2">Find Your Role</div>
          <h2 className="text-3xl font-bold">Ways to get involved</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">No matter your background, there&apos;s a role for you. We match volunteers to opportunities based on your skills, schedule, and interests.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <RoleCard emoji="🏋️" title="Fitness Instructor" desc="Lead free military-style bootcamps or yoga sessions at Victory Pointe. Open to certified trainers and experienced athletes." />
            <RoleCard emoji="🔨" title="Skilled Trades" desc="Electricians, plumbers, carpenters, and general contractors help build and maintain the Victory Pointe corridor and veteran housing." />
            <RoleCard emoji="🧑‍💼" title="Job Coach & Mentor" desc="Help veterans build resumes, prep for interviews, and navigate the workforce. One hour a week can change a career trajectory." />
            <RoleCard emoji="🚑" title="Transportation" desc="Drive veterans to VA appointments, job interviews, or program check-ins. Flexible scheduling, huge impact." />
            <RoleCard emoji="🎸" title="Musician & Performer" desc="Veteran or civilian musicians who want to perform at our Friday Night Live Music events at Victory Pointe." />
            <RoleCard emoji="🧘" title="Yoga & Wellness" desc="Lead lakeside yoga or mindfulness sessions on Saturday mornings. Help veterans and community members find calm and connection." />
            <RoleCard emoji="🧭" title="Survival Skills Instructor" desc="Teach navigation, first aid, fire-starting, and emergency prep. Great for scouts, families, and anyone who wants to learn." />
            <RoleCard emoji="📸" title="Photography & Media" desc="Document the mission. Help us tell the story of Victory Pointe through photos, video, and social media content." />
            <RoleCard emoji="📝" title="Admin & Outreach" desc="Help with data entry, community outreach, event coordination, and communications. Remote-friendly options available." />
          </div>
        </Container>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-2">The Process</div>
          <h2 className="text-3xl font-bold">What to expect</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { step: "1", title: "Sign Up",          desc: "Fill out the form below. Tell us your skills and availability.",                          color: "bg-amber-500" },
              { step: "2", title: "We Reach Out",     desc: "Our team contacts you within 48 hours to match you with the right role.",                color: "bg-blue-500" },
              { step: "3", title: "Orientation",      desc: "Short onboarding so you know the mission, the people, and what to expect.",              color: "bg-purple-500" },
              { step: "4", title: "Show Up & Serve",  desc: "Start making a difference. We&apos;ll support you every step of the way.",              color: "bg-green-600" },
            ].map(({ step, title, desc, color }) => (
              <div key={step}>
                <div className={`w-12 h-12 rounded-full ${color} text-white flex items-center justify-center text-xl font-black mb-4 shadow-lg`}>{step}</div>
                <div className="font-bold text-lg">{title}</div>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FORM */}
      <section id="volunteer-form" className="bg-[#1a2416]">
        <Container className="py-14">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">Get Started</div>
              <h2 className="text-3xl font-black text-white">Ready to serve?</h2>
              <p className="mt-3 text-white/70 leading-relaxed">Fill out the form and we&apos;ll be in touch within 48 hours. Every volunteer matters. Every hour counts.</p>
              <div className="mt-8 space-y-4">
                {[
                  { emoji: "⏰", text: "Flexible scheduling — we work around your life" },
                  { emoji: "📍", text: "Opportunities in Clermont and surrounding areas" },
                  { emoji: "🎓", text: "Community service hours available for students" },
                  { emoji: "❤️", text: "No military background required — just heart" },
                ].map(({ emoji, text }) => (
                  <div key={text} className="flex items-center gap-3 rounded-lg bg-white/10 border border-white/20 px-4 py-3">
                    <span className="text-xl shrink-0">{emoji}</span>
                    <span className="text-sm font-medium text-white/80">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
              <h3 className="text-lg font-bold text-white mb-4">Volunteer Sign-Up</h3>
              <VolunteerForm />
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}

function BenefitCard({ emoji, title, color, points }: { emoji: string; title: string; color: string; points: string[] }) {
  const border = color === 'green' ? 'border-[#4A5D3F]/30 bg-[#4A5D3F]/5' : color === 'blue' ? 'border-blue-200 bg-blue-50' : 'border-amber-200 bg-amber-50';
  const check = color === 'green' ? 'text-[#4A5D3F]' : color === 'blue' ? 'text-blue-600' : 'text-amber-600';
  return (
    <div className={`rounded-xl border-2 p-6 ${border}`}>
      <div className="text-4xl mb-3">{emoji}</div>
      <div className="font-bold text-xl mb-4">{title}</div>
      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-700"><span className={`font-bold shrink-0 ${check}`}>✓</span>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function RoleCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 flex gap-4">
      <div className="text-3xl shrink-0">{emoji}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
