import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'outline-light';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
}

function cls(variant: Variant, size: Size) {
  return [styles.btn, styles[variant], styles[size]].join(' ');
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={`${cls(variant, size)} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({ variant = 'primary', size = 'md', className = '', children, ...props }: LinkButtonProps) {
  return (
    <a className={`${cls(variant, size)} ${className}`} {...props}>
      {children}
    </a>
  );
}
