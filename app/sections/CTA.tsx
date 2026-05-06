import { ArrowRight, Check } from "lucide-react";
import Button from "../components/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white py-[120px]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(59,130,246,.15), transparent 50%), radial-gradient(circle at 80% 50%, rgba(176,196,222,.08), transparent 50%)",
        }}
      />

      <div className="container-x relative text-center max-w-[680px] mx-auto">
        <h2 className="font-serif font-bold text-[clamp(36px,4.5vw,52px)] leading-[1.1] text-white mb-5 tracking-tight">
          Software that works the way a Partner thinks.
        </h2>
        <p className="text-[18px] text-silver mb-10 leading-[1.55]">
          Set up your first client portal in under 15 minutes. No credit card
          required. No setup fee. No platform cut on your paid tier.
        </p>

       <div className="flex justify-center">
  <Button href="https://firmlock.app/onboarding" variant="primary" size="lg">
    Start free
    <ArrowRight className="w-4 h-4" />
  </Button>
</div>

        <div className="mt-6 flex gap-7 justify-center flex-wrap text-[13px] text-slate-accent">
          <Mini>14-day Pro trial</Mini>
          <Mini>Cancel anytime</Mini>
          <Mini>AI workflows included</Mini>
        </div>
      </div>
    </section>
  );
}

function Mini({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Check className="w-3.5 h-3.5 text-brand-emerald" />
      {children}
    </span>
  );
}
