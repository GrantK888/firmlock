"use client";

import { CheckCircle2 } from "lucide-react";
import Button from "../components/Button";
import SectionIntro from "../components/SectionIntro";

type Plan = {
  tier: string;
  price: number;
  subtext: string;
  desc: string;
  features: string[];
  cta: string;
  ctaVariant: "primary" | "secondary";
  ctaHref?: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    tier: "Free",
    price: 0,
    subtext: "forever",
    desc: "For consultants testing the waters with their first client.",
    features: [
      "1 active client",
      "Branded portal & messaging",
      "Proposals & invoicing",
      "Stripe card payments",
      "Hosted on firmlock.app",
    ],
    cta: "Create free account",
    ctaVariant: "secondary",
  },
  {
    tier: "Practice",
    price: 89,
    subtext: "billed annually ($828/year) — save $240",
    desc: "For established solo consultants running a steady book of business.",
    features: [
      "Up to 15 active clients",
      "Branded portal — your logo, colors, tagline",
      "All five AI workflows",
      "Recurring invoices & retainer tracking",
      "Monthly reports with read-receipts",
      "Automated email templates",
      "Mobile app & push notifications",
    ],
    cta: "Start 14-day trial",
    ctaVariant: "primary",
    featured: true,
  },
  {
    tier: "Firm",
    price: 229,
    subtext: "billed annually ($2,148/year) — save $600",
    desc: "For fractional executives and boutique firms with multiple practitioners.",
    features: [
      "Unlimited clients",
      "Up to 5 team seats (additional seats $29/mo)",
      "Role-based permissions",
      "Shared template library",
      "Weekly digests & satisfaction surveys",
      "Advanced reporting & insights",
      "Dedicated onboarding",
    ],
    cta: "Start 14-day trial",
    ctaVariant: "secondary",
  },
  {
    tier: "Scale",
    price: 459,
    subtext: "billed annually ($3,948/year) — save $1,560",
    desc: "For fractional networks and multi-practitioner firms running institutional client books.",
    features: [
      "Everything in Firm",
      "Unlimited team seats",
      "Sub-accounts for placed practitioners",
      "API access & custom integrations",
      "SSO & advanced security controls",
      "White-label admin console",
      "Priority support & dedicated CSM",
    ],
    cta: "Talk to sales",
    ctaVariant: "secondary",
    ctaHref: "mailto:hello@firmlock.app",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-[96px]">
      <div className="container-x">
        <SectionIntro
          overline="Pricing"
          title="Priced for a serious practice. Built for a serious firm."
          lead="Start free. Upgrade when it pays for itself in the first week. Cancel anytime."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-12">
          {plans.map((plan) => (
            <PlanCard key={plan.tier} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const featured = plan.featured;

  return (
    <div
      className={`relative rounded-card p-10 px-8 flex flex-col transition-colors ${
        featured
          ? "bg-navy-900 text-white border border-navy-900 shadow-card-dark"
          : "bg-white border border-slate-200 hover:border-slate-300"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-action text-white px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em]">
          Most popular
        </span>
      )}

      <div
        className={`text-xs font-semibold uppercase tracking-[0.1em] mb-3 ${
          featured ? "text-action-light" : "text-action"
        }`}
      >
        {plan.tier}
      </div>

      <p
        className={`text-sm mb-7 min-h-[42px] leading-[1.55] ${
          featured ? "text-silver" : "text-slate-500"
        }`}
      >
        {plan.desc}
      </p>

      <div
        className={`mb-7 pb-7 border-b ${
          featured ? "border-navy-700" : "border-slate-200"
        }`}
      >
        <div className="flex items-baseline gap-1 mb-1.5">
          <span
            className={`font-serif font-bold text-[44px] tracking-tight leading-none ${
              featured ? "text-white" : "text-navy-900"
            }`}
          >
            ${plan.price}
          </span>
          <span
            className={`text-sm font-medium ${
              featured ? "text-silver" : "text-slate-500"
            }`}
          >
            /month
          </span>
        </div>
        <p
          className={`text-[13px] leading-[1.5] min-h-[40px] ${
            featured ? "text-silver" : "text-slate-500"
          }`}
        >
          {plan.subtext}
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckCircle2
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                featured ? "text-action-light" : "text-action"
              }`}
            />
            <span
              className={`text-sm leading-[1.5] ${
                featured ? "text-silver" : "text-slate-700"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={plan.ctaHref ?? "https://firmlock.app/get-started"}
        variant={plan.ctaVariant}
        className="w-full"
      >
        {plan.cta}
      </Button>
    </div>
  );
}