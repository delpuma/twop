
import Container from "../components/Container";
import Partners from "../components/Partners";
import BranchesSlider from "../components/BranchesSlider";
import Link from "next/link";
import Image from "next/image";

export default function Home(){
  return (
    <div>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Honoring service. Restoring strength. Building community.</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            A 501(c)(3) nonprofit providing housing, healthcare navigation, workforce training, and community reintegration for veterans — while building a nationally distinctive veteran corridor at Victory Pointe in Clermont, Florida.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/victory-pointe" className="no-underline rounded-md px-4 py-2 bg-[#4A5D3F] text-white hover:bg-[#3d4d34] font-medium">
              Sign Support for Victory Pointe
            </Link>
            <Link href="/sponsor" className="no-underline rounded-md px-4 py-2 border-2 border-[#4A5D3F] text-[#4A5D3F] hover:bg-[#4A5D3F] hover:text-white font-medium transition-colors">
              Sponsor a Station
            </Link>
            <Link href="/get-help" className="no-underline rounded-md px-4 py-2 border border-slate-300 hover:bg-slate-50">
              I&apos;m a Veteran — I Need Help
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <Stat label="Residential cohort" value="20–30 veterans" sub="9–12 mo. to graduation" />
            <Stat label="Stabilization cost" value="$2,800–$3,500 / mo" />
            <Stat label="Year 1 regional impact" value="$1.2M–$1.8M" />
            <Stat label="Funding model" value="Public-private partnership" />
          </div>
        </Container>
      </section>

      <BranchesSlider />

      <Partners />

      <section className="bg-slate-50 border-y border-slate-200">
        <Container className="py-12">
          <h2 className="text-2xl font-semibold mb-6">Our Mission in Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="relative col-span-2 md:col-span-1 row-span-2 h-72 md:h-full rounded-xl overflow-hidden">
              <Image src="/images/site/veteran-attention.jpg" alt="Veteran at attention" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image src="/images/site/salute-statue.jpg" alt="Salute to veterans" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image src="/images/site/veteran-ptsd.jpg" alt="Veteran support" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image src="/images/site/veteran-photo.jpg" alt="Veterans" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image src="/images/site/homeless-eating.jpg" alt="Outreach support" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <h2 className="text-2xl font-semibold">A Clermont-ready initiative</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Clermont has an opportunity to lead with a model that is visible, actionable, community-driven, fiscally responsible, and worthy of those who served.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card
              title="Victory Pointe Corridor"
              body="11 branch-themed fitness stations with dual push-up/dip elements (22 total) and QR memorial storytelling honoring local heroes."
            />
            <Card
              title="Workforce Pathways"
              body="Construction, skilled trades, disaster response, hospitality partnerships (IG Hotels), and a pathway to small business ownership."
            />
            <Card
              title="Healthcare Navigation"
              body="Connect veterans to VA benefits, medical care, and mental health support — removing barriers and reducing red tape."
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#4A5D3F] text-white">
        <Container className="py-14">
          <h2 className="text-2xl font-semibold">Rapid stabilization. Measurable outcomes.</h2>
          <p className="mt-3 max-w-3xl opacity-90 leading-relaxed">
            Warrior Outreach is intentionally designed to help veterans graduate out of the system, not remain dependent. Our program tracks housing placements, workforce placements, private dollars leveraged, volunteer hours, and community partnership growth.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ImpactStat label="Year 1 regional activity" value="$1.2M – $1.8M" />
            <ImpactStat label="Year 2 regional activity" value="$2.0M – $2.8M" />
            <ImpactStat label="Year 3 regional activity" value="$3.0M+" />
          </div>
          <p className="mt-6 text-sm opacity-70">Preliminary model using conservative assumptions. Reflects workforce activation, visitation, sponsorship activity, and program operations.</p>
        </Container>
      </section>
    </div>
  );
}

function Stat({ label, value, sub }:{ label: string; value: string; sub?: string }){
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-[#4A5D3F]">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
      {sub && <div className="mt-0.5 text-xs text-slate-400">{sub}</div>}
    </div>
  );
}
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

function ImpactStat({ label, value }:{ label: string; value: string }){
  return (
    <div className="rounded-xl bg-white/10 border border-white/20 p-5">
      <div className="text-xs uppercase tracking-wide opacity-70">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  );
}
