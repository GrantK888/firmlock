import { X, Check } from 'lucide-react';
import styles from './Positioning.module.css';

const COLS = [
  {
    side: 'left' as const,
    label: 'What you\'re using now',
    title: 'Free & unprofessional',
    items: [
      'Shared Google Drive folders',
      'Email threads with attachments',
      'Venmo, Zelle, or paper invoices',
      'No retainer tracking',
      'Undermines your rate',
    ],
  },
  {
    side: 'featured' as const,
    label: 'FirmLock',
    title: 'Premium & practical',
    items: [
      'White-labeled on your domain',
      'Contracts, deliverables, invoices in one place',
      'Retainer hours tracked automatically',
      'Stripe payments built in',
      'Justifies your hourly rate',
    ],
  },
  {
    side: 'right' as const,
    label: 'What the big firms use',
    title: 'Overbuilt & expensive',
    items: [
      '$400+ per user, per month',
      'Weeks of onboarding',
      'Built for 50-person teams',
      'Resource planning you don\'t need',
      'Feels like enterprise software',
    ],
  },
];

export default function Positioning() {
  return (
    <section className="section" id="positioning">
      <div className="container">
        <div className="section-intro" data-reveal>
          <span className="overline">The gap in the market</span>
          <h2 className="serif">You&rsquo;ve outgrown the free stuff. You don&rsquo;t need enterprise.</h2>
          <p className="lead">
            Most consultants cobble together Google Drive, Gmail, and Venmo — or pay $400/month
            for platforms built for 50-person agencies. There&rsquo;s been nothing in between. Until now.
          </p>
        </div>

        <div className={styles.grid}>
          {COLS.map((col, i) => (
            <div
              key={col.side}
              className={`${styles.card} ${col.side === 'featured' ? styles.featured : styles.muted}`}
              data-reveal
              data-reveal-delay={String(i * 100) as any}
            >
              <div className={styles.cardLabel}>{col.label}</div>
              <h3 className={`${styles.cardTitle} serif`}>{col.title}</h3>
              <ul className={styles.list}>
                {col.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {col.side === 'featured' ? (
                      <Check size={15} color="var(--blue-400)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                    ) : (
                      <X size={15} color="var(--red)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
