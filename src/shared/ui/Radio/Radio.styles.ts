import { tv } from 'tailwind-variants';

export const radioStyles = tv({
  slots: {
    container: 'flex items-center gap-2',
    wrapper: 'relative flex items-center justify-center',
    input:
      'peer h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-300 transition-all checked:border-primary checked:bg-white hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    dot: 'pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100',
    label:
      'cursor-pointer select-none text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
    description: 'text-xs text-gray-500',
  },
  variants: {
    size: {
      sm: {
        input: 'h-4 w-4',
        dot: 'h-2 w-2',
        label: 'text-xs',
      },
      md: {
        input: 'h-5 w-5',
        dot: 'h-2.5 w-2.5',
        label: 'text-sm',
      },
      lg: {
        input: 'h-6 w-6',
        dot: 'h-3 w-3',
        label: 'text-base',
      },
    },
    error: {
      true: {
        input: 'border-red-500 focus:ring-red-500',
        label: 'text-red-600',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const radioGroupStyles = tv({
  base: 'flex flex-col gap-3',
  variants: {
    orientation: {
      vertical: 'flex-col',
      horizontal: 'flex-row flex-wrap',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});
