
import Container from "../../components/Container";
import ContactForm from "../../components/ContactForm";
import { buildMeta } from "../../lib/seo";

export const metadata = buildMeta(
  "Contact Us",
  "Contact the Warrior Outreach Project for partnership inquiries, media, sponsorships, or veteran service needs.",
  "/contact",
  "contact Warrior Outreach Project, veteran nonprofit contact, veteran partnership inquiry"
);

export default function Contact(){
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            Reach out with questions, media inquiries, partnership opportunities, or veteran service needs.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 max-w-3xl">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
