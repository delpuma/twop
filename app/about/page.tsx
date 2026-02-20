
import Container from "../../components/Container";

export default function About(){
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">About The Warrior Outreach Project</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            We exist to help veterans stabilize, heal, and rebuild through comprehensive support that addresses housing, healthcare, workforce development, and community connection.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                The Warrior Outreach Project provides transitional housing, healthcare navigation, workforce training, and emergency support to veterans in crisis. We believe every veteran deserves dignity, stability, and a clear path to independence.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Our Clermont initiative combines a visible community memorial (Victory Pointe) with practical veteran services — creating measurable impact while strengthening the entire community.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">What We Do</h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span><strong>Housing:</strong> Transitional housing for 20-30 veterans in dignified, supportive environment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span><strong>Healthcare:</strong> Navigate VA benefits, connect to medical care, mental health support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span><strong>Workforce:</strong> Construction & trades training, job placement, emergency response teams</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span><strong>Basic Needs:</strong> Food, clothing, transportation assistance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span><strong>Community:</strong> Peer support, mentorship, purpose through service</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold">Why Clermont?</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Clermont offers the perfect combination of community support, available resources, and strategic location. Victory Pointe provides a visible, accessible location for our memorial corridor while the surrounding area offers workforce opportunities in construction, trades, and emergency services.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              This initiative is designed to be fiscally responsible, measurable, and scalable — starting with a focused cohort and expanding as we demonstrate impact.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <h2 className="text-2xl font-semibold text-center mb-8">Board of Directors</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <BoardMember name="Ryan Morales" title="Board Member" />
            <BoardMember name="Matt Sanjari" title="Board Member" />
            <BoardMember name="Chris Fabiano" title="Founder / President / CEO" photo="/images/board/chris.jpg" />
            <BoardMember name="Francisco" title="Secretary" photo="/images/board/francisco.jpg" />
            <BoardMember name="Nicholas Moroz" title="Director of Technology" />
            <BoardMember name="Ernest" title="Team Member" />
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 border-t border-slate-200">
        <Container className="py-12">
          <h2 className="text-2xl font-semibold text-center">Our Values</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ValueCard title="Dignity" body="Every veteran deserves respect, safety, and a path forward — no matter their circumstances." />
            <ValueCard title="Accountability" body="We measure impact, track outcomes, and operate with full transparency to our community and donors." />
            <ValueCard title="Community" body="Veterans heal through connection and purpose. We build community while strengthening Clermont." />
          </div>
        </Container>
      </section>
    </main>
  );
}

function ValueCard({ title, body }:{ title: string; body: string }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="text-lg font-semibold text-blue-700">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}

function BoardMember({ name, title, photo }:{ name: string; title: string; photo?: string }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
      {photo ? (
        <img src={photo} alt={name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover object-top" />
      ) : (
        <div className="w-20 h-20 rounded-full bg-[#4A5D3F] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
      )}
      <div className="font-semibold text-lg">{name}</div>
      <div className="text-sm text-slate-600 mt-1">{title}</div>
    </div>
  );
}
