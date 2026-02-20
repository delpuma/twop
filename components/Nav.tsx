"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "./Container";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/victory-pointe", label: "Victory Pointe" },
  { href: "/get-help", label: "Get Help" },
  { href: "/resources", label: "Resources" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-50">
      <Container className="flex items-center justify-between py-3 gap-3">
        <Link href="/" className="no-underline font-semibold tracking-tight">
          The Warrior Outreach Project
        </Link>
        <nav className="hidden lg:flex gap-5 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="no-underline hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 items-center">
          <Link href="/donate" className="no-underline rounded-md px-3 py-2 text-sm bg-slate-900 text-white hover:bg-slate-800">
            Donate
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <Container className="py-4">
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="no-underline hover:underline py-2">
                  {l.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
