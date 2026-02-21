
import Container from "../../components/Container";
import SponsorForm from "../../components/SponsorForm";
import { buildMeta } from "../../lib/seo";

export const metadata = buildMeta(
  "Sponsor a Station — Victory Pointe",
  "Sponsor a veteran fitness station or the Military Working Dog Honor Plaza at Victory Pointe in Clermont, FL. Station naming rights from $25,000. Honor Plaza from $75,000.",
  "/sponsor",
  "sponsor veteran station, Victory Pointe sponsor, veteran memorial sponsor Clermont, corporate veteran sponsorship, sponsor veteran fitness station Florida"
);

export default function Sponsor(){
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">Sponsorship &amp; Support Opportunities</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            Every dollar goes directly toward getting veterans off the street and into stable housing, healthcare, and a career. Whether you give $25 or $125,000 — you are part of the mission.
          </p>
        </Container>
      </section>

      {/* ADOPT-A-VET */}
      <section className="bg-[#4A5D3F] text-white">
        <Container className="py-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🪖</span>
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">Most Impactful Program</span>
          </div>
          <h2 className="text-3xl font-semibold">Guiding Light Program</h2>
          <p className="mt-3 text-white/80 max-w-3xl leading-relaxed">
            Directly sponsor a veteran's stabilization journey. Your contribution covers housing, food, case management, healthcare navigation, and workforce support for one veteran for one month — or longer. This is the most direct way to change a life.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <AdoptTier
              label="One Month"
              price="$2,800 – $3,500"
              color="amber"
              perks={[
                "Covers 1 veteran for 1 full month",
                "Housing, food & case management",
                "Healthcare navigation support",
                "Workforce pathway enrollment",
                "Personal impact update from our team",
              ]}
            />
            <AdoptTier
              label="One Quarter"
              price="$8,400 – $10,500"
              color="amber"
              perks={[
                "Covers 1 veteran for 3 months",
                "All monthly benefits included",
                "Progress report at 30, 60 & 90 days",
                "Named recognition on our website",
                "Invitation to quarterly ceremony",
              ]}
            />
            <AdoptTier
              label="Full Stabilization"
              price="$25,000 – $42,000"
              color="amber"
              highlight
              perks={[
                "Covers 1 veteran through full program (9–12 months)",
                "All quarterly benefits included",
                "Veteran graduates to independent housing",
                "Permanent recognition plaque at Victory Pointe",
                "Dedication ceremony invitation",
                "Annual impact report",
              ]}
            />
          </div>
          <div className="mt-6 text-center">
            <a href="#sponsor-form" className="inline-block rounded-lg bg-amber-500 text-white font-semibold px-8 py-3 hover:bg-amber-600 transition-colors">Join the Guiding Light Program →</a>
          </div>
        </Container>
      </section>

      {/* VICTORY POINTE STATION SPONSORSHIPS */}
      <section className="bg-slate-50 border-y border-slate-200">
        <Container className="py-14">
          <h2 className="text-2xl font-semibold">Victory Pointe Station &amp; Infrastructure Sponsorships</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">Leave a permanent mark on Clermont. Station sponsorships fund the physical build-out of the veteran fitness corridor and Honor Plaza.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <SponsorTier label="Community Builder" price="$5,000 – $14,999" perks={["Website recognition","Name in dedication program","Invitation to ribbon cutting"]} />
            <SponsorTier label="Skilled Trades &amp; Workforce Partner" price="$15,000 – $24,999" perks={["All Community Builder perks","Logo on workforce program materials","Quarterly impact update"]} />
            <SponsorTier label="Station Naming Sponsor" price="$25,000 – $50,000" perks={["Station named in your honor","Permanent plaque at station","Logo on station signage","All prior tier perks"]} />
            <SponsorTier label="Veteran Housing &amp; Training Partner" price="$50,000+" perks={["Named partner in housing program","Logo on intake hub signage","Annual impact report","All prior tier perks"]} />
            <SponsorTier label="Honor Plaza Sponsor" price="$75,000 – $125,000" perks={["Name on Honor Plaza feature","Dedication ceremony recognition","Permanent bronze recognition","All prior tier perks"]} />
            <SponsorTier label="QR / VR Education Sponsor" price="$25,000 – $50,000" perks={["Sponsor 1–2 station VR experiences","Logo on station QR panel","Recognition in school program materials","Named in digital experience credits"]} />
            <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-6 md:col-span-2 lg:col-span-3">
              <div className="text-xs uppercase tracking-wide text-amber-700 font-semibold mb-1">Signature Opportunity</div>
              <div className="text-xl font-bold mb-2">Full Project Presenting Sponsor — $3,000,000</div>
              <p className="text-sm text-slate-600 mb-4">Name the entire Victory Pointe Veteran Fitness &amp; Memorial Corridor. Permanent recognition at every station, the Honor Plaza, the intake hub, and all digital and print materials. The defining legacy gift for Clermont's veteran community.</p>
              <a href="#sponsor-form" className="inline-block rounded-lg bg-amber-500 text-white text-sm font-semibold px-6 py-2.5 hover:bg-amber-600 transition-colors">Inquire About This Opportunity →</a>
            </div>
          </div>
        </Container>
      </section>

      {/* IN-KIND & OTHER WAYS TO HELP */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h2 className="text-2xl font-semibold">Other Ways to Help</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">Not every contribution is a check. We need skilled people, donated goods, and community partners just as much as we need funding.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <WayCard emoji="🔨" title="In-Kind Donations" body="Construction materials, tools, furniture, appliances, vehicles, or professional services donated directly to the program." />
            <WayCard emoji="🏠" title="Housing Partners" body="Property owners or developers who can provide transitional housing units, lease discounts, or donated space for veterans in the program." />
            <WayCard emoji="💼" title="Employer Partners" body="Hire our veterans. We'll prepare them — you give them a shot. Skilled trades, hospitality, logistics, construction, and more." />
            <WayCard emoji="🩺" title="Healthcare Partners" body="Clinics, therapists, dentists, and medical providers willing to offer discounted or donated care to veterans in our program." />
          </div>
        </Container>
      </section>

      {/* VOLUNTEER CTA */}
      <section className="bg-[#4A5D3F]/10 border-b border-[#4A5D3F]/20">
        <Container className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#4A5D3F]">Can't write a check? Give your time.</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">We need volunteers for events, mentorship, job coaching, fitness instruction, transportation, and more. Every hour you give is an hour that changes a veteran's life.</p>
          </div>
          <a href="/volunteers" className="shrink-0 rounded-lg bg-[#4A5D3F] text-white font-semibold px-7 py-3 hover:bg-[#3a4a30] transition-colors">Sign Up to Volunteer →</a>
        </Container>
      </section>

      {/* SPONSOR FORM */}
      <section id="sponsor-form">
        <Container className="py-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Ready to get involved?</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">Fill out the form and our team will reach out within 48 hours to discuss the right opportunity for you — whether that's the Guiding Light Program, a station sponsorship, in-kind support, or volunteering.</p>
            <div className="mt-6 grid grid-cols-1 gap-3">
              {[
                { icon: "🏛️", text: "501(c)(3) — all donations are tax-deductible" },
                { icon: "💯", text: "100% of program funds go directly to veteran services" },
                { icon: "📊", text: "Regular impact updates so you see exactly where your money goes" },
                { icon: "🏅", text: "Recognition options available at every level" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 rounded-lg bg-[#4A5D3F]/10 border border-[#4A5D3F]/20 px-4 py-3">
                  <span className="text-xl shrink-0">{icon}</span>
                  <span className="text-sm font-medium text-slate-800">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-4">Sponsor &amp; Partner Interest Form</h3>
            <SponsorForm />
          </div>
        </Container>
      </section>
    </main>
  );
}

function AdoptTier({ label, price, perks, highlight = false, color }: { label: string; price: string; perks: string[]; highlight?: boolean; color: string }) {
  return (
    <div className={`rounded-xl p-6 border-2 ${highlight ? 'border-amber-400 bg-amber-50/10' : 'border-white/20 bg-white/10'}` }>
      <div className="text-xs uppercase tracking-wide text-amber-300 font-semibold">{label}</div>
      <div className="text-2xl font-bold text-white mt-1">{price}</div>
      <ul className="mt-4 space-y-2">
        {perks.map((p, i) => <li key={i} className="flex gap-2 text-sm text-white/80"><span className="text-amber-400 shrink-0">✓</span>{p}</li>)}
      </ul>
      <a href="#sponsor-form" className="mt-5 block text-center rounded-lg bg-amber-500 text-white text-sm font-semibold px-4 py-2 hover:bg-amber-600 transition-colors">Get Started →</a>
    </div>
  );
}

function SponsorTier({ label, price, perks }: { label: string; price: string; perks: string[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="text-xs uppercase tracking-wide text-[#4A5D3F] font-semibold">{label}</div>
      <div className="text-xl font-bold text-slate-900 mt-1">{price}</div>
      <ul className="mt-4 space-y-2">
        {perks.map((p, i) => <li key={i} className="flex gap-2 text-sm text-slate-600"><span className="text-[#4A5D3F] font-bold shrink-0">✓</span><span dangerouslySetInnerHTML={{__html: p}} /></li>)}
      </ul>
      <a href="#sponsor-form" className="mt-5 block text-center rounded-lg bg-[#4A5D3F] text-white text-sm font-semibold px-4 py-2 hover:bg-[#3a4a30] transition-colors">Inquire →</a>
    </div>
  );
}

function WayCard({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <div className="text-3xl mb-3">{emoji}</div>
      <div className="font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{body}</p>
      <a href="#sponsor-form" className="mt-4 inline-block text-sm text-[#4A5D3F] font-semibold hover:underline">Tell us you can help →</a>
    </div>
  );
}
