
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

function csvEscape(v: any) {
  const s = String(v ?? "");
  return `"${s.replaceAll('"', '""')}"`;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const key = url.searchParams.get("key");
  const type = url.searchParams.get("type");

  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!type) return NextResponse.json({ ok: false, error: "Missing type" }, { status: 400 });

  const sb = supabaseServer();

  const map: Record<string, { table: string; cols: string[] }> = {
    signatures: { table: "signatures", cols: ["created_at","full_name","email","zip","is_resident","comment","source"] },
    sponsors: { table: "sponsor_leads", cols: ["created_at","org_name","contact_name","email","phone","interest","pledged_amount","message"] },
    volunteers: { table: "volunteers", cols: ["created_at","full_name","email","phone","interests","availability"] },
    contacts: { table: "contact_messages", cols: ["created_at","full_name","email","topic","message"] },
    intake: { table: "intake_requests", cols: ["created_at","full_name","email","phone","branch","needs","is_homeless","urgent_medical","location","notes"] },
    letters: { table: "letters", cols: ["created_at","org_name","contact_name","email","file_url"] },
    newsletter: { table: "newsletter_subscribers", cols: ["created_at","email","first_name","source","is_active"] }
  };

  const m = map[type];
  if (!m) return NextResponse.json({ ok: false, error: "Invalid type" }, { status: 400 });

  const { data, error } = await sb.from(m.table).select(m.cols.join(",")).order("created_at", { ascending: false });
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });

  const header = m.cols.join(",");
  const lines = [header];
  for (const row of (data ?? [])) {
    lines.push(m.cols.map((c) => csvEscape((row as any)[c])).join(","));
  }
  const csv = lines.join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename=${type}.csv`
    }
  });
}
