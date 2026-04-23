import { ArrowRight, Check } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={`section section-navy ${styles.wrap}`}>
      <div className="container">
        <div className={styles.inner} data-reveal>
          <h2 className={`${styles.heading} serif`}>
            Software that works the way a Partner thinks.
          </h2>
          <p className={styles.sub}>
            Set up your first client portal in under 15 minutes. No credit card
            required. No setup fee. No platform cut on your paid tier.
          </p>
          <div className={styles.ctas}>
            <LinkButton href="#" variant="primary" size="lg">
              Start free
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton href="#" variant="outline-light" size="lg">
              Book a walkthrough
            </LinkButton>
          </div>
          <div className={styles.meta}>
            {['14-day Practice trial', 'Cancel anytime', 'SOC 2 in progress'].map((t) => (
              <span key={t} className={styles.metaItem}>
                <Check size={13} color="var(--emerald)" strokeWidth={2.5} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
