
import Link from "next/link";
import Container from "./Container";

const links = [
  { href: "/victory-pointe", label: "Victory Pointe" },
  { href: "/city-briefing", label: "City Briefing" },
  { href: "/dashboard", label: "Impact Dashboard" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/get-help", label: "Get Help" },
  { href: "/letters", label: "Letters of Support" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" }
];

export default function Nav() {
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
        <div className="flex gap-2">
          <Link href="/victory-pointe" className="no-underline rounded-md px-3 py-2 text-sm border border-slate-300 hover:bg-slate-50">
            Sign Support
          </Link>
          <Link href="/donate" className="no-underline rounded-md px-3 py-2 text-sm bg-slate-900 text-white hover:bg-slate-800">
            Donate
          </Link>
        </div>
      </Container>
    </header>
  );
}
