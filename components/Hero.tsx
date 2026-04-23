import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        {/* Left copy */}
        <div>
          <div className={styles.eyebrow} data-reveal>
            <span className={styles.eyebrowDot} />
            Now in early access
          </div>

          <h1 className={`${styles.headline} serif`} data-reveal data-reveal-delay="100">
            The client portal for consultants who{' '}
            <em>charge what they&rsquo;re worth.</em>
          </h1>

          <p className={`${styles.sub} lead`} data-reveal data-reveal-delay="200">
            FirmLock gives independent consultants and small agencies a
            white-labeled portal for contracts, retainers, deliverables, and
            payments. Built for practitioners who&rsquo;ve outgrown email threads
            and refuse to pay for Accelo.
          </p>

          <div className={styles.ctas} data-reveal data-reveal-delay="300">
            <LinkButton href="#pricing" variant="primary" size="lg">
              Start free
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton href="#how-it-works" variant="secondary" size="lg">
              See how it works
            </LinkButton>
          </div>

          <div className={styles.meta} data-reveal data-reveal-delay="400">
            {['No credit card required', 'Your own domain', 'Stripe Connect built in'].map((t) => (
              <span key={t} className={styles.metaItem}>
                <Check size={15} color="var(--emerald)" strokeWidth={2.5} />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Portal preview */}
        <div className={styles.preview} data-reveal data-reveal-delay="200">
          <div className={styles.chrome}>
            <span className={styles.dot} style={{ background: '#FF5F57' }} />
            <span className={styles.dot} style={{ background: '#FEBC2E' }} />
            <span className={styles.dot} style={{ background: '#28C840' }} />
            <span className={styles.url}>clients.meridian-partners.com</span>
          </div>

          <div className={styles.portalBody}>
            <div className={styles.portalHeader}>
              <div>
                <h4 className={`${styles.portalTitle} serif`}>Northbrook Capital</h4>
                <p className={styles.portalSub}>Q4 fractional CFO engagement</p>
              </div>
              <Badge status="on-track" />
            </div>

            <div className={styles.statGrid}>
              <div className={styles.stat}>
                <div className={styles.statLabel}>Retainer used</div>
                <div className={styles.statValue}>
                  18.5<span className={styles.statUnit}>/24h</span>
                </div>
                <div className={styles.bar}>
                  <div className={styles.barFill} style={{ width: '77%', background: 'var(--amber)' }} />
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statLabel}>Invoiced</div>
                <div className={styles.statValue}>$12,400</div>
                <div className={styles.statSub}>Paid Nov 3</div>
              </div>
            </div>

            <div className={styles.list}>
              {[
                { icon: '📄', label: 'Board memo — November', right: 'Delivered' },
                { icon: '📅', label: 'Strategy review', right: 'Nov 14, 2:00 PM' },
                { icon: '🧾', label: 'Invoice #0089', right: 'Pending' },
              ].map(({ icon, label, right }, i) => (
                <div key={i} className={styles.listItem}>
                  <span className={styles.listLabel}>{label}</span>
                  <span className={styles.listRight}>{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
