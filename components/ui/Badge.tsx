import styles from './Badge.module.css';

type Status =
  | 'on-track' | 'paid' | 'healthy' | 'completed'
  | 'pending'  | 'attention'
  | 'at-risk'  | 'overdue'
  | 'active'   | 'in-progress'
  | 'paused'   | 'draft'   | 'upcoming';

interface BadgeProps {
  status: Status;
  label?: string;
}

const CONFIGS: Record<Status, { cls: string; text: string }> = {
  'on-track':    { cls: 'green',  text: 'On Track' },
  'paid':        { cls: 'green',  text: 'Paid' },
  'healthy':     { cls: 'green',  text: 'Healthy' },
  'completed':   { cls: 'green',  text: 'Completed' },
  'pending':     { cls: 'amber',  text: 'Pending' },
  'attention':   { cls: 'amber',  text: 'Needs Attention' },
  'at-risk':     { cls: 'red',    text: 'At Risk' },
  'overdue':     { cls: 'red',    text: 'Overdue' },
  'active':      { cls: 'blue',   text: 'Active' },
  'in-progress': { cls: 'blue',   text: 'In Progress' },
  'paused':      { cls: 'gray',   text: 'Paused' },
  'draft':       { cls: 'gray',   text: 'Draft' },
  'upcoming':    { cls: 'gray',   text: 'Upcoming' },
};

export default function Badge({ status, label }: BadgeProps) {
  const cfg = CONFIGS[status];
  return (
    <span className={`${styles.badge} ${styles[cfg.cls]}`}>
      <span className={styles.dot} />
      {label ?? cfg.text}
    </span>
  );
}
