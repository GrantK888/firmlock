import styles from './TrustStrip.module.css';

const LOGOS = [
  { name: 'Meridian',      style: 'serif' },
  { name: 'NORTHBROOK',    style: 'sans'  },
  { name: 'Hatfield & Co.',style: 'serif' },
  { name: 'ATELIER 9',     style: 'sans'  },
  { name: 'Bayfront',      style: 'serif' },
];

export default function TrustStrip() {
  return (
    <div className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>Trusted by independent practitioners at</span>
        <div className={styles.logos}>
          {LOGOS.map((l) => (
            <span
              key={l.name}
              className={l.style === 'serif' ? styles.logoSerif : styles.logoSans}
            >
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
