type Props = {
  overline: string;
  title: string;
  lead?: string;
};

export default function SectionIntro({ overline, title, lead }: Props) {
  return (
    <div className="max-w-[720px] mx-auto mb-16 text-center">
      <span className="inline-block mb-3 text-overline font-semibold uppercase text-action">
        {overline}
      </span>
      <h2 className="text-h2 md:text-[clamp(32px,4vw,44px)] font-serif font-bold text-navy-900 mb-4 tracking-tight leading-[1.15]">
        {title}
      </h2>
      {lead && (
        <p className="text-[18px] leading-[1.6] text-slate-600">{lead}</p>
      )}
    </div>
  );
}
