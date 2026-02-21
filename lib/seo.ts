export const SITE_URL = "https://twop.vercel.app";
export const SITE_NAME = "The Warrior Outreach Project";
export const DEFAULT_DESCRIPTION =
  "Warrior Outreach Project — veteran housing, fitness, healthcare navigation, and community resilience. Supporting veterans across NYC, Florida, and the East Coast.";

const OG_IMAGE = `${SITE_URL}/api/og`;

export function buildMeta(
  title: string,
  description: string,
  path: string,
  keywords?: string
) {
  const url = `${SITE_URL}${path}`;
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website" as const,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [OG_IMAGE],
    },
  };
}
