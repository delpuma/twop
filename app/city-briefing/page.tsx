
import Container from "../../components/Container";
import Link from "next/link";

export default function CityBriefing(){
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">City Briefing: Victory Pointe Initiative</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            This page summarizes the initiative in a staff-friendly format: scope, benefits, funding approach, and measurable outcomes.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card title="Scope" body="11 fitness + memorial stations along Victory Pointe; QR storytelling; intake/navigation hub; workforce pathways." />
            <Card title="Funding" body="Designed as a public-private partnership with station naming sponsorships and program partners to reduce public burden." />
            <Card title="Measurement" body="Track supporters, letters, sponsor pipeline, veterans stabilized, placements, and volunteer hours." />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/dashboard" className="no-underline rounded-md px-4 py-2 bg-slate-900 text-white hover:bg-slate-800">View Impact Dashboard</Link>
            <Link href="/letters" className="no-underline rounded-md px-4 py-2 border border-slate-300 hover:bg-slate-50">Letters of Support</Link>
            <Link href="/sponsor" className="no-underline rounded-md px-4 py-2 border border-slate-300 hover:bg-slate-50">Sponsorship Opportunities</Link>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <h2 className="text-2xl font-semibold">Why this benefits Clermont</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
            <li>Activates an existing waterfront destination and trail segment with a unique civic feature</li>
            <li>Encourages repeat visitation and positive community engagement</li>
            <li>Builds veteran workforce capacity in trades and repairs</li>
            <li>Improves community resilience during emergencies (trained, organized volunteer capacity)</li>
            <li>Structured to leverage private sponsorships and community ownership</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10">Phased implementation</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-2 text-slate-700">
            <li><b>Phase 1:</b> Sponsor outreach, permitting coordination, station prototypes, signature collection</li>
            <li><b>Phase 2:</b> Install initial stations + launch QR storytelling + intake pilot</li>
            <li><b>Phase 3:</b> Expand stations, workforce programming, and measurable reporting</li>
          </ol>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="font-semibold">Key program economics (planning numbers)</div>
            <p className="mt-2 text-sm text-slate-700">
              Stabilization phase cost target: <b>$2,800–$3,500 per veteran per month</b> (housing + food + case management + workforce support + medical navigation).
              Target initial residential cohort: <b>20–30 veterans</b> accepted into our housing, training, and reintegration program at a time. Most graduate into stable independent housing within <b>9–12 months</b>, allowing us to transition the next veteran in and continue the cycle. Long-term goal: serve <b>thousands of veterans annually</b> through direct services, navigation, and community support. Planning target facility size for 30 residents (dignified dorm model): <b>~9,000–12,000 sq ft</b>.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Card({ title, body }:{ title:string; body:string }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="font-semibold">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}
