import { buildMeta } from "../../lib/seo";

export const metadata = buildMeta(
  "Victory Pointe — Veteran Fitness & Memorial Corridor",
  "Sign your support for Victory Pointe in Clermont, FL — 11 branch-themed veteran fitness stations, bronze memorials, Military Working Dog Honor Plaza, and a veteran intake hub. Public-private partnership proposal.",
  "/victory-pointe",
  "Victory Pointe Clermont, veteran fitness corridor Florida, veteran memorial Clermont, military working dog memorial, sponsor veteran station, veteran support Clermont FL, sign petition veteran"
);

export default function VictoryPointeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
