
import Container from "../../components/Container";

export default function Donate(){
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">Donate</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            Your donation helps stabilize veterans through housing support, healthcare navigation, and workforce pathways.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Donate with PayPal</h2>
            <p className="mt-2 text-sm text-slate-600">
              Add your PayPal donate button embed code here (or replace with a PayPal link).
            </p>
            <div className="mt-4 border border-dashed border-slate-300 rounded-lg p-4 text-sm text-slate-600">
              PAYPAL BUTTON EMBED GOES HERE
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Donate with PayMatrix</h2>
            <p className="mt-2 text-sm text-slate-600">
              Paste your PayMatrix hosted payment form embed code here.
            </p>
            <div className="mt-4 border border-dashed border-slate-300 rounded-lg p-4 text-sm text-slate-600">
              PAYMATRIX EMBED GOES HERE
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
