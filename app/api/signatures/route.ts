
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.fullName || !body?.email || !body?.zip) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const sb = supabaseServer();

  // basic dedupe: same email within 24 hours
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const { data: existing } = await sb
    .from("signatures")
    .select("id")
    .eq("email", String(body.email))
    .gte("created_at", since)
    .limit(1);

  if (existing && existing.length > 0) {
    return NextResponse.json({ ok: true, deduped: true });
  }

  const { error } = await sb.from("signatures").insert({
    full_name: String(body.fullName),
    email: String(body.email),
    zip: String(body.zip),
    is_resident: Boolean(body.isResident),
    comment: String(body.comment || ""),
    source: "victory-pointe"
  });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
