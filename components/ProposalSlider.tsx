"use client";
import { useState } from "react";
import Image from "next/image";

const slides = [
  "/images/proposal/VictoryPointeTWOP.jpg",
  "/images/proposal/VictoryPointeTWOP (1).jpg",
  "/images/proposal/VictoryPointeTWOP (2).jpg",
  "/images/proposal/VictoryPointeTWOP (3).jpg",
  "/images/proposal/VictoryPointeTWOP (4).jpg",
  "/images/proposal/VictoryPointeTWOP (5).jpg",
  "/images/proposal/VictoryPointeTWOP (6).jpg",
  "/images/proposal/VictoryPointeTWOP (7).jpg",
  "/images/proposal/VictoryPointeTWOP (8).jpg",
  "/images/proposal/VictoryPointeTWOP (9).jpg",
];

export default function ProposalSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full bg-slate-900">
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        <Image
          src={slides[current]}
          alt={`Victory Pointe Proposal Slide ${current + 1}`}
          fill
          className="object-contain"
          priority={current === 0}
        />
      </div>
      
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-8" : "bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}
