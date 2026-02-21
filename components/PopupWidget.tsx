"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PopupWidget() {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"sign" | "newsletter">("sign");
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup_dismissed");
    if (dismissed) return;
    const hasSigned = localStorage.getItem("vp_signed");
    const hasSubscribed = localStorage.getItem("nl_subscribed");
    if (hasSubscribed) return; // nothing left to ask
    setMode(hasSigned ? "newsletter" : "sign");
    const t = setTimeout(() => setShow(true), 4000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    sessionStorage.setItem("popup_dismissed", "1");
    setShow(false);
  }

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstName, source: "popup" }),
    });
    localStorage.setItem("nl_subscribed", "1");
    setLoading(false);
    setDone(true);
    setTimeout(dismiss, 2500);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={dismiss} />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-[#1a2416] text-white shadow-2xl overflow-hidden">
        {/* Top orb accent */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-600 opacity-10 blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#4A5D3F] opacity-15 blur-[50px] pointer-events-none" />

        <div className="relative z-10 p-7">
          {/* Close */}
          <button onClick={dismiss} className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors text-xl leading-none">✕</button>

          {done ? (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">🎉</div>
              <div className="text-xl font-bold text-amber-400">You&apos;re in!</div>
              <p className="mt-2 text-sm text-white/60">Thanks for joining the mission. We&apos;ll keep you updated.</p>
            </div>
          ) : mode === "sign" ? (
            <>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Victory Pointe · Clermont, FL
              </span>
              <h2 className="text-2xl font-black leading-tight">Help bring Victory Pointe to life.</h2>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Add your name to the community support list. Signatures help us show City leadership that Clermont is behind this.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/victory-pointe#sign"
                  onClick={dismiss}
                  className="block text-center rounded-xl bg-amber-500 text-white font-bold px-6 py-3.5 hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
                >
                  ✍️ Sign Now — Show Your Support
                </Link>
                <button
                  onClick={() => setMode("newsletter")}
                  className="text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  Already signed? Join our newsletter instead →
                </button>
              </div>
            </>
          ) : (
            <>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#4A5D3F]/40 border border-[#4A5D3F]/60 text-green-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Stay in the Loop
              </span>
              <h2 className="text-2xl font-black leading-tight">Get mission updates<br /><span className="text-amber-400">straight to your inbox.</span></h2>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Victory Pointe progress, veteran stories, events, and ways to help — no spam, ever.
              </p>
              <form onSubmit={handleNewsletter} className="mt-5 space-y-3">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-amber-400/60"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-amber-400/60"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-amber-500 text-white font-bold px-6 py-3.5 hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/20 disabled:opacity-60"
                >
                  {loading ? "Subscribing…" : "Subscribe to Updates →"}
                </button>
              </form>
              <p className="mt-3 text-xs text-white/30 text-center">No spam. Unsubscribe anytime.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
