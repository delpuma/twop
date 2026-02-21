"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

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
    <header className="border-b-2 border-[#4A5D3F] bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm">
      <Container className="flex items-center justify-between py-2 gap-3">
        <Link href="/" className="no-underline flex items-center">
          <Image src="/images/WOPLogo.png" alt="TWOP Logo" width={318} height={68} className="object-contain" />
        </Link>
        <nav className="hidden lg:flex gap-5 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="no-underline hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 items-center">
          <a href="https://www.facebook.com/thewarrioroutreachproject/" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex text-slate-500 hover:text-[#4A5D3F] transition-colors" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
          </a>
          <Link href="/donate" className="no-underline rounded-md px-4 py-2 text-sm font-medium bg-[#4A5D3F] text-white hover:bg-[#3d4d34] transition-colors">
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
