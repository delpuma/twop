
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AIChat from "../components/AIChat";

export const metadata = {
  title: {
    default: "The Warrior Outreach Project",
    template: "%s | The Warrior Outreach Project",
  },
  description: "Warrior Outreach Project — veteran housing, fitness, healthcare navigation, and community resilience across NYC, Florida, and the East Coast.",
  keywords: "veteran nonprofit, veteran housing, veteran support, Warrior Outreach Project, Victory Pointe Clermont, veteran fitness, homeless veterans, veteran charity, donate to veterans, veteran programs Florida",
  metadataBase: new URL("https://twop.vercel.app"),
  openGraph: {
    siteName: "The Warrior Outreach Project",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
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
