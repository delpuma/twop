"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Container from "./Container";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Partners() {
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from("partners")
      .select("*")
      .eq("is_active", true)
      .order("display_order", { ascending: true })
      .then(({ data }) => setPartners(data || []));
  }, []);

  if (partners.length === 0) return null;

  return (
    <section className="py-16 bg-slate-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-2">Our Partners</h2>
        <p className="text-center text-slate-600 mb-12">
          Supporting veterans across the East Coast, from NYC to Clermont, FL
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.website || "#"}
              target={partner.website ? "_blank" : undefined}
              rel={partner.website ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center p-6 bg-white rounded-lg border border-slate-200 hover:border-[#4A5D3F] hover:shadow-md transition-all"
              title={partner.description || partner.name}
            >
              <img
                src={partner.logo_url}
                alt={partner.name}
                className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
