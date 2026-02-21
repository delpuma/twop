export default function EventCard2({ day, title, emoji, description }: { day: string; title: string; emoji: string; description: string }) {
  return (
    <div className="group relative rounded-2xl bg-[#1a2416] border border-white/10 p-6 overflow-hidden hover:border-amber-400/40 transition-all duration-300">
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-amber-500/5 group-hover:bg-amber-500/10 transition-all duration-300" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{emoji}</span>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1">{day}</span>
        </div>
        <div className="font-bold text-white text-lg mb-2">{title}</div>
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
