
import Container from "../../components/Container";
import VolunteerForm from "../../components/VolunteerForm";
import { buildMeta } from "../../lib/seo";

export const metadata = buildMeta(
  "Volunteer with Veterans",
  "Volunteer with the Warrior Outreach Project. Help with outreach, events, skilled trades, admin, and veteran support programs in Clermont, FL and NYC.",
  "/volunteer",
  "volunteer with veterans, veteran volunteer Florida, veteran nonprofit volunteer, Clermont volunteer, help veterans volunteer"
);

export default function Volunteer(){
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">Volunteer</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            Volunteer time and skills help move faster — outreach, events, trades, admin, and more.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 max-w-3xl">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <VolunteerForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
