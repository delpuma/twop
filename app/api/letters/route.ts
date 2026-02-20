
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const sb = supabaseServer();
  const form = await req.formData();
  const orgName = String(form.get("orgName") || "");
  const contact = String(form.get("contact") || "");
  const email = String(form.get("email") || "");
  const file = form.get("file");

  if (!orgName || !contact || !email || !(file instanceof File)) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const key = `${Date.now()}_${safeName}`;

  const upload = await sb.storage.from("letters").upload(key, bytes, {
    contentType: file.type || "application/octet-stream",
    upsert: false
  });

  if (upload.error) {
    return NextResponse.json({ ok: false, error: upload.error.message }, { status: 500 });
  }

  const { data: urlData } = sb.storage.from("letters").getPublicUrl(key);

  const { error } = await sb.from("letters").insert({
    org_name: orgName,
    contact_name: contact,
    email,
    file_path: key,
    file_url: urlData?.publicUrl || ""
  });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
