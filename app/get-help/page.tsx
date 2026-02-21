
"use client";
import { useState } from "react";
import Container from "../../components/Container";
import Link from "next/link";

export default function GetHelp() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading"); setMsg("");
    const form = new FormData(e.currentTarget);
    const payload = {
      fullName:     String(form.get("fullName") || ""),
      email:        String(form.get("email") || ""),
      phone:        String(form.get("phone") || ""),
      branch:       String(form.get("branch") || ""),
      needs:        form.getAll("needs"),
      isHomeless:   String(form.get("isHomeless") || ""),
      urgentMedical:String(form.get("urgentMedical") || ""),
      location:     String(form.get("location") || ""),
      notes:        String(form.get("notes") || ""),
    };
    const res = await fetch("/api/intake", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (res.ok) { setStatus("ok"); setMsg("Request received. Someone will contact you as soon as possible."); (e.currentTarget as HTMLFormElement).reset(); }
    else { setStatus("err"); setMsg("Something went wrong. Please try again or call us directly."); }
  }

  return (
    <main>

      {/* HERO */}
      <section className="relative bg-[#1a2416] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#4A5D3F] opacity-20 blur-[100px] -top-40 -right-20" />
          <div className="absolute w-[300px] h-[300px] rounded-full bg-amber-700 opacity-15 blur-[80px] bottom-0 left-10" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Confidential · No Judgment · Free
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
              You served.<br />
              <span className="text-amber-400">Now let us serve you.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              Whether you need housing, healthcare, food, job training, or just someone to talk to — we're here. Fill out the form below and our team will reach out as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* CRISIS STRIP */}
      <div className="bg-red-600 text-white">
        <Container className="py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm font-semibold">🚨 In immediate crisis? Don't wait — call the Veterans Crisis Line now.</p>
          <a href="tel:988" className="shrink-0 rounded-lg bg-white text-red-600 font-bold text-sm px-5 py-2 hover:bg-red-50 transition-colors">Call 988 → Press 1</a>
        </Container>
      </div>

      <section className="bg-slate-50 border-b border-slate-200">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">

            {/* LEFT — trust + what to expect */}
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-2">What We Can Help With</div>
                <div className="space-y-3">
                  {[
                    { emoji: "🏠", label: "Housing",              desc: "Transitional housing, emergency shelter referrals, and a path to independent living." },
                    { emoji: "🏥", label: "Healthcare",           desc: "VA benefits navigation, mental health referrals, and medical care connections." },
                    { emoji: "🔧", label: "Workforce",            desc: "Job training, skilled trades, resume help, and employer connections." },
                    { emoji: "🍽️", label: "Basic Needs",         desc: "Food, clothing, transportation, and emergency financial assistance." },
                    { emoji: "📋", label: "Benefits & Paperwork", desc: "Help navigating VA claims, disability benefits, and government programs." },
                    { emoji: "🤝", label: "Peer Support",         desc: "Connection to other veterans who've been through it and come out the other side." },
                  ].map(({ emoji, label, desc }) => (
                    <div key={label} className="flex gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-[#4A5D3F]/40 transition-colors">
                      <span className="text-xl shrink-0">{emoji}</span>
                      <div>
                        <div className="font-semibold text-sm text-slate-900">{label}</div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What happens next */}
              <div className="rounded-xl bg-[#4A5D3F] text-white p-5">
                <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-3">What Happens Next</div>
                <div className="space-y-3">
                  {[
                    { n: "1", t: "We receive your request", d: "Your intake form goes directly to our team." },
                    { n: "2", t: "We reach out within 48 hrs", d: "A team member contacts you by phone or email." },
                    { n: "3", t: "We build a plan together", d: "We assess your needs and connect you to the right resources." },
                    { n: "4", t: "You get support", d: "Housing, healthcare, workforce, or whatever you need most." },
                  ].map(({ n, t, d }) => (
                    <div key={n} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{n}</div>
                      <div>
                        <div className="text-sm font-semibold">{t}</div>
                        <p className="text-xs text-white/60 mt-0.5">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other resources */}
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-3">Other Resources</div>
                <div className="space-y-2 text-sm">
                  <a href="tel:988" className="flex items-center gap-2 text-slate-700 hover:text-[#4A5D3F]">📞 Veterans Crisis Line — 988, Press 1</a>
                  <Link href="/resources" className="flex items-center gap-2 text-slate-700 hover:text-[#4A5D3F]">📚 Full Veteran Resource Directory →</Link>
                  <Link href="/contact" className="flex items-center gap-2 text-slate-700 hover:text-[#4A5D3F]">✉️ Contact Us Directly →</Link>
                </div>
              </div>
            </div>

            {/* RIGHT — form */}
            <div>
              <div className="rounded-2xl border-2 border-[#4A5D3F]/20 bg-white p-8 shadow-sm">
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-widest text-[#4A5D3F] font-semibold mb-1">Veteran Intake Form</div>
                  <h2 className="text-2xl font-bold text-slate-900">Request Support</h2>
                  <p className="mt-1 text-sm text-slate-500">All information is confidential. We will never sell your data.</p>
                </div>

                {status === "ok" ? (
                  <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
                    <div className="text-3xl mb-3">✅</div>
                    <div className="font-bold text-green-800 text-lg">Request Received</div>
                    <p className="mt-2 text-sm text-green-700">{msg}</p>
                    <button onClick={() => setStatus("idle")} className="mt-4 text-sm text-green-600 underline">Submit another request</button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name *</label>
                      <input name="fullName" required className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5D3F]/40 focus:border-[#4A5D3F]" placeholder="Your full name" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Email</label>
                        <input name="email" type="email" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5D3F]/40 focus:border-[#4A5D3F]" placeholder="Optional" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Phone</label>
                        <input name="phone" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5D3F]/40 focus:border-[#4A5D3F]" placeholder="Best number to reach you" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Branch of Service</label>
                        <select name="branch" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5D3F]/40 focus:border-[#4A5D3F]">
                          <option value="">Select branch (optional)</option>
                          <option>Army</option><option>Navy</option><option>Air Force</option>
                          <option>Marines</option><option>Coast Guard</option><option>Space Force</option>
                          <option>National Guard</option><option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Current Location</label>
                        <input name="location" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5D3F]/40 focus:border-[#4A5D3F]" placeholder="City / area" />
                      </div>
                    </div>

                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                      <div className="text-xs font-semibold text-slate-700 mb-3">What do you need help with? (check all that apply)</div>
                      <div className="grid grid-cols-2 gap-2">
                        {["Housing", "Food / clothing", "Healthcare navigation", "Job / training", "Transportation", "Benefits / paperwork", "Mental health support", "Peer connection"].map((x) => (
                          <label key={x} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                            <input type="checkbox" name="needs" value={x} className="h-4 w-4 rounded accent-[#4A5D3F]" /> {x}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Currently homeless? *</label>
                        <select name="isHomeless" required className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5D3F]/40 focus:border-[#4A5D3F]">
                          <option value="">Select one</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="at-risk">At risk</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Urgent medical need? *</label>
                        <select name="urgentMedical" required className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5D3F]/40 focus:border-[#4A5D3F]">
                          <option value="">Select one</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Anything else we should know?</label>
                      <textarea name="notes" rows={4} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5D3F]/40 focus:border-[#4A5D3F] resize-none" placeholder="Share anything that helps us understand your situation..." />
                    </div>

                    {msg && status === "err" && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{msg}</p>}

                    <button disabled={status === "loading"} className="w-full rounded-xl bg-[#4A5D3F] text-white font-bold py-4 text-base hover:bg-[#3a4a30] disabled:opacity-50 transition-all hover:scale-[1.01] shadow-lg shadow-[#4A5D3F]/20">
                      {status === "loading" ? "Submitting…" : "Request Help →"}
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      Your information is confidential and will never be sold. If you are in immediate danger, call 911.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#1a2416] text-white">
        <Container className="py-12 text-center">
          <h2 className="text-2xl font-black">Not sure where to start?</h2>
          <p className="mt-2 text-white/70 max-w-xl mx-auto">Browse our full veteran resource directory or reach out directly — we'll point you in the right direction.</p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link href="/resources" className="rounded-xl bg-amber-500 text-white font-bold px-7 py-3.5 hover:bg-amber-400 transition-all hover:scale-105">Browse Resources →</Link>
            <Link href="/contact" className="rounded-xl bg-white/10 border border-white/20 text-white font-bold px-7 py-3.5 hover:bg-white/20 transition-all">Contact Us</Link>
          </div>
        </Container>
      </section>

    </main>
  );
}
