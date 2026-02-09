import { forwardRef } from 'react';
import { radioStyles, radioGroupStyles } from './Radio.styles';
import type { PropsWithClassName } from '@/shared/types';

export interface RadioProps
  extends
    PropsWithClassName,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  description?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, error, size = 'md', ...props }, ref) => {
    const styles = radioStyles({ size, error: !!error });

    return (
      <div className={styles.container({ className })}>
        <div className={styles.wrapper()}>
          <input ref={ref} type="radio" className={styles.input()} {...props} />
          <div className={styles.dot()} />
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

Radio.displayName = 'Radio';

export interface RadioGroupProps extends PropsWithClassName {
  children: React.ReactNode;
  label?: string;
  error?: string;
  orientation?: 'vertical' | 'horizontal';
}

export const RadioGroup = ({
  children,
  label,
  error,
  orientation = 'vertical',
  className,
}: RadioGroupProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-900">{label}</label>
      )}
      <div className={radioGroupStyles({ orientation, className })}>
        {children}
      </div>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
};
