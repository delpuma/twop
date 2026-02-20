import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.orgName || !body?.contact || !body?.email || !body?.interest) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  const sb = supabaseServer();
  const { error } = await sb.from("sponsor_leads").insert({
    org_name: String(body.orgName),
    contact_name: String(body.contact),
    email: String(body.email),
    phone: String(body.phone || ""),
    interest: String(body.interest),
    pledged_amount: Number(body.pledgedAmount || 0),
    message: String(body.message || "")
  });
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  await sendEmail(
    `New Sponsor Interest: ${body.orgName}`,
    `Org: ${body.orgName}\nContact: ${body.contact}\nEmail: ${body.email}\nPhone: ${body.phone || "—"}\nInterest: ${body.interest}\nPledge: $${body.pledgedAmount || 0}\n\n${body.message || ""}`
  ).catch(() => {});
  return NextResponse.json({ ok: true });
}
