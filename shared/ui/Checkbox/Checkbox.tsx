import { forwardRef } from 'react';
import { Check } from 'lucide-react';
import { checkboxStyles } from './Checkbox.styles';
import type { PropsWithClassName } from '@/shared/types';

export interface CheckboxProps
  extends
    PropsWithClassName,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  description?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, size = 'md', ...props }, ref) => {
    const styles = checkboxStyles({ size, error: !!error });

    return (
      <div className={styles.container({ className })}>
        <div className={styles.wrapper()}>
          <input
            ref={ref}
            type="checkbox"
            className={styles.input()}
            {...props}
          />
          <Check
            className={styles.icon()}
            size={size === 'sm' ? 12 : size === 'lg' ? 16 : 14}
          />
        </div>
        {(label || description) && (
          <div className="flex flex-col">
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

Checkbox.displayName = 'Checkbox';
