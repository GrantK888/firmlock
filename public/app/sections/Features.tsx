import {
  Building2,
  FileSignature,
  ListChecks,
  CreditCard,
  FileBarChart,
  MessagesSquare,
  Sparkles,
  Smartphone,
  LucideIcon,
} from "lucide-react";
import SectionIntro from "../components/SectionIntro";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    icon: Building2,
    title: "Branded client portals",
    body: "Each client gets a private workspace with your firm's logo, colors, tagline, and custom domain. No FirmLock branding, no \"powered by.\"",
  },
  {
    icon: FileSignature,
    title: "Proposals & e-signatures",
    body: "Send legally signable proposals with expiry dates and status tracking. Convert accepted proposals into active clients in one click.",
  },
  {
    icon: ListChecks,
    title: "Tasks & onboarding",
    body: "Reusable onboarding templates, task and document requests, configurable reminder schedules. New clients are productive on day one.",
  },
  {
    icon: CreditCard,
    title: "Invoicing & payments",
    body: "Branded invoices, recurring billing, online card payments via Stripe. Five billing models: retainer, hourly, project, milestone, retainer + overage.",
  },
  {
    icon: FileBarChart,
    title: "Monthly reports",
    body: "Auto-populated from real activity — tasks, hours, files, invoices. AI drafts the executive summary. You review, publish, get read-receipts.",
  },
  {
    icon: MessagesSquare,
    title: "In-portal messaging",
    body: "Threaded conversations with file attachments. Email notifications on new messages and uploads. The end of \"checking my inbox for that one thread.\"",
  },
  {
    icon: Sparkles,
    title: "AI workflows",
    body: "Report writer, proposal generator, invoice line-item builder, client health insights, email template generator. Real time saved on real work.",
  },
  {
    icon: Smartphone,
    title: "Mobile & PWA",
    body: "Installable on iOS and Android. Push notifications, offline caching, pull-to-refresh. Your practice runs from your pocket.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-[96px] bg-paper">
      <div className="container-x">
        <SectionIntro
          overline="What's inside"
          title="Eight capabilities. One platform."
          lead="Everything an independent practice needs to run client work end-to-end. Nothing you'd find in a 50-person agency tool."
        />

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-7 bg-white border border-slate-200 rounded-card transition-all duration-200 hover:border-action-light hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-[10px] bg-action-soft text-action flex items-center justify-center mb-5">
                <f.icon className="w-[22px] h-[22px]" strokeWidth={1.8} />
              </div>
              <h3 className="font-serif font-bold text-[18px] text-navy-900 mb-2.5 tracking-tight">
                {f.title}
              </h3>
              <p className="text-[14px] text-slate-600 leading-[1.6]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
