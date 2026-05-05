import {
  Sparkles,
  FileText,
  FileSignature,
  Receipt,
  Activity,
  Mail,
  LucideIcon,
} from "lucide-react";

export default function SplitFeature() {
  return (
    <section id="how" className="py-24 md:py-[96px]">
      <div className="container-x grid md:grid-cols-2 gap-20 items-center">
        {/* Visual — AI report draft */}
        <div className="relative bg-navy-900 rounded-card p-10 overflow-hidden min-h-[480px] flex items-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top right, rgba(59,130,246,.18), transparent 60%)",
            }}
          />
          <div className="relative bg-white rounded-[12px] p-7 w-full shadow-2xl">
            <div className="flex justify-between items-start pb-5 border-b border-slate-100 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-action-soft text-action text-[10px] font-semibold uppercase tracking-wider">
                    <Sparkles className="w-2.5 h-2.5" strokeWidth={2.2} />
                    AI draft
                  </span>
                </div>
                <div className="font-serif font-bold text-[17px] text-navy-900">
                  Northbrook Capital — November
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Generated from 41 activity events · 2.3 sec
                </div>
              </div>
            </div>

            <p className="text-[13px] text-slate-700 leading-[1.6] mb-4">
              <strong className="text-navy-900">Strong month overall.</strong>{" "}
              Closed the Q4 budget review two weeks ahead of plan and presented
              the cash-runway model to the board on Nov 14. Retainer hours
              tracking at 77% with two weeks left — comfortably under cap.
            </p>
            <p className="text-[13px] text-slate-700 leading-[1.6]">
              December focus: vendor consolidation analysis (per board
              direction) and FY27 planning kickoff in week two.
            </p>

            <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-3 gap-3">
              <MiniStat label="Tasks closed" value="14" />
              <MiniStat label="Hours logged" value="18.5" />
              <MiniStat label="Files shared" value="9" />
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="text-overline font-semibold uppercase text-action">
            AI workflows
          </span>
          <h2 className="font-serif font-bold text-h1 text-navy-900 mt-3 mb-5 tracking-tight leading-[1.15]">
            The busywork writes itself.
          </h2>
          <p className="text-[18px] text-slate-600 leading-[1.6] mb-7">
            Five AI tools, built into the workflows you already use. Trained on
            your real client data, not generic templates. You stay in control —
            FirmLock just gets you to the first draft 90% faster.
          </p>
          <ul className="flex flex-col gap-3.5">
            <Bullet
              icon={FileText}
              title="Report writer."
              body="Drafts your monthly executive summaries from real activity data — tasks, hours, files, invoices."
            />
            <Bullet
              icon={FileSignature}
              title="Proposal generator."
              body="Turn a paragraph brief into a full, send-ready proposal with scope, terms, and pricing."
            />
            <Bullet
              icon={Receipt}
              title="Invoice line-item builder."
              body="Describe the work in plain English. Get itemized billing that matches the engagement."
            />
            <Bullet
              icon={Activity}
              title="Client health insights."
              body="Surfaces at-risk accounts and priority follow-ups before they become problems."
            />
            <Bullet
              icon={Mail}
              title="Email template generator."
              body="Branded, on-tone email templates for any trigger event. Edit once, automate forever."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="font-serif font-bold text-[18px] text-navy-900 leading-none">
        {value}
      </div>
      <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1 font-semibold">
        {label}
      </div>
    </div>
  );
}

function Bullet({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-3 text-[15px] text-slate-700 leading-[1.55]">
      <Icon
        className="flex-shrink-0 mt-0.5 w-5 h-5 text-action"
        strokeWidth={1.8}
      />
      <span>
        <strong className="text-navy-900 font-semibold">{title}</strong> {body}
      </span>
    </li>
  );
}
