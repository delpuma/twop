
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.email) return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });

  const sb = supabaseServer();
  const { error } = await sb.from("newsletter_subscribers").upsert(
    { email: String(body.email).toLowerCase().trim(), first_name: String(body.firstName || ""), source: String(body.source || "popup"), is_active: true },
    { onConflict: "email" }
  );

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
