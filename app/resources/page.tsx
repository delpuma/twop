
"use client";
import { useState } from "react";
import Container from "../../components/Container";

const CATEGORIES = [
  { id: "all",        label: "All Resources",        emoji: "🗂️" },
  { id: "health",     label: "Healthcare & Mental Health", emoji: "🏥" },
  { id: "housing",    label: "Housing",               emoji: "🏠" },
  { id: "benefits",   label: "Benefits & Claims",     emoji: "📋" },
  { id: "employment", label: "Employment & Training", emoji: "💼" },
  { id: "legal",      label: "Legal Help",            emoji: "⚖️" },
  { id: "financial",  label: "Financial Assistance",  emoji: "💰" },
  { id: "recovery",   label: "Substance & Recovery",  emoji: "🌱" },
  { id: "women",      label: "Women Veterans",        emoji: "🎖️" },
  { id: "family",     label: "Family & Caregivers",   emoji: "❤️" },
  { id: "community",  label: "Peer & Community",      emoji: "🤝" },
  { id: "florida",    label: "Local Florida",         emoji: "🌴" },
];

const RESOURCES = [
  // Healthcare & Mental Health
  { cat: "health", name: "VA Healthcare", link: "https://www.va.gov/health-care/", desc: "Enroll in VA healthcare and find facilities near you." },
  { cat: "health", name: "Veterans Crisis Line", link: "https://www.veteranscrisisline.net/", desc: "24/7 crisis support — call or text 988 then press 1." },
  { cat: "health", name: "Make the Connection", link: "https://maketheconnection.net/", desc: "Mental health resources and real veteran stories." },
  { cat: "health", name: "Vet Centers", link: "https://www.va.gov/find-locations/?facilityType=vet_center", desc: "Readjustment counseling for combat veterans." },
  // Housing
  { cat: "housing", name: "VA Homeless Programs", link: "https://www.va.gov/homeless/", desc: "Housing assistance and wraparound support services." },
  { cat: "housing", name: "HUD-VASH", link: "https://www.va.gov/homeless/hud-vash.asp", desc: "Housing vouchers for homeless veterans." },
  { cat: "housing", name: "SSVF Program", link: "https://www.va.gov/homeless/ssvf/", desc: "Rapid re-housing and homelessness prevention." },
  { cat: "housing", name: "National Call Center", link: "tel:1-877-424-3838", desc: "Call 1-877-4AID-VET for immediate housing help." },
  // Benefits & Claims
  { cat: "benefits", name: "VA Benefits", link: "https://www.va.gov/", desc: "Apply for disability, education, and other benefits." },
  { cat: "benefits", name: "eBenefits Portal", link: "https://www.ebenefits.va.gov/", desc: "Manage your VA benefits online." },
  { cat: "benefits", name: "VA Claim Status", link: "https://www.va.gov/claim-or-appeal-status/", desc: "Check the status of your claim or appeal." },
  { cat: "benefits", name: "Veterans Service Organizations", link: "https://www.va.gov/vso/", desc: "Free help filing claims from accredited VSOs." },
  // Employment
  { cat: "employment", name: "VA Vocational Rehab", link: "https://www.va.gov/careers-employment/vocational-rehabilitation/", desc: "Job training and employment support for veterans." },
  { cat: "employment", name: "GI Bill", link: "https://www.va.gov/education/", desc: "Education and training benefits." },
  { cat: "employment", name: "Hire Heroes USA", link: "https://www.hireheroesusa.org/", desc: "Free job search assistance for veterans." },
  { cat: "employment", name: "American Corporate Partners", link: "https://www.acp-usa.org/", desc: "Mentorship and career counseling from business leaders." },
  // Legal
  { cat: "legal", name: "Veterans Legal Services", link: "https://www.veteranslegalservices.org/", desc: "Free legal aid on benefits, housing, and discharge upgrades." },
  { cat: "legal", name: "National Veterans Legal Services Program", link: "https://www.nvlsp.org/", desc: "Fights for veterans' rights in court — free of charge." },
  { cat: "legal", name: "Swords to Plowshares", link: "https://www.swords-to-plowshares.org/", desc: "Legal services, employment, and housing for veterans." },
  { cat: "legal", name: "Discharge Upgrade — VA Guide", link: "https://www.va.gov/discharge-upgrade-instructions/", desc: "Step-by-step guide to upgrading a less-than-honorable discharge." },
  { cat: "legal", name: "Florida Rural Legal Services", link: "https://www.frls.org/", desc: "Free civil legal aid for low-income veterans in Central Florida." },
  // Financial
  { cat: "financial", name: "Operation Homefront", link: "https://www.operationhomefront.org/", desc: "Emergency financial assistance and long-term stability programs." },
  { cat: "financial", name: "Veterans Inc. Financial Help", link: "https://www.veteransinc.org/", desc: "Emergency financial aid for veterans in crisis." },
  { cat: "financial", name: "PenFed Foundation", link: "https://penfedfoundation.org/", desc: "Emergency assistance grants and financial coaching." },
  { cat: "financial", name: "Disabled American Veterans (DAV)", link: "https://www.dav.org/", desc: "Benefits claims help, transportation, and financial support." },
  { cat: "financial", name: "USAA Financial Readiness", link: "https://www.usaa.com/inet/wc/advice-financial-readiness", desc: "Financial planning tools for military families." },
  // Recovery
  { cat: "recovery", name: "VA Substance Use Treatment", link: "https://www.va.gov/health-care/health-needs-conditions/substance-use-problems/", desc: "VA programs for alcohol, drug, and opioid treatment." },
  { cat: "recovery", name: "SAMHSA Veterans Helpline", link: "https://www.samhsa.gov/veterans-military-families", desc: "1-800-662-4357 — free, confidential treatment referrals 24/7." },
  { cat: "recovery", name: "Volunteers of America — Recovery", link: "https://www.voa.org/veterans", desc: "Residential recovery programs specifically for veterans." },
  { cat: "recovery", name: "Warrior's Heart", link: "https://www.warriorsheart.com/", desc: "Private treatment center for military, veterans, and first responders." },
  // Women
  { cat: "women", name: "VA Women Veterans Program", link: "https://www.va.gov/womenvet/", desc: "Healthcare, benefits, and support tailored for women veterans." },
  { cat: "women", name: "Women Veterans Interactive", link: "https://www.womenvetinteractive.com/", desc: "Community, resources, and advocacy for women who served." },
  { cat: "women", name: "Final Salute Inc.", link: "https://www.finalsaluteinc.org/", desc: "Safe and stable housing for women veterans and their children." },
  { cat: "women", name: "Service Women's Action Network", link: "https://www.servicewomen.org/", desc: "Policy advocacy and peer support for women in the military." },
  // Family
  { cat: "family", name: "VA Caregiver Support Program", link: "https://www.caregiver.va.gov/", desc: "Stipends, training, and respite care for caregivers of veterans." },
  { cat: "family", name: "NAMI — Veterans", link: "https://www.nami.org/Your-Journey/Veterans-Active-Duty", desc: "Mental health support for veterans and their families." },
  { cat: "family", name: "Give an Hour", link: "https://giveanhour.org/", desc: "Free mental health care for military families from volunteer providers." },
  { cat: "family", name: "Blue Star Families", link: "https://bluestarfam.org/", desc: "Programs and research supporting military family well-being." },
  { cat: "family", name: "TAPS", link: "https://www.taps.org/", desc: "Grief support for families who have lost a loved one in service." },
  // Community
  { cat: "community", name: "Team Red White & Blue", link: "https://www.teamrwb.org/", desc: "Physical and social activities connecting veterans to their communities." },
  { cat: "community", name: "The Mission Continues", link: "https://missioncontinues.org/", desc: "Veteran service platoons doing community impact work nationwide." },
  { cat: "community", name: "Student Veterans of America", link: "https://studentveterans.org/", desc: "Support network for veterans pursuing higher education." },
  { cat: "community", name: "Veterans of Foreign Wars (VFW)", link: "https://www.vfw.org/", desc: "Advocacy, camaraderie, and community for combat veterans." },
  { cat: "community", name: "American Legion", link: "https://www.legion.org/", desc: "The nation's largest veterans service organization." },
  // Florida
  { cat: "florida", name: "Florida Dept. of Veterans' Affairs", link: "https://floridavets.org/", desc: "State-level veteran services and benefits." },
  { cat: "florida", name: "Lake County Veterans Services", link: "https://www.lakecountyfl.gov/departments/veterans_services/", desc: "Local assistance and support in Lake County." },
  { cat: "florida", name: "Orlando VA Medical Center", link: "https://www.va.gov/orlando-health-care/", desc: "Healthcare services in Central Florida." },
  { cat: "florida", name: "VFW Post 10209 — Clermont", link: "https://www.vfw.org/", desc: "Local VFW post serving Clermont and South Lake County." },
  { cat: "florida", name: "American Legion — Lake County", link: "https://www.legion.org/", desc: "Community support, benefits help, and camaraderie." },
  { cat: "florida", name: "Volunteers of America Florida", link: "https://www.voaflorida.org/", desc: "Transitional housing and supportive services for homeless veterans." },
  { cat: "florida", name: "HVRP — Florida", link: "https://www.dol.gov/agencies/vets/programs/hvrp", desc: "Employment-focused reintegration for homeless veterans in Florida." },
];

