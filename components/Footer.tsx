
import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 bg-white">
      <Container className="py-10 text-sm text-slate-600">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="font-semibold text-slate-900">The Warrior Outreach Project</div>
            <p className="mt-2">
              Housing, training, healthcare navigation, and community resilience support — with a focus on helping veterans
              stabilize and move toward independence.
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Quick Links</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/resources">Veteran Resources</Link></li>
              <li><Link href="/city-briefing">City Briefing</Link></li>
              <li><Link href="/dashboard">Impact Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Contact</div>
            <p className="mt-2">
              info@thewarrioroutreachproject.org<br/>
              (212) 729-0453
            </p>
          </div>
        </div>
        <div className="mt-8 text-xs">© {new Date().getFullYear()} The Warrior Outreach Project.</div>
      </Container>
    </footer>
  );
}
