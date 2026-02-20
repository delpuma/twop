
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.fullName || !body?.phone || !body?.isHomeless || !body?.urgentMedical) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  const sb = supabaseServer();
  const needs = Array.isArray(body.needs) ? body.needs.map(String) : [];
  const { error } = await sb.from("intake_requests").insert({
    full_name: String(body.fullName),
    email: String(body.email || ""),
    phone: String(body.phone),
    branch: String(body.branch || ""),
    needs,
    is_homeless: String(body.isHomeless),
    urgent_medical: String(body.urgentMedical),
    location: String(body.location || ""),
    notes: String(body.notes || "")
  });
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
