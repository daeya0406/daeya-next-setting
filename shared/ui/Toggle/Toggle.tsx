import { forwardRef } from 'react';
import { toggleStyles } from './Toggle.styles';
import type { PropsWithClassName } from '@/shared/types';

export interface ToggleProps
  extends
    PropsWithClassName,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  description?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, label, description, error, size = 'md', ...props }, ref) => {
    const styles = toggleStyles({ size, error: !!error });

    return (
      <div className={styles.container({ className })}>
        <div className={styles.wrapper()}>
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            className={styles.track()}
            {...props}
          />
        </div>
        {(label || description) && (
          <div className={styles.labelContainer()}>
            {label && <label className={styles.label()}>{label}</label>}
            {description && (
              <span className={styles.description()}>{description}</span>
            )}
            {error && <span className="text-xs text-red-600">{error}</span>}
          </div>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';
