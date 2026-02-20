
import Container from "../../components/Container";

export default function About(){
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">About The Warrior Outreach Project</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            We are committed to honoring, stabilizing, and empowering veterans by providing accessible pathways to housing, healthcare, workforce training, and community reintegration. Our model removes unnecessary barriers and connects veterans directly with the support systems they need to rebuild strong, independent lives.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                The Warrior Outreach Project provides transitional housing, healthcare navigation, workforce training, and emergency support to veterans in crisis. We believe every veteran deserves dignity, stability, and a clear path to independence — no matter their circumstances.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Our program is intentionally designed to help veterans <strong>graduate out of the system</strong>, not remain dependent — with employment placement, skilled trades development, hospitality workforce partnerships (including IG Hotels), and long-term housing transition support.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">What We Do</h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-[#4A5D3F] font-bold">→</span>
                  <span><strong>Housing:</strong> Transitional housing for 20–30 veterans in a dignified, supportive environment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A5D3F] font-bold">→</span>
                  <span><strong>Healthcare:</strong> Navigate VA benefits, connect to medical care and mental health support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A5D3F] font-bold">→</span>
                  <span><strong>Workforce:</strong> Construction, skilled trades, disaster response, and hospitality pathways</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A5D3F] font-bold">→</span>
                  <span><strong>Basic Needs:</strong> Food, meal support, case management, and transportation assistance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A5D3F] font-bold">→</span>
                  <span><strong>Community:</strong> Peer support, mentorship, and purpose through service</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold">Why Clermont?</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Victory Pointe presents a unique, high-visibility lakeside environment where Clermont can create a nationally distinctive Veteran Fitness &amp; Memorial Corridor that serves both veterans and the broader community. This initiative activates existing public space with minimal new infrastructure while increasing positive foot traffic and demonstrating Clermont&apos;s commitment to veteran wellness and suicide prevention.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              The initiative is structured to protect the City of Clermont by leveraging existing infrastructure, pursuing private sponsorships, building healthcare and workforce partnerships, and phasing program growth responsibly — tracking measurable performance metrics every step of the way.
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
            <ValueCard title="Accountability" body="We track veterans housed, workforce placements, private dollars leveraged, volunteer hours, and community partnership growth." />
            <ValueCard title="Independence" body="Our model is designed to help veterans graduate out of the system into stable employment, independent housing, and small business ownership." />
          </div>
        </Container>
      </section>
    </main>
  );
}

function ValueCard({ title, body }:{ title: string; body: string }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="text-lg font-semibold text-[#4A5D3F]">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}

function BoardMember({ name, title, photo }:{ name: string; title: string; photo?: string }){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
      {photo ? (
        <img src={photo} alt={name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" style={{objectPosition: 'center 15%'}} />
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
