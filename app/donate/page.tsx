
import Container from "../../components/Container";

export default function Donate(){
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">Support Our Mission</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            We are a non-profit 501(c)(3). Any contributions to the Warrior Outreach Project are fully tax-deductible
            under current law. When we say bring every man home, we mean it — every vet deserves a good home and a
            decent quality of life after serving our great country.
          </p>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container className="py-12">
          <div className="grid gap-6 md:grid-cols-3">
            <CampaignCard
              title="General Mission Support"
              goal="$150,000"
              description="Housing, healthcare navigation, workforce training, and basic needs support for veterans across NYC and Florida."
              raised="$0"
            />
            <CampaignCard
              title="Victory Pointe - Clermont"
              goal="$85,000"
              description="11-station veteran fitness corridor + intake center. Memorial + community impact for Clermont, FL."
              raised="$0"
              highlight
            />
            <CampaignCard
              title="Wash Bus Project"
              goal="$25,000"
              description="Mobile shower and laundry services for homeless veterans. Urgent need - launching Q2 2025."
              raised="$0"
              urgent
            />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">Donate by Check</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-[#4A5D3F] bg-white p-6">
                <h3 className="font-semibold text-lg mb-3">NYC Operations</h3>
                <p className="text-sm text-slate-600 mb-4">For general mission support and NYC programs</p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-mono text-sm">
                    The Warrior Outreach Project<br/>
                    567 Tompkins Ave Unit 50427<br/>
                    Staten Island, NY 10305
                  </p>
                </div>
              </div>

              <div className="rounded-xl border-2 border-[#4A5D3F] bg-white p-6">
                <h3 className="font-semibold text-lg mb-3">Florida Operations</h3>
                <p className="text-sm text-slate-600 mb-4">For Victory Pointe and Clermont programs</p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-mono text-sm">
                    The Warrior Outreach Project<br/>
                    11505 Pineloch Loop<br/>
                    Clermont, FL 34711
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-semibold mb-2">Make checks payable to:</h3>
              <p className="text-lg font-semibold text-blue-900">The Warrior Outreach Project</p>
              <p className="text-sm text-slate-600 mt-3">
                Please include a note indicating which campaign you'd like to support, or leave blank for general mission support.
              </p>
            </div>

            <div className="mt-8 text-center text-sm text-slate-600">
              <p>The Warrior Outreach Project is a 501(c)(3) nonprofit organization.</p>
              <p className="mt-1">All contributions are fully tax-deductible under current law.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function CampaignCard({ title, goal, description, raised, highlight, urgent }: { 
  title: string; 
  goal: string; 
  description: string; 
  raised: string;
  highlight?: boolean;
  urgent?: boolean;
}) {
  return (
    <div className={`rounded-xl border-2 p-6 ${
      highlight ? 'border-[#4A5D3F] bg-[#4A5D3F]/5' : 
      urgent ? 'border-orange-500 bg-orange-50' : 
      'border-slate-200 bg-white'
    }`}>
      {urgent && <div className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-3">URGENT</div>}
      {highlight && <div className="inline-block px-3 py-1 bg-[#4A5D3F] text-white text-xs font-semibold rounded-full mb-3">FEATURED</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-4">{description}</p>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-slate-600">Raised: {raised}</span>
          <span className="font-semibold">Goal: {goal}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div className="bg-[#4A5D3F] h-2 rounded-full" style={{ width: '0%' }} />
        </div>
      </div>
    </div>
  );
}
