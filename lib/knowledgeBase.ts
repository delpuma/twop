
export type KBEntry = { id: string; title: string; tags: string[]; body: string };

export const kb: KBEntry[] = [
  {
    id: "overview",
    title: "Victory Pointe Veteran Fitness & Support Initiative",
    tags: ["victory", "pointe", "initiative", "clermont", "stations", "qr", "memorial", "trail"],
    body:
      "We propose an 11-station Veteran Fitness & Memorial Corridor at Victory Pointe along the Coast-to-Coast Trail and Lake Minneola. Each station features branch-themed fitness elements and QR codes that share stories honoring local veterans. The corridor is paired with a veteran intake and navigation hub to connect veterans to services and partnerships."
  },
  {
    id: "22",
    title: "22-a-day mission symbolism",
    tags: ["22", "suicide", "pushup", "dip", "stations"],
    body:
      "Each of the 11 stations includes two push-up/dip elements (22 total) to symbolize the urgency of addressing veteran suicide and to create a daily reminder that action and community support matter."
  },
  {
    id: "housing",
    title: "Housing & stabilization model",
    tags: ["housing", "stabilization", "30", "beds", "transitional", "program", "cost"],
    body:
      "Initial Clermont cohort targets 20–30 veterans. Planning target for a dignified dorm model is roughly 9,000–12,000 sq ft for 30 residents, depending on room layout, bathrooms, kitchen, and support spaces. Typical stabilization-phase program cost is projected at about $2,800–$3,500 per veteran per month (housing + food + case management + workforce support + medical navigation)."
  },
  {
    id: "workforce",
    title: "Workforce & community impact",
    tags: ["workforce", "construction", "repairs", "hurricane", "emergency", "trades", "community"],
    body:
      "Veterans are trained for construction and repair support, skilled trades pathways, and community resilience support during emergencies (e.g., hurricanes). This increases local workforce capacity and strengthens community readiness while creating pathways to self-sufficiency."
  },
  {
    id: "sponsorship",
    title: "Sponsorship model",
    tags: ["sponsor", "sponsorship", "naming", "station", "plaza", "donations", "private"],
    body:
      "The initiative is structured as a public-private partnership to leverage private sponsorships and reduce reliance on public dollars. Station naming rights, honor plaza sponsorship, program sponsorship, and community builder tiers allow businesses and partners to contribute visibly and permanently."
  },
  {
    id: "paymatrix",
    title: "Donations via PayMatrix or PayPal",
    tags: ["donate", "paymatrix", "paypal", "donation", "payment"],
    body:
      "Supporters can donate through PayPal or through PayMatrix. PayMatrix can support card payments and invoicing flows; PayPal offers an easy donation button."
  }
];
