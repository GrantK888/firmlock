import { FileText, Calendar, Receipt } from "lucide-react";
import Badge from "./Badge";

export default function PortalPreview() {
  return (
    <div className="relative bg-white border border-slate-200 rounded-card shadow-card overflow-hidden animate-fade-up [animation-delay:0.3s] rotate-[0.3deg]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3.5 bg-slate-50 border-b border-slate-200">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex-1 max-w-[300px] bg-white border border-slate-200 px-3 py-1 rounded text-[11px] text-slate-500 font-mono">
          firmlock.app/meridian-partners
        </div>
      </div>

      {/* Body */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-7">
          <div>
            <h4 className="font-serif font-bold text-[18px] text-navy-900 mb-1 tracking-tight">
              Northbrook Capital
            </h4>
            <p className="text-xs text-slate-500">Q4 fractional CFO engagement</p>
          </div>
          <Badge variant="green" withDot>
            On Track
          </Badge>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="p-4 border border-slate-200 rounded-[10px]">
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Retainer used
            </div>
            <div className="font-serif font-bold text-[22px] text-navy-900 leading-none">
              18.5
              <span className="text-sm text-slate-500 font-sans font-medium">
                /24h
              </span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-2.5">
              <div className="h-full bg-brand-amber rounded-full w-[77%]" />
            </div>
          </div>
          <div className="p-4 border border-slate-200 rounded-[10px]">
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Invoiced
            </div>
            <div className="font-serif font-bold text-[22px] text-navy-900 leading-none">
              $12,400
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Paid Nov 3</div>
          </div>
        </div>

        {/* List */}
        <div className="border-t border-slate-100 pt-4">
          <PortalItem
            icon={<FileText className="w-3.5 h-3.5 text-slate-500" />}
            label="Board memo — November"
            right="Delivered"
          />
          <PortalItem
            icon={<Calendar className="w-3.5 h-3.5 text-slate-500" />}
            label="Strategy review"
            right="Nov 14, 2:00 PM"
          />
          <PortalItem
            icon={<Receipt className="w-3.5 h-3.5 text-slate-500" />}
            label="Invoice #0089"
            right={
              <Badge variant="blue" className="!text-[10px]">
                Pending
              </Badge>
            }
          />
        </div>
      </div>
    </div>
  );
}

function PortalItem({
  icon,
  label,
  right,
}: {
  icon: React.ReactNode;
  label: string;
  right: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0 text-xs">
      <div className="flex items-center gap-2.5 text-slate-700 font-medium">
        {icon}
        {label}
      </div>
      <div className="text-slate-500 text-[11px]">{right}</div>
    </div>
  );
}
