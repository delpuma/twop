
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function GET() {
  const sb = supabaseServer();

  const supporters = await sb.from("signatures").select("*", { count: "exact", head: true });
  const letters = await sb.from("letters").select("*", { count: "exact", head: true });
  const sponsors = await sb.from("sponsor_leads").select("*", { count: "exact", head: true });

  // Sum pledgedAmount for sponsor leads that provided it (pipeline)
  const { data: sponsorRows } = await sb.from("sponsor_leads").select("pledged_amount");
  const pledged = (sponsorRows ?? []).reduce((acc: number, r: any) => acc + (Number(r.pledged_amount) || 0), 0);

  return NextResponse.json({
    ok: true,
    stats: {
      supporters: supporters.count ?? 0,
      letters: letters.count ?? 0,
      sponsors: sponsors.count ?? 0,
      pledged
    }
  });
}
