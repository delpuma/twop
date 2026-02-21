
import Container from "../../components/Container";
import ContactForm from "../../components/ContactForm";
import { buildMeta } from "../../lib/seo";

export const metadata = buildMeta(
  "Contact Us",
  "Contact the Warrior Outreach Project for partnership inquiries, media, sponsorships, or veteran service needs.",
  "/contact",
  "contact Warrior Outreach Project, veteran nonprofit contact, veteran partnership inquiry"
);

export default function Contact(){
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
              We respond within 48 hours
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">Let&apos;s talk.<br /><span className="text-amber-400">We&apos;re listening.</span></h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">Whether you want to sponsor a veteran, partner with us, volunteer, or just learn more — we want to hear from you. Every message gets a personal response.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact-form" className="rounded-xl bg-amber-500 text-white font-bold px-8 py-4 hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/20">Send a Message →</a>
              <a href="tel:2127290453" className="rounded-xl bg-white/10 border border-white/20 text-white font-bold px-8 py-4 hover:bg-white/20 transition-all backdrop-blur-sm">(212) 729-0453</a>
            </div>
          </div>
        </Container>
      </section>

      {/* REASON CARDS */}
      <section className="bg-slate-900 border-b border-slate-800">
        <Container className="py-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "🤝", title: "Partner With Us",  desc: "Businesses, healthcare providers, employers, and civic organizations.", href: "#contact-form",  color: "border-blue-500/40 hover:border-blue-400" },
              { emoji: "🪖", title: "Sponsor a Veteran", desc: "Fund housing, healthcare, and workforce support directly.",             href: "/sponsor",      color: "border-amber-500/40 hover:border-amber-400" },
              { emoji: "❤️",  title: "Volunteer",        desc: "Give your time and skills to change a veteran's life.",                href: "/volunteer",    color: "border-green-500/40 hover:border-green-400" },
              { emoji: "🆘", title: "Need Help?",        desc: "Are you a veteran who needs support? Start here.",                    href: "/get-help",     color: "border-red-500/40 hover:border-red-400" },
            ].map(({ emoji, title, desc, href, color }) => (
              <a key={title} href={href} className={`group rounded-xl bg-white/5 border-2 ${color} p-5 hover:bg-white/10 transition-all flex flex-col gap-2`}>
                <div className="text-3xl">{emoji}</div>
                <div className="font-bold text-white group-hover:text-amber-300 transition-colors">{title}</div>
                <p className="text-sm text-white/50 leading-snug">{desc}</p>
                <div className="mt-auto text-sm font-semibold text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">Go →</div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* MAIN CONTENT */}
      <section id="contact-form" className="bg-white">
        <Container className="py-16">
          <div className="grid gap-12 md:grid-cols-2 items-start">

            {/* LEFT — info */}
            <div>
              <h2 className="text-3xl font-semibold">Get in touch</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Use the form to reach us about anything — sponsorships, media, partnerships, volunteering, or general questions. We read every message and respond personally.
              </p>

              <div className="mt-8 space-y-5">
                <InfoRow emoji="📧" label="Email" value="info@warrioroutreachproject.org" href="mailto:info@warrioroutreachproject.org" />
                <InfoRow emoji="📍" label="Location" value="Clermont, Florida — Victory Pointe on Lake Minneola" />
                <InfoRow emoji="⏱️" label="Response Time" value="Within 48 hours — usually same day" />
              </div>

              <div className="mt-10">
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">What we can help with</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Sponsorship inquiries",
                    "Volunteer sign-up",
                    "Media & press",
                    "Partnership proposals",
                    "Veteran intake referrals",
                    "Letters of support",
                    "Event collaboration",
                    "General questions",
                  ].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="text-[#4A5D3F] font-bold">✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 rounded-xl bg-amber-50 border border-amber-200 p-5">
                <div className="font-semibold text-amber-800">✍️ Haven't signed the Victory Pointe petition yet?</div>
                <p className="mt-1 text-sm text-slate-600">Add your name to show community support for the veteran fitness corridor in Clermont, FL — it takes 30 seconds.</p>
                <a href="/victory-pointe#sign" className="mt-3 inline-block rounded-lg bg-amber-500 text-white text-sm font-semibold px-5 py-2 hover:bg-amber-400 transition-colors">Sign the Petition →</a>
              </div>

              <div className="mt-6 rounded-xl bg-[#4A5D3F]/5 border border-[#4A5D3F]/20 p-5">
                <div className="font-semibold text-[#4A5D3F]">🆘 Veteran in crisis?</div>
                <p className="mt-1 text-sm text-slate-600">If you or someone you know needs immediate help, call the Veterans Crisis Line: <strong>988 then press 1</strong>, or visit our <a href="/resources" className="text-[#4A5D3F] underline">Resources page</a> for more options.</p>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-1">Send us a message</h3>
              <p className="text-sm text-slate-500 mb-6">We'll get back to you within 48 hours.</p>
              <ContactForm />
            </div>

          </div>
        </Container>
      </section>

      {/* BOTTOM STRIP */}
      <section className="bg-[#1a2416] text-white">
        <Container className="py-12 text-center">
          <h2 className="text-2xl font-black">Ready to make a difference?</h2>
          <p className="mt-2 text-white/70 max-w-xl mx-auto">Sponsor a veteran, volunteer your time, or support Victory Pointe. Every action moves the mission forward.</p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a href="/sponsor" className="rounded-xl bg-amber-500 text-white font-bold px-7 py-3.5 hover:bg-amber-400 transition-all hover:scale-105">Sponsor a Veteran →</a>
            <a href="/volunteer" className="rounded-xl bg-white/10 border border-white/20 text-white font-bold px-7 py-3.5 hover:bg-white/20 transition-all">Volunteer →</a>
            <a href="/donate" className="rounded-xl border border-white/10 text-white/70 font-medium px-7 py-3.5 hover:text-white hover:border-white/30 transition-all">Donate</a>
          </div>
        </Container>
      </section>

    </main>
  );
}

function InfoRow({ emoji, label, value, href }: { emoji: string; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-[#4A5D3F]/10 flex items-center justify-center text-xl shrink-0">{emoji}</div>
      <div>
        <div className="text-xs uppercase tracking-wide text-slate-400 font-semibold">{label}</div>
        {href
          ? <a href={href} className="text-sm text-[#4A5D3F] font-medium hover:underline mt-0.5 block">{value}</a>
          : <div className="text-sm text-slate-700 font-medium mt-0.5">{value}</div>
        }
      </div>
    </div>
  );
}
