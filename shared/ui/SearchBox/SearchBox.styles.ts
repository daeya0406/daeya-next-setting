import { tv } from 'tailwind-variants';

export const searchBoxStyles = tv({
  slots: {
    container: 'relative w-full',
    wrapper: 'relative flex items-center',
    input:
      'w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-10 text-sm transition-all placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50',
    searchIcon: 'absolute left-3 text-gray-400',
    clearButton:
      'absolute right-3 cursor-pointer text-gray-400 transition-colors hover:text-gray-600',
    label: 'mb-2 block text-sm font-medium text-gray-900',
    error: 'mt-1 text-xs text-red-600',
  },
  variants: {
    size: {
      sm: {
        input: 'h-8 py-1 pl-8 pr-8 text-xs',
        searchIcon: 'left-2',
        clearButton: 'right-2',
      },
      md: {
        input: 'h-10 py-2 pl-10 pr-10 text-sm',
        searchIcon: 'left-3',
        clearButton: 'right-3',
      },
      lg: {
        input: 'h-12 py-3 pl-12 pr-12 text-base',
        searchIcon: 'left-4',
        clearButton: 'right-4',
      },
    },
    hasError: {
      true: {
        input: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      },
    },
    fullWidth: {
      true: {
        container: 'w-full',
      },
      false: {
        container: 'w-auto',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    fullWidth: true,
  },
});
