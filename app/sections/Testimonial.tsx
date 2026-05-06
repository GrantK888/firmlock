const stats = [
  { number: "8", desc: "Capabilities in one platform" },
  { number: "5", desc: "AI workflows built in" },
  { number: "12min", desc: "Average time to launch" },
  { number: "$0", desc: "Setup cost or platform cut" },
];

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white py-24 md:py-[96px]">
      <div
        className="absolute -top-[20%] -right-[10%] w-[60%] h-[140%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,.12), transparent 60%)",
        }}
      />

      <div className="container-x relative">
        <div className="max-w-[820px] mx-auto text-center">
          <div className="font-serif text-[80px] leading-[0.5] text-action-light mb-6 italic">
            &ldquo;
          </div>
          <blockquote className="font-serif italic font-normal text-[clamp(22px,2.6vw,30px)] leading-[1.45] text-white mb-9 tracking-tight">
            I used to spend my Sunday nights writing monthly reports for five
            clients. With FirmLock, the AI drafts each one from real activity
            data and I&apos;m editing instead of writing from scratch. Three
            hours back every month, and the reports are sharper than what I
            was producing alone.
          </blockquote>
          <div className="flex items-center justify-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-500 to-action flex items-center justify-center font-serif font-bold text-base text-white">
              EH
            </div>
            <div className="text-left">
              <div className="font-semibold text-[15px] text-white">
                Elena Hartwell
              </div>
              <div className="text-[13px] text-silver">
                Fractional CMO · Meridian Growth Partners
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-navy-700">
          {stats.map((s) => (
            <div key={s.desc} className="text-center">
              <div className="font-serif font-bold text-[clamp(32px,4vw,44px)] text-white leading-none tracking-tight mb-2">
                {s.number}
              </div>
              <div className="text-xs text-silver uppercase tracking-[0.08em] font-semibold">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
