
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AIChat from "../components/AIChat";

export const metadata = {
  title: "The Warrior Outreach Project",
  description: "Veteran housing, training, and community resilience.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }:{ children: React.ReactNode }){
  return (
    <html lang="en">
      <body className="bg-gray-50 text-slate-900">
        <Nav />
        <main>{children}</main>
        <Footer />
        <AIChat />
      </body>
    </html>
  );
}
