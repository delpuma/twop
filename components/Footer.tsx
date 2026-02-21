"use client";
import { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const FB = "https://www.facebook.com/thewarrioroutreachproject/";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
    setStatus(res.ok ? "ok" : "err");
    if (res.ok) setEmail("");
  }

  return (
    <footer className="border-t border-slate-200 mt-16 bg-white">
      {/* Newsletter bar */}
      <div className="bg-[#1a2416] text-white">
        <Container className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-bold text-lg">Stay in the fight. Get updates.</div>
              <p className="text-sm text-white/60 mt-1">Mission updates, events, and ways to support veterans.</p>
            </div>
            {status === "ok" ? (
              <div className="text-amber-400 font-semibold text-sm">✓ You're subscribed!</div>
            ) : (
              <form onSubmit={submit} className="flex gap-2 w-full md:w-auto">
                <input
                  type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-2.5 text-sm flex-1 md:w-64 focus:outline-none focus:border-amber-400"
                />
                <button type="submit" className="rounded-lg bg-amber-500 text-white font-semibold text-sm px-5 py-2.5 hover:bg-amber-400 transition-colors shrink-0">
                  Subscribe
                </button>
              </form>
            )}
            {status === "err" && <p className="text-red-400 text-xs mt-1">Something went wrong. Try again.</p>}
          </div>
        </Container>
      </div>

      <Container className="py-10 text-sm text-slate-600">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/WOPLogo.png" alt="TWOP Logo" width={318} height={68} className="object-contain" />
            <p className="mt-4 text-xs leading-relaxed text-center md:text-left">
              Housing, training, healthcare navigation, and community resilience support — helping veterans
              stabilize and move toward independence.
            </p>
            <a href={FB} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs text-[#4A5D3F] hover:text-[#3a4a30] font-semibold transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              Follow us on Facebook
            </a>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-3">Quick Links</div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-[#4A5D3F]">About</Link></li>
              <li><Link href="/programs" className="hover:text-[#4A5D3F]">Programs</Link></li>
              <li><Link href="/victory-pointe" className="hover:text-[#4A5D3F]">Victory Pointe</Link></li>
              <li><Link href="/resources" className="hover:text-[#4A5D3F]">Veteran Resources</Link></li>
              <li><Link href="/dashboard" className="hover:text-[#4A5D3F]">Impact Dashboard</Link></li>
              <li><a href={FB} target="_blank" rel="noopener noreferrer" className="hover:text-[#4A5D3F]">Facebook</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-3">Contact</div>
            <p className="text-xs leading-relaxed">
              info@thewarrioroutreachproject.org<br/>
              (212) 729-0453<br/><br/>
              <span className="font-medium">567 Tompkins Ave Unit 50427</span><br/>
              Staten Island, NY 10305<br/><br/>
              <span className="font-medium">11505 Pineloch Loop</span><br/>
              Clermont, FL 34711<br/><br/>
              Expanding across the East Coast
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 text-xs flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div>
            <span className="font-semibold text-slate-700">The Warrior Outreach Project</span> is a 501(c)(3) nonprofit organization. All donations are tax-deductible.<br />
            © {new Date().getFullYear()} The Warrior Outreach Project. All rights reserved.
          </div>
          <a href="https://delpuma.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#4A5D3F] transition-colors shrink-0">
            Developed by DelPuma Consulting Group
          </a>
        </div>
      </Container>
    </footer>
  );
}
