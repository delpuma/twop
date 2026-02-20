
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 bg-white">
      <Container className="py-10 text-sm text-slate-600">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/WOPLogo.png" alt="TWOP Logo" width={318} height={68} className="object-contain" />
            <p className="mt-4 text-xs leading-relaxed text-center md:text-left">
              Housing, training, healthcare navigation, and community resilience support — helping veterans
              stabilize and move toward independence.
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-3">Quick Links</div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-[#4A5D3F]">About</Link></li>
              <li><Link href="/programs" className="hover:text-[#4A5D3F]">Programs</Link></li>
              <li><Link href="/victory-pointe" className="hover:text-[#4A5D3F]">Victory Pointe</Link></li>
              <li><Link href="/resources" className="hover:text-[#4A5D3F]">Veteran Resources</Link></li>
              <li><Link href="/dashboard" className="hover:text-[#4A5D3F]">Impact Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-3">Contact</div>
            <p className="text-xs leading-relaxed">
              info@thewarrioroutreachproject.org<br/>
              (212) 729-0453<br/><br/>
              <span className="font-medium">NYC & Clermont, FL</span><br/>
              Expanding across the East Coast
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-center md:text-left">© {new Date().getFullYear()} The Warrior Outreach Project. All rights reserved.</div>
      </Container>
    </footer>
  );
}
