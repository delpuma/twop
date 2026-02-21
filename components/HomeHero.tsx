"use client";
import Link from "next/link";

export default function HomeHero({ supporters, letters }: { supporters: number; letters: number }) {
  return (
    <section className="relative bg-[#1a2416] text-white overflow-hidden min-h-[92vh] flex items-center">

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">

        {/* Badge */}
        <div className="fade-up" style={{ animationDelay: "0ms" }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            501(c)(3) Nonprofit · Clermont, FL &amp; Staten Island, NY
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up mt-6 text-5xl md:text-7xl font-black tracking-tight leading-[1.05] max-w-4xl" style={{ animationDelay: "100ms" }}>
          Honoring service.<br />
          <span className="text-amber-400">Restoring strength.</span><br />
          Building community.
        </h1>

        {/* Subtext */}
        <p className="fade-up mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl" style={{ animationDelay: "200ms" }}>
          A veteran-led nonprofit providing housing, healthcare navigation, workforce training, and proposing a nationally distinctive veteran corridor at Victory Pointe in Clermont, Florida (proposed 2026–2027).
        </p>

        {/* CTAs */}
        <div className="fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "300ms" }}>
          <Link href="/victory-pointe" className="rounded-xl bg-amber-500 text-white font-bold px-8 py-4 hover:bg-amber-400 transition-all hover:scale-105 text-base shadow-lg shadow-amber-500/20">
            Sign Support for Victory Pointe →
          </Link>
          <Link href="/donate" className="rounded-xl bg-white/10 border border-white/20 text-white font-bold px-8 py-4 hover:bg-white/20 transition-all text-base backdrop-blur-sm">
            Donate Now
          </Link>
          <Link href="/get-help" className="rounded-xl border border-white/10 text-white/70 font-medium px-8 py-4 hover:text-white hover:border-white/30 transition-all text-base">
            I&apos;m a Veteran — I Need Help
          </Link>
        </div>

        {/* Stats row */}
        <div className="fade-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10" style={{ animationDelay: "400ms" }}>
          {[
            { value: supporters > 0 ? supporters.toLocaleString() : "—", label: "Community Supporters" },
            { value: "20–30", label: "Veterans per cohort" },
            { value: "$2,800/mo", label: "All-in stabilization cost" },
            { value: "9–12 mo", label: "Average time to housing" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-black text-amber-400">{value}</div>
              <div className="mt-1 text-sm text-white/50">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.7s ease forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          animation: drift 12s ease-in-out infinite alternate;
        }
        .orb-1 { width: 600px; height: 600px; background: #4A5D3F; top: -200px; right: -100px; animation-duration: 14s; }
        .orb-2 { width: 400px; height: 400px; background: #b45309; bottom: -100px; left: 10%; animation-duration: 10s; animation-delay: -4s; }
        .orb-3 { width: 300px; height: 300px; background: #4A5D3F; top: 40%; left: 50%; animation-duration: 16s; animation-delay: -8s; }
        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, -30px) scale(1.08); }
        }
      `}</style>
    </section>
  );
}
