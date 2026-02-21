
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
          <h1 className="text-4xl font-semibold tracking-tight">Sponsorship Opportunities</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            Help fund long-lasting stations and veteran support pathways. Sponsorships reduce public burden and increase community ownership.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold">Suggested tiers</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              <li><b>Station Naming Sponsor:</b> $25,000–$40,000</li>
              <li><b>Honor Plaza Sponsor:</b> $75,000–$125,000</li>
              <li><b>Veteran Housing & Training Partner:</b> $50,000+</li>
              <li><b>Skilled Trades & Workforce Sponsor:</b> $15,000–$50,000</li>
              <li><b>Community Builder:</b> $5,000–$14,999</li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Recognition can include station plaque placement, website recognition, and dedication ceremony participation (as appropriate).
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Sponsor interest form</h2>
            <p className="mt-2 text-sm text-slate-600">Submit your interest and our team will follow up.</p>
            <div className="mt-5">
              <SponsorForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
