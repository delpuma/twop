
import Container from "../../components/Container";
import VolunteerForm from "../../components/VolunteerForm";

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
