
import Container from "../../components/Container";
import LetterUpload from "../../components/LetterUpload";

export default function Letters(){
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">Letters of Support</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            Letters of support help demonstrate community backing and reduce risk for City decision-makers. Use a template below or upload your signed letter.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Download templates</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              <li><a className="underline text-blue-700" href="/templates/business-letter.docx">Business Support Letter (DOCX)</a></li>
              <li><a className="underline text-blue-700" href="/templates/community-letter.docx">Community Member Letter (DOCX)</a></li>
              <li><a className="underline text-blue-700" href="/templates/veteran-letter.docx">Veteran Support Letter (DOCX)</a></li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Tip: Put your letter on your letterhead, include contact info, and keep it specific to Clermont and Victory Pointe.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Upload a signed letter</h2>
            <p className="mt-2 text-sm text-slate-600">Upload a PDF or DOCX of your signed letter. We’ll confirm receipt.</p>
            <div className="mt-5">
              <LetterUpload />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
