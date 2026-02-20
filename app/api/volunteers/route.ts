import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.fullName || !body?.email) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  const sb = supabaseServer();
  const { error } = await sb.from("volunteers").insert({
    full_name: String(body.fullName),
    email: String(body.email),
    phone: String(body.phone || ""),
    interests: String(body.interests || ""),
    availability: String(body.availability || "")
  });
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  await sendEmail(
    `New Volunteer: ${body.fullName}`,
    `Name: ${body.fullName}\nEmail: ${body.email}\nPhone: ${body.phone || "—"}\nInterests: ${body.interests || "—"}\nAvailability: ${body.availability || "—"}`
  ).catch(() => {});
  return NextResponse.json({ ok: true });
}
