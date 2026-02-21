
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
      <section className="bg-[#4A5D3F] text-white">
        <Container className="py-14">
          <h1 className="text-4xl font-bold tracking-tight">Let's talk.</h1>
          <p className="mt-3 text-white/80 max-w-2xl text-lg">
            Whether you want to sponsor a veteran, partner with us, volunteer, or just learn more — we want to hear from you. Our team responds within 48 hours.
          </p>
        </Container>
      </section>

      {/* REASON CARDS */}
      <section className="bg-slate-50 border-b border-slate-200">
        <Container className="py-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "🤝", title: "Partner With Us", desc: "Businesses, healthcare providers, employers, and civic organizations.", href: "#contact-form" },
              { emoji: "🪖", title: "Sponsor a Veteran", desc: "Fund housing, healthcare, and workforce support directly.", href: "/sponsor" },
              { emoji: "❤️", title: "Volunteer", desc: "Give your time and skills to change a veteran's life.", href: "/volunteer" },
              { emoji: "🆘", title: "Need Help?", desc: "Are you a veteran who needs support? Start here.", href: "/get-help" },
            ].map(({ emoji, title, desc, href }) => (
              <a key={title} href={href} className="group rounded-xl bg-white border border-slate-200 p-5 hover:border-[#4A5D3F] hover:shadow-md transition-all flex flex-col gap-2">
                <div className="text-3xl">{emoji}</div>
                <div className="font-semibold text-slate-900 group-hover:text-[#4A5D3F] transition-colors">{title}</div>
                <p className="text-sm text-slate-500 leading-snug">{desc}</p>
                <div className="mt-auto text-sm font-semibold text-[#4A5D3F] opacity-0 group-hover:opacity-100 transition-opacity">Go →</div>
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

              <div className="mt-10 rounded-xl bg-[#4A5D3F]/5 border border-[#4A5D3F]/20 p-5">
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
      <section className="bg-slate-900 text-white">
        <Container className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">Warrior Outreach Project · 501(c)(3) Nonprofit · Clermont, Florida</div>
          <div className="flex gap-4 text-sm">
            <a href="/sponsor" className="text-amber-400 hover:underline">Sponsor a Vet</a>
            <a href="/volunteer" className="text-amber-400 hover:underline">Volunteer</a>
            <a href="/victory-pointe" className="text-amber-400 hover:underline">Victory Pointe</a>
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
