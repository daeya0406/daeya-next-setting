import { forwardRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { searchBoxStyles } from './SearchBox.styles';
import type { PropsWithClassName } from '@/shared/types';

export interface SearchBoxProps
  extends
    PropsWithClassName,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClear?: () => void;
  showClearButton?: boolean;
}

export const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    {
      className,
      label,
      error,
      size = 'md',
      fullWidth = true,
      onClear,
      showClearButton = true,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState('');
    const currentValue = value !== undefined ? value : internalValue;
    const hasValue = !!currentValue;

    const styles = searchBoxStyles({
      size,
      hasError: !!error,
      fullWidth,
    });

    const handleClear = () => {
      if (onChange) {
        const event = {
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
      setInternalValue('');
      onClear?.();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      } else {
        setInternalValue(e.target.value);
      }
    };

    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;

    return (
      <div className={styles.container({ className })}>
        {label && <label className={styles.label()}>{label}</label>}
        <div className={styles.wrapper()}>
          <Search className={styles.searchIcon()} size={iconSize} />
          <input
            ref={ref}
            type="search"
            className={styles.input()}
            value={currentValue}
            onChange={handleChange}
            {...props}
          />
          {showClearButton && hasValue && (
            <X
              className={styles.clearButton()}
              size={iconSize}
              onClick={handleClear}
            />
          )}
        </div>
        {error && <span className={styles.error()}>{error}</span>}
      </div>
    );
  }
);

SearchBox.displayName = 'SearchBox';
