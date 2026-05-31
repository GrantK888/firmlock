import { ArrowRight, Check } from "lucide-react";
import Button from "../components/Button";
import PortalPreview from "../components/PortalPreview";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-[120px] hero-grid-bg"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 85% 15%, rgba(59,130,246,.06), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 80%, rgba(176,196,222,.12), transparent 60%), #fff",
      }}
    >
      <div className="container-x relative grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-action-soft text-action text-xs font-semibold border border-action/15 mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
            Now in early access
          </div>

          <h1 className="font-serif font-bold text-display text-navy-900 mb-6 animate-fade-up [animation-delay:0.1s]">
            Run your entire client practice from{" "}
            <em className="italic text-navy-500 font-bold">
              one branded portal.
            </em>
          </h1>

          <p className="text-[19px] text-slate-600 max-w-[560px] mb-10 leading-[1.55] animate-fade-up [animation-delay:0.2s]">
            Proposals, onboarding, invoicing, payments, monthly reports, and
            client messaging — all under your firm&apos;s logo. Built for
            independent consultants and boutique firms, with AI-powered
            workflows that handle the busywork.
          </p>

          <div className="flex gap-3 flex-wrap mb-10 animate-fade-up [animation-delay:0.3s]">
            <Button href="https://firmlock.app/get-started" variant="primary" size="lg">
  Start free
  <ArrowRight className="w-4 h-4" />
</Button>
            <Button href="#how" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>

          <div className="flex gap-7 flex-wrap text-[13px] text-slate-500 font-medium animate-fade-up [animation-delay:0.4s]">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-emerald" />
              Free tier, no card required
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-emerald" />
              Your branding
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-emerald" />
              AI workflows included
            </span>
          </div>
        </div>

        <PortalPreview />
      </div>
    </section>
  );
}
