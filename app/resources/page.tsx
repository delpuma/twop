
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
                { name: "Orlando VA Medical Center", link: "https://www.va.gov/orlando-health-care/", desc: "Healthcare services in Central Florida" }
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
