import { badgeStyles } from './Badge.styles';
import type { PropsWithChildren, PropsWithClassName } from '@/shared/types';

export interface BadgeProps extends PropsWithClassName, PropsWithChildren {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
  icon?: React.ReactNode;
}

export const Badge = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  outline = false,
  icon,
}: BadgeProps) => {
  return (
    <span className={badgeStyles({ variant, size, outline, className })}>
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </span>
  );
};
