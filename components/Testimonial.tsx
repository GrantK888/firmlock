import styles from './Testimonial.module.css';

const STATS = [
  { number: '3.2×', desc: 'Faster invoice payment' },
  { number: '94%',  desc: 'Retainer utilization visibility' },
  { number: '$0',   desc: 'Held in escrow, ever' },
  { number: '12min',desc: 'Average time to launch' },
];

export default function Testimonial() {
  return (
    <section className={`section section-navy ${styles.wrap}`}>
      <div className="container">
        <div className={styles.inner} data-reveal>
          <div className={styles.quoteMark}>&ldquo;</div>
          <blockquote className={`${styles.quote} serif`}>
            Before FirmLock, I was emailing contracts, Venmo-ing for retainers,
            and dropping files in shared Drive folders. Clients paying me $250 an
            hour were getting a Dropbox link. Now they get a portal with my logo
            at the top. It changed how they see my practice.
          </blockquote>
          <div className={styles.author}>
            <div className={styles.avatar}>EH</div>
            <div>
              <div className={styles.authorName}>Elena Hartwell</div>
              <div className={styles.authorTitle}>Fractional CMO · Meridian Growth Partners</div>
            </div>
          </div>
        </div>

        <div className={styles.statsStrip} data-reveal data-reveal-delay="100">
          {STATS.map(({ number, desc }) => (
            <div key={desc} className={styles.statItem}>
              <div className={`${styles.statNumber} serif`}>{number}</div>
              <div className={styles.statDesc}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
