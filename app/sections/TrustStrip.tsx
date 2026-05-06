const logos = [
  { name: "Meridian", style: "serif" },
  { name: "NORTHBROOK", style: "sans" },
  { name: "Hatfield & Co.", style: "serif" },
  { name: "ATELIER 9", style: "sans" },
  { name: "Bayfront", style: "serif" },
];

export default function TrustStrip() {
  return (
    <div className="py-12 border-t border-b border-slate-200 bg-slate-50">
      <div className="container-x flex items-center justify-between gap-10 flex-wrap">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-[0.1em]">
          Trusted by independent practitioners at
        </div>
        <div className="flex gap-12 flex-wrap items-center">
          {logos.map((l) => (
            <div
              key={l.name}
              className={
                l.style === "serif"
                  ? "font-serif font-bold text-[18px] text-slate-600 tracking-tight opacity-75"
                  : "font-sans font-bold tracking-[0.08em] uppercase text-[13px] text-slate-600 opacity-75"
              }
            >
              {l.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
