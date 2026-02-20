
import Container from "../components/Container";
import Partners from "../components/Partners";
import BranchesSlider from "../components/BranchesSlider";
import Link from "next/link";

export default function Home(){
  return (
    <div>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Honoring service. Restoring strength. Building community.</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            The Warrior Outreach Project helps veterans stabilize through housing support, healthcare navigation, and workforce pathways — while
            strengthening the Clermont community through service and resilience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/victory-pointe" className="no-underline rounded-md px-4 py-2 bg-[#4A5D3F] text-white hover:bg-[#3d4d34] font-medium">
              Sign Support for Victory Pointe
            </Link>
            <Link href="/sponsor" className="no-underline rounded-md px-4 py-2 border-2 border-[#4A5D3F] text-[#4A5D3F] hover:bg-[#4A5D3F] hover:text-white font-medium transition-colors">
              Sponsor a Station
            </Link>
            <Link href="/get-help" className="no-underline rounded-md px-4 py-2 border border-slate-300 hover:bg-slate-50">
              I’m a Veteran — I Need Help
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Stat label="Initial local cohort" value="20–30 veterans (Phase 1)" />
            <Stat label="Support cost target" value="$2,800–$3,500 per veteran / month" />
            <Stat label="Funding model" value="Public-private partnership + sponsors" />
          </div>
        </Container>
      </section>

      <BranchesSlider />

      <Partners />

      <section>
        <Container className="py-14">
          <h2 className="text-2xl font-semibold">A Clermont-ready initiative</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            We’re building a visible community asset at Victory Pointe paired with a practical veteran intake and workforce pipeline — designed to be measurable,
            phased, and fiscally responsible.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card title="Victory Pointe Corridor" body="11 memorial + fitness stations with QR stories honoring local heroes." />
            <Card title="Workforce Pathways" body="Construction & repairs training plus community support during emergencies." />
            <Card title="Healthcare Navigation" body="Connect veterans to care through partnerships — reducing red tape." />
          </div>
        </Container>
      </section>
    </div>
  );
}

function Stat({ label, value }:{ label: string; value: string }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function Card({ title, body }:{ title: string; body: string }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="font-semibold">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}
