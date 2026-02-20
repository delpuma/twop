import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.fullName || !body?.email || !body?.topic || !body?.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  const sb = supabaseServer();
  const { error } = await sb.from("contact_messages").insert({
    full_name: String(body.fullName),
    email: String(body.email),
    topic: String(body.topic),
    message: String(body.message)
  });
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  await sendEmail(
    `New Contact: ${body.topic}`,
    `Name: ${body.fullName}\nEmail: ${body.email}\nTopic: ${body.topic}\n\n${body.message}`
  ).catch(() => {});
  return NextResponse.json({ ok: true });
}
