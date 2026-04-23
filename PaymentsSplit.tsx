import { Zap, ShieldCheck, Banknote, ReceiptText } from 'lucide-react';
import styles from './PaymentsSplit.module.css';

const BULLETS = [
  { Icon: Zap,         text: '<strong>Two-minute setup.</strong> Link your existing Stripe account or create a new one in the flow.' },
  { Icon: ShieldCheck, text: '<strong>Funds never touch us.</strong> Payments go from client card to your Stripe balance. Full stop.' },
  { Icon: Banknote,    text: '<strong>ACH, card, or wire.</strong> Let clients pay the way that works for them. You keep the margin.' },
  { Icon: ReceiptText, text: '<strong>Automatic follow-up.</strong> Polite, professional invoice reminders that sound like you wrote them.' },
];

export default function PaymentsSplit() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className={styles.split}>
          {/* Visual */}
          <div className={styles.visual} data-reveal>
            <div className={styles.invoiceCard}>
              <div className={styles.invoiceHeader}>
                <div>
                  <div className={`${styles.invoiceNum} serif`}>Invoice #0089</div>
                  <div className={styles.invoiceDate}>Issued Nov 3, 2026 · Due Nov 17</div>
                </div>
                <div className={`${styles.invoiceAmount} serif`}>$12,400</div>
              </div>
              {[
                { label: 'Q4 fractional CFO retainer', value: '$10,000' },
                { label: 'Board advisory hours (4 × $600)', value: '$2,400' },
              ].map((row) => (
                <div key={row.label} className={styles.invoiceRow}>
                  <span className={styles.rowLabel}>{row.label}</span>
                  <span className={styles.rowValue}>{row.value}</span>
                </div>
              ))}
              <div className={styles.invoiceFooter}>
                <span className={styles.footerNote}>Paid via ACH · Nov 3, 2:14 PM</span>
                <span className={styles.paidBadge}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Paid
                </span>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div data-reveal data-reveal-delay="100">
            <span className="overline">Get paid</span>
            <h2 className={`${styles.heading} serif`}>
              Your Stripe account. Your money. Your timing.
            </h2>
            <p className={`lead ${styles.leadText}`}>
              FirmLock is the only platform in its category that uses Stripe Connect Standard — meaning
              you connect your own Stripe account and funds flow directly to you. We never hold your
              money, never delay payouts, and never take a cut of paid-plan invoices.
            </p>
            <ul className={styles.bullets}>
              {BULLETS.map(({ Icon, text }) => (
                <li key={text} className={styles.bullet}>
                  <Icon size={18} strokeWidth={1.8} color="var(--blue-500)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
