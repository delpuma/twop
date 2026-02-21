
import Link from "next/link";
import Container from "../../components/Container";

export default function Donate(){
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold tracking-tight">Support Our Mission</h1>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            We are a non-profit 501(c)(3). All contributions are fully tax-deductible. When we say bring every man home, we mean it — every vet deserves a good home and a decent quality of life after serving our great country. Your support funds our work across the East Coast and helps build something permanent in Clermont, Florida.
          </p>
        </Container>
      </section>

      {/* Campaign cards */}
      <section className="bg-slate-50 border-b border-slate-200">
        <Container className="py-12">
          <h2 className="text-2xl font-semibold mb-2">Active Campaigns</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">Every dollar goes directly to veterans. Choose a campaign below or give to the general fund to support our work wherever it’s needed most.</p>
          <div className="grid gap-6 md:grid-cols-3">
            <CampaignCard
              title="General Mission Fund"
              goal="$150,000"
              description="Keeps our operations running across NYC and Florida — housing navigation, healthcare support, workforce training, emergency assistance, and basic needs for veterans in crisis on the East Coast."
              raised="$0"
            />
            <CampaignCard
              title="Victory Pointe — Clermont"
              goal="$3M private + $3M public"
              description="11-station veteran fitness corridor with branch-themed equipment and bronze memorials, Military Working Dog Honor Plaza, Yellow Building intake office, and veteran support hub. $3M private fundraising matched by $3M public partnership."
              raised="$0"
              highlight
            />
            <CampaignCard
              title="Wash Bus Project"
              goal="$125,000 per bus"
              description="Mobile shower and laundry services for homeless veterans. Each fully-equipped bus brings dignity directly to veterans living on the street."
              raised="$0"
              urgent
            />
          </div>
        </Container>
      </section>

      {/* Victory Pointe breakdown */}
      <section className="bg-white border-b border-slate-200">
        <Container className="py-12">
          <h2 className="text-2xl font-semibold mb-2">Victory Pointe — What We’re Building</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">Every station can be sponsored by one organization or crowdfunded by the whole community. No contribution is too small — every dollar is recognized and goes directly toward honoring veterans at Victory Pointe.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FundCard title="Stations 1–10 — Bronze Memorials" amount="$300,000" description="Custom bronze relief plaques and polished granite pedestals at each station, honoring fallen Central Florida veterans by name." />
            <FundCard title="Stations 1–10 — Fitness Equipment" amount="$300,000" description="Branch-themed outdoor fitness equipment at each station — Army, Marines, Navy, Air Force, Coast Guard, Space Force, Special Ops, First Responders, Skilled Trades, and Wellness." />
            <FundCard title="Station 11 — Honor Plaza" amount="~$200,000" description="The emotional centerpiece: 6 life-size bronze Military Working Dog statues (Nemo, Stubby, Lucca, Gabe, Chips, Cairo), multi-user fitness structure, reflection seating, and flag feature." highlight />
            <FundCard title="Yellow Building — Intake Office" amount="$100,000" description="Equipment and renovations for the veteran intake and navigation hub at the existing yellow building at Victory Pointe. This is where veterans get connected to housing, healthcare, and workforce support." />
            <div className="rounded-xl border-2 border-slate-200 bg-slate-50 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">Total Project</div>
                <div className="text-3xl font-bold text-[#4A5D3F]">~$900,000</div>
                <p className="mt-2 text-sm text-slate-600">One sponsor, many sponsors, or the whole community — every contribution moves us closer to breaking ground.</p>
              </div>
              <Link href="/sponsors" className="mt-4 block text-center rounded-lg bg-[#4A5D3F] text-white text-sm font-semibold px-4 py-2 hover:bg-[#3a4a30] transition-colors">Become a Sponsor →</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Check donations */}
      <section>
        <Container className="py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">Donate by Check</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-[#4A5D3F] bg-white p-6">
                <h3 className="font-semibold text-lg mb-3">NYC Operations</h3>
                <p className="text-sm text-slate-600 mb-4">General mission support and NYC programs</p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-mono text-sm">The Warrior Outreach Project<br/>567 Tompkins Ave Unit 50427<br/>Staten Island, NY 10305</p>
                </div>
              </div>
              <div className="rounded-xl border-2 border-[#4A5D3F] bg-white p-6">
                <h3 className="font-semibold text-lg mb-3">Florida Operations</h3>
                <p className="text-sm text-slate-600 mb-4">Victory Pointe and Clermont programs</p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-mono text-sm">The Warrior Outreach Project<br/>11505 Pineloch Loop<br/>Clermont, FL 34711</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-semibold mb-2">Make checks payable to:</h3>
              <p className="text-lg font-semibold text-blue-900">The Warrior Outreach Project</p>
              <p className="text-sm text-slate-600 mt-3">Include a note indicating which campaign you’d like to support, or leave blank for general mission support.</p>
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
  title: string; goal: string; description: string; raised: string; highlight?: boolean; urgent?: boolean;
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
      <div className="flex justify-between text-sm">
        <span className="text-slate-500">Raised: {raised}</span>
        <span className="font-semibold">Goal: {goal}</span>
      </div>
    </div>
  );
}

function FundCard({ title, amount, description, highlight }: {
  title: string; amount: string; description: string; highlight?: boolean;
}) {
  return (
    <div className={`rounded-xl border-2 p-6 ${
      highlight ? 'border-amber-400 bg-amber-50' : 'border-slate-200 bg-white'
    }`}>
      <div className={`text-xs uppercase tracking-wide font-semibold mb-1 ${
        highlight ? 'text-amber-700' : 'text-slate-500'
      }`}>{title}</div>
      <div className={`text-2xl font-bold mb-2 ${
        highlight ? 'text-amber-700' : 'text-[#4A5D3F]'
      }`}>{amount}</div>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}


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
              goal="$3M private + $3M public"
              description="11-station veteran fitness corridor + intake center. $3M private fundraising goal matched by $3M in public partnership funding."
              raised="$0"
              highlight
            />
            <CampaignCard
              title="Wash Bus Project"
              goal="$125,000 per bus"
              description="Mobile shower and laundry services for homeless veterans. Each fully-equipped bus costs $125,000."
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
