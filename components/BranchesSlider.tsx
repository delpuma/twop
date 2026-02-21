import Image from "next/image";

const branches = [
  { src: "/images/branches/army.png",       alt: "U.S. Army" },
  { src: "/images/branches/navy.png",       alt: "U.S. Navy" },
  { src: "/images/branches/marines.png",    alt: "U.S. Marines" },
  { src: "/images/branches/airforce.png",   alt: "U.S. Air Force" },
  { src: "/images/branches/spaceforce.png", alt: "U.S. Space Force" },
];

export default function BranchesSlider() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-8">
      <p className="text-center text-xs uppercase tracking-widest text-slate-400 mb-6">
        Serving all who served
      </p>
      <div className="grid grid-cols-5 gap-8 max-w-3xl mx-auto px-6">
        {branches.map((b) => (
          <div key={b.alt} className="flex items-center justify-center">
            <Image src={b.src} alt={b.alt} width={120} height={60} className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        ))}
      </div>
    </section>
  );
}
