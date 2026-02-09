import { tv } from 'tailwind-variants';

export const textareaStyles = tv({
  slots: {
    container: 'w-full',
    label: 'mb-2 block text-sm font-medium text-gray-900',
    wrapper: 'relative',
    textarea:
      'w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-all placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50',
    counter: 'mt-1 text-right text-xs text-gray-500',
    error: 'mt-1 text-xs text-red-600',
  },
  variants: {
    size: {
      sm: {
        textarea: 'min-h-[80px] px-2 py-1.5 text-xs',
      },
      md: {
        textarea: 'min-h-[120px] px-3 py-2 text-sm',
      },
      lg: {
        textarea: 'min-h-[160px] px-4 py-3 text-base',
      },
    },
    hasError: {
      true: {
        textarea: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      },
    },
    resize: {
      none: {
        textarea: 'resize-none',
      },
      vertical: {
        textarea: 'resize-y',
      },
      horizontal: {
        textarea: 'resize-x',
      },
      both: {
        textarea: 'resize',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    resize: 'vertical',
  },
});
