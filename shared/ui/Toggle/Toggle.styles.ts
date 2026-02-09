import { tv } from 'tailwind-variants';

export const toggleStyles = tv({
  slots: {
    container: 'flex items-center gap-3',
    wrapper: 'relative inline-flex items-center',
    track:
      'peer h-6 w-11 cursor-pointer appearance-none rounded-full bg-gray-200 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-all checked:bg-primary checked:after:translate-x-5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    labelContainer: 'flex flex-col',
    label: 'cursor-pointer select-none text-sm font-medium',
    description: 'text-xs text-gray-500',
  },
  variants: {
    size: {
      sm: {
        track: 'h-5 w-9 after:h-4 after:w-4 checked:after:translate-x-4',
        label: 'text-xs',
      },
      md: {
        track: 'h-6 w-11 after:h-5 after:w-5 checked:after:translate-x-5',
        label: 'text-sm',
      },
      lg: {
        track: 'h-7 w-14 after:h-6 after:w-6 checked:after:translate-x-7',
        label: 'text-base',
      },
    },
    error: {
      true: {
        track: 'bg-red-100 checked:bg-red-500',
        label: 'text-red-600',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
