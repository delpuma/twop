
import Container from "../../components/Container";
import Link from "next/link";

export default function Programs(){
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">Our Programs</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            Comprehensive support designed to help veterans stabilize, heal, and build toward independence.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 space-y-12">
          <Program 
            title="Transitional Housing"
            description="Safe, dignified housing for veterans in crisis or transition"
            details={[
              "20-30 bed capacity in Phase 1",
              "Private or semi-private rooms with shared common areas",
              "On-site case management and peer support",
              "Average stay: 6-18 months depending on individual needs",
              "Focus on stability, sobriety support, and independence planning"
            ]}
          />

          <Program 
            title="Healthcare Navigation"
            description="Connecting veterans to medical care, mental health support, and VA benefits"
            details={[
              "VA benefits enrollment and claims assistance",
              "Coordination with local healthcare providers",
              "Mental health counseling referrals and support",
              "Substance abuse treatment connections",
              "Prescription assistance and medication management"
            ]}
          />

          <Program 
            title="Workforce Development"
            description="Training and job placement in construction, trades, and emergency services"
            details={[
              "Construction skills training (framing, electrical, plumbing)",
              "OSHA certifications and safety training",
              "Job placement with local contractors and businesses",
              "Emergency response team participation (hurricanes, disasters)",
              "Resume building, interview prep, and career counseling"
            ]}
          />

          <Program 
            title="Basic Needs Support"
            description="Food, clothing, and essential items for veterans in crisis"
            details={[
              "Daily meals and nutrition support",
              "Clothing and hygiene supplies",
              "Transportation assistance for appointments and job interviews",
              "Emergency financial assistance for critical needs",
              "Connection to community food banks and resources"
            ]}
          />

          <Program 
            title="Community & Peer Support"
            description="Building connection, purpose, and resilience through community"
            details={[
              "Peer mentorship from veterans who've successfully transitioned",
              "Group activities and recreational opportunities",
              "Service projects that give back to Clermont community",
              "Family reunification support when appropriate",
              "Ongoing alumni network and support after program completion"
            ]}
          />
        </Container>
      </section>

      <section className="bg-blue-50 border-y border-blue-100">
        <Container className="py-12 text-center">
          <h2 className="text-2xl font-semibold">Need Help?</h2>
          <p className="mt-2 text-slate-700">If you're a veteran who needs support, start here.</p>
          <Link href="/get-help" className="mt-4 inline-block no-underline rounded-md px-6 py-3 bg-blue-700 text-white hover:bg-blue-600">
            Request Help
          </Link>
        </Container>
      </section>
    </main>
  );
}

function Program({ title, description, details }:{ title: string; description: string; details: string[] }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-slate-600">{description}</p>
      <ul className="mt-6 space-y-2">
        {details.map((d, i) => (
          <li key={i} className="flex gap-3 text-slate-700">
            <span className="text-blue-600 font-bold">✓</span>
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
