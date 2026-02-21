
import Container from "../../components/Container";

export default function Resources(){
  return (
    <main>
      <section className="bg-red-50 border-b border-red-200">
        <Container className="py-8">
          <div className="rounded-xl bg-red-600 text-white p-6">
            <h2 className="text-2xl font-semibold">In Crisis? Get Help Now</h2>
            <div className="mt-4 space-y-3">
              <div>
                <div className="font-semibold text-lg">Veterans Crisis Line</div>
                <div className="text-xl">Call or text <strong>988</strong> then press <strong>1</strong></div>
                <div className="text-sm opacity-90">Available 24/7 for veterans, service members, and their families</div>
              </div>
              <div>
                <div className="font-semibold">Emergency Services</div>
                <div className="text-xl">Call <strong>911</strong></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <h1 className="text-4xl font-semibold tracking-tight">Veteran Resources</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            Essential resources for veterans, service members, and their families.
          </p>

          <div className="mt-10 space-y-8">
            <ResourceSection 
              title="Healthcare & Mental Health"
              resources={[
                { name: "VA Healthcare", link: "https://www.va.gov/health-care/", desc: "Enroll in VA healthcare and find facilities" },
                { name: "Veterans Crisis Line", link: "https://www.veteranscrisisline.net/", desc: "24/7 crisis support: 988 then press 1" },
                { name: "Make the Connection", link: "https://maketheconnection.net/", desc: "Mental health resources and veteran stories" },
                { name: "Vet Centers", link: "https://www.va.gov/find-locations/?facilityType=vet_center", desc: "Readjustment counseling for combat veterans" }
              ]}
            />

            <ResourceSection 
              title="Housing & Homelessness"
              resources={[
                { name: "VA Homeless Programs", link: "https://www.va.gov/homeless/", desc: "Housing assistance and support services" },
                { name: "HUD-VASH", link: "https://www.va.gov/homeless/hud-vash.asp", desc: "Housing vouchers for homeless veterans" },
                { name: "SSVF Program", link: "https://www.va.gov/homeless/ssvf/", desc: "Rapid re-housing and homelessness prevention" },
                { name: "National Call Center", link: "tel:1-877-424-3838", desc: "Call 1-877-4AID-VET for immediate housing help" }
              ]}
            />

            <ResourceSection 
              title="Benefits & Claims"
              resources={[
                { name: "VA Benefits", link: "https://www.va.gov/", desc: "Apply for disability, education, and other benefits" },
                { name: "eBenefits Portal", link: "https://www.ebenefits.va.gov/", desc: "Manage your VA benefits online" },
                { name: "VA Claim Status", link: "https://www.va.gov/claim-or-appeal-status/", desc: "Check the status of your claim" },
                { name: "Veterans Service Organizations", link: "https://www.va.gov/vso/", desc: "Free help filing claims from accredited VSOs" }
              ]}
            />

            <ResourceSection 
              title="Employment & Training"
              resources={[
                { name: "VA Vocational Rehab", link: "https://www.va.gov/careers-employment/vocational-rehabilitation/", desc: "Job training and employment support" },
                { name: "GI Bill", link: "https://www.va.gov/education/", desc: "Education and training benefits" },
                { name: "Hire Heroes USA", link: "https://www.hireheroesusa.org/", desc: "Free job search assistance for veterans" },
                { name: "American Corporate Partners", link: "https://www.acp-usa.org/", desc: "Mentorship and career counseling" }
              ]}
            />

            <ResourceSection 
              title="Local Florida Resources"
              resources={[
                { name: "Florida Department of Veterans' Affairs", link: "https://floridavets.org/", desc: "State-level veteran services and benefits" },
                { name: "Lake County Veterans Services", link: "https://www.lakecountyfl.gov/departments/veterans_services/", desc: "Local assistance and support in Lake County" },
                { name: "Orlando VA Medical Center", link: "https://www.va.gov/orlando-health-care/", desc: "Healthcare services in Central Florida" },
                { name: "Clermont Veterans of Foreign Wars — Post 10209", link: "https://www.vfw.org/", desc: "Local VFW post serving Clermont and South Lake County veterans" },
                { name: "American Legion — Lake County Posts", link: "https://www.legion.org/", desc: "Community support, benefits help, and camaraderie for veterans" },
                { name: "Volunteers of America Florida", link: "https://www.voaflorida.org/", desc: "Transitional housing and supportive services for homeless veterans in Florida" },
                { name: "Homeless Veterans Reintegration Program — FL", link: "https://www.dol.gov/agencies/vets/programs/hvrp", desc: "Employment-focused reintegration for homeless veterans in Florida" }
              ]}
            />

            <ResourceSection
              title="Legal Help"
              resources={[
                { name: "Veterans Legal Services", link: "https://www.veteranslegalservices.org/", desc: "Free legal aid for veterans on benefits, housing, and discharge upgrades" },
                { name: "National Veterans Legal Services Program", link: "https://www.nvlsp.org/", desc: "Fights for veterans' rights in court — free of charge" },
                { name: "Swords to Plowshares", link: "https://www.swords-to-plowshares.org/", desc: "Legal services, employment, and housing for veterans" },
                { name: "Discharge Upgrade — VA Guide", link: "https://www.va.gov/discharge-upgrade-instructions/", desc: "Step-by-step guide to upgrading a less-than-honorable discharge" },
                { name: "Florida Rural Legal Services — Veterans", link: "https://www.frls.org/", desc: "Free civil legal aid for low-income veterans in Central Florida" }
              ]}
            />

            <ResourceSection
              title="Financial Assistance"
              resources={[
                { name: "Operation Homefront", link: "https://www.operationhomefront.org/", desc: "Emergency financial assistance and long-term stability programs" },
                { name: "Veterans Inc. Financial Help", link: "https://www.veteransinc.org/", desc: "Emergency financial aid for veterans in crisis" },
                { name: "PenFed Foundation", link: "https://penfedfoundation.org/", desc: "Emergency assistance grants and financial coaching for veterans" },
                { name: "Disabled American Veterans (DAV)", link: "https://www.dav.org/", desc: "Benefits claims help, transportation, and financial support" },
                { name: "USAA Financial Readiness", link: "https://www.usaa.com/inet/wc/advice-financial-readiness", desc: "Financial planning tools and resources for military families" }
              ]}
            />

            <ResourceSection
              title="Substance Use & Recovery"
              resources={[
                { name: "VA Substance Use Treatment", link: "https://www.va.gov/health-care/health-needs-conditions/substance-use-problems/", desc: "VA programs for alcohol, drug, and opioid treatment" },
                { name: "SAMHSA Veterans Helpline", link: "https://www.samhsa.gov/veterans-military-families", desc: "1-800-662-4357 — free, confidential treatment referrals 24/7" },
                { name: "Volunteers of America — Recovery", link: "https://www.voa.org/veterans", desc: "Residential recovery programs specifically for veterans" },
                { name: "Warrior's Heart", link: "https://www.warriorsheart.com/", desc: "Private treatment center for active military, veterans, and first responders" }
              ]}
            />

            <ResourceSection
              title="Women Veterans"
              resources={[
                { name: "VA Women Veterans Program", link: "https://www.va.gov/womenvet/", desc: "Healthcare, benefits, and support tailored for women veterans" },
                { name: "Women Veterans Interactive", link: "https://www.womenvetinteractive.com/", desc: "Community, resources, and advocacy for women who served" },
                { name: "Final Salute Inc.", link: "https://www.finalsaluteinc.org/", desc: "Safe and stable housing specifically for women veterans and their children" },
                { name: "Service Women's Action Network", link: "https://www.servicewomen.org/", desc: "Policy advocacy and peer support for women in the military" }
              ]}
            />

            <ResourceSection
              title="Family & Caregiver Support"
              resources={[
                { name: "VA Caregiver Support Program", link: "https://www.caregiver.va.gov/", desc: "Stipends, training, and respite care for caregivers of veterans" },
                { name: "National Alliance on Mental Illness — Veterans", link: "https://www.nami.org/Your-Journey/Veterans-Active-Duty", desc: "Mental health support for veterans and their families" },
                { name: "Give an Hour", link: "https://giveanhour.org/", desc: "Free mental health care for military families from volunteer providers" },
                { name: "Blue Star Families", link: "https://bluestarfam.org/", desc: "Programs and research supporting military family well-being" },
                { name: "Tragedy Assistance Program for Survivors (TAPS)", link: "https://www.taps.org/", desc: "Grief support for families who have lost a loved one in military service" }
              ]}
            />

            <ResourceSection
              title="Peer Support & Community"
              resources={[
                { name: "Team Red White & Blue", link: "https://www.teamrwb.org/", desc: "Physical and social activities connecting veterans to their communities" },
                { name: "The Mission Continues", link: "https://missioncontinues.org/", desc: "Veteran service platoons doing community impact work nationwide" },
                { name: "Student Veterans of America", link: "https://studentveterans.org/", desc: "Support network for veterans pursuing higher education" },
                { name: "Veterans of Foreign Wars (VFW)", link: "https://www.vfw.org/", desc: "Advocacy, camaraderie, and community for combat veterans" },
                { name: "American Legion", link: "https://www.legion.org/", desc: "The nation's largest veterans service organization — local posts nationwide" }
              ]}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}

function ResourceSection({ title, resources }:{ title: string; resources: Array<{name: string; link: string; desc: string}> }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4">
        {resources.map((r, i) => (
          <div key={i} className="border-l-4 border-blue-600 pl-4">
            <a href={r.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline">
              {r.name}
            </a>
            <p className="text-sm text-slate-600 mt-1">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