const CAT_COLORS: Record<string, string> = {
  health:     "bg-red-50 border-red-200 text-red-700",
  housing:    "bg-blue-50 border-blue-200 text-blue-700",
  benefits:   "bg-purple-50 border-purple-200 text-purple-700",
  employment: "bg-amber-50 border-amber-200 text-amber-700",
  legal:      "bg-slate-50 border-slate-300 text-slate-700",
  financial:  "bg-green-50 border-green-200 text-green-700",
  recovery:   "bg-teal-50 border-teal-200 text-teal-700",
  women:      "bg-pink-50 border-pink-200 text-pink-700",
  family:     "bg-orange-50 border-orange-200 text-orange-700",
  community:  "bg-indigo-50 border-indigo-200 text-indigo-700",
  florida:    "bg-lime-50 border-lime-200 text-lime-700",
};

export default function Resources(){
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = RESOURCES.filter(r => {
    const matchCat = active === "all" || r.cat === active;
    const q = search.toLowerCase();
    const matchSearch = !q || r.name.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <main>
      {/* CRISIS BANNER */}
      <section className="bg-red-600 text-white">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold opacity-80 mb-1">🚨 In Crisis? Get Help Now</div>
              <div className="text-2xl font-bold">Veterans Crisis Line — Call or text <span className="underline">988</span> then press 1</div>
              <div className="text-sm opacity-90 mt-1">Available 24/7 for veterans, service members, and their families</div>
            </div>
            <div className="shrink-0 text-center">
              <div className="text-sm opacity-80">Emergency Services</div>
              <div className="text-3xl font-bold">911</div>
            </div>
          </div>
        </Container>
      </section>

      {/* HERO */}
      <section className="bg-[#4A5D3F] text-white">
        <Container className="py-12">
          <h1 className="text-4xl font-bold tracking-tight">Veteran Resources</h1>
          <p className="mt-3 text-white/80 max-w-2xl">Everything you need — healthcare, housing, legal help, financial aid, and more. Filter by category or search to find exactly what you're looking for.</p>
          <div className="mt-6 relative max-w-xl">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full rounded-xl bg-white text-slate-900 pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </Container>
      </section>

      {/* FILTER TABS */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <Container className="py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`shrink-0 flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors border ${
                  active === c.id
                    ? "bg-[#4A5D3F] text-white border-[#4A5D3F]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#4A5D3F] hover:text-[#4A5D3F]"
                }`}
              >
                <span>{c.emoji}</span>{c.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* RESOURCE CARDS */}
      <section className="bg-slate-50">
        <Container className="py-12">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <div className="text-5xl mb-4">🔍</div>
              <div className="text-lg font-medium">No resources found</div>
              <div className="text-sm mt-1">Try a different search term or category</div>
            </div>
          ) : (
            <>
              <div className="text-sm text-slate-500 mb-6">{filtered.length} resource{filtered.length !== 1 ? "s" : ""} found</div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((r, i) => {
                  const cat = CATEGORIES.find(c => c.id === r.cat)!;
                  const color = CAT_COLORS[r.cat] || "bg-slate-50 border-slate-200 text-slate-700";
                  return (
                    <a
                      key={i}
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-xl bg-white border border-slate-200 p-5 hover:border-[#4A5D3F] hover:shadow-md transition-all flex flex-col gap-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-semibold text-slate-900 group-hover:text-[#4A5D3F] transition-colors leading-snug">{r.name}</div>
                        <span className="text-slate-300 group-hover:text-[#4A5D3F] transition-colors shrink-0 mt-0.5">↗</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed flex-1">{r.desc}</p>
                      <div className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full border ${color}`}>
                        {cat.emoji} {cat.label}
                      </div>
                    </a>
                  );
                })}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#4A5D3F] text-white">
        <Container className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-semibold text-lg">Can't find what you need?</div>
            <p className="mt-1 text-white/80 text-sm max-w-xl">Our team can help connect you to the right resource. Reach out and we'll point you in the right direction.</p>
          </div>
          <a href="/contact" className="shrink-0 rounded-lg bg-white text-[#4A5D3F] font-semibold px-6 py-3 hover:bg-slate-100 transition-colors">Contact Us →</a>
        </Container>
      </section>
    </main>
  );
}
