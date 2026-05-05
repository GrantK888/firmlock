import { FileSignature, Rocket, FileBarChart, CreditCard } from "lucide-react";
import SectionIntro from "../components/SectionIntro";

const steps = [
  {
    icon: FileSignature,
    step: "01",
    title: "Send a proposal",
    body: "AI drafts a proposal from your brief. Client e-signs it in their portal. Accepted proposals convert to active engagements with one click.",
  },
  {
    icon: Rocket,
    step: "02",
    title: "Onboard in minutes",
    body: "Apply a reusable onboarding template. Tasks, document requests, and forms route to the client automatically. Reminders escalate on schedule.",
  },
  {
    icon: FileBarChart,
    step: "03",
    title: "Run the engagement",
    body: "Messages, files, hours, and tasks all live in the portal. Monthly reports auto-populate from real activity — AI handles the executive summary.",
  },
  {
    icon: CreditCard,
    step: "04",
    title: "Get paid",
    body: "Branded invoices on retainer, hourly, project, or milestone billing. Stripe-powered card payments. Overdue detection and reminders run themselves.",
  },
];

export default function Workflow() {
  return (
    <section className="py-24 md:py-[96px] bg-white">
      <div className="container-x">
        <SectionIntro
          overline="The lifecycle"
          title="From first proposal to recurring retainer."
          lead="FirmLock covers every stage of a client engagement. No hand-offs between tools. No data falling through the cracks."
        />

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 relative">
          {/* Connector line on desktop */}
          <div
            className="hidden md:block absolute top-[44px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="bg-white border border-slate-200 rounded-card p-7 h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-[88px] h-[88px] rounded-card bg-navy-900 text-white flex items-center justify-center">
                    <s.icon className="w-9 h-9" strokeWidth={1.6} />
                  </div>
                  <span className="font-serif font-bold text-[34px] text-slate-200 leading-none tracking-tight">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-[20px] text-navy-900 mb-2.5 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-[1.6]">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
