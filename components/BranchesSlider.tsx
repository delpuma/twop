"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const branches = [
  { src: "/images/branches/army.png", alt: "U.S. Army" },
  { src: "/images/branches/navy.png", alt: "U.S. Navy" },
  { src: "/images/branches/marines.png", alt: "U.S. Marines" },
  { src: "/images/branches/airforce.png", alt: "U.S. Air Force" },
];

// Duplicate for seamless loop
const items = [...branches, ...branches];

export default function BranchesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = 0;
    let raf: number;
    const speed = 0.5;
    const half = track.scrollWidth / 2;

    function tick() {
      x += speed;
      if (x >= half) x = 0;
      track!.style.transform = `translateX(-${x}px)`;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-8 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest text-slate-400 mb-6">
        Serving all who served
      </p>
      <div className="relative overflow-hidden">
        <div ref={trackRef} className="flex gap-16 w-max items-center">
          {items.map((b, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center h-16 w-32">
              <Image src={b.src} alt={b.alt} width={120} height={60} className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
