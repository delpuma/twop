
import { NextResponse } from "next/server";
import { kb } from "@/lib/knowledgeBase";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const q = String(body?.q || "").trim();
  if (!q) return NextResponse.json({ ok: false, error: "Empty question" }, { status: 400 });

  const tokens = q.toLowerCase().split(/\W+/).filter(Boolean);
  const scored = kb.map((e) => {
    const hay = (e.title + " " + e.tags.join(" ") + " " + e.body).toLowerCase();
    let score = 0;
    for (const t of tokens) {
      if (t.length < 3) continue;
      if (hay.includes(t)) score += 1;
    }
    return { e, score };
  }).sort((a,b)=>b.score-a.score);

  const best = scored[0];
  if (!best || best.score === 0) {
    return NextResponse.json({
      ok: true,
      answer:
        "I can help with questions about the Victory Pointe initiative, the 11 stations, sponsorships, housing/stabilization costs, and how to support. " +
        "Try asking: 'What is the Victory Pointe initiative?' or 'How does sponsorship work?'"
    });
  }

  const answer = `${best.e.title}\n\n${best.e.body}\n\nIf you want, I can also point you to the relevant page (Victory Pointe, Sponsor, Get Help, or Letters).`;
  return NextResponse.json({ ok: true, answer });
}
