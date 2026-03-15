import { tv } from 'tailwind-variants';

export const badgeStyles = tv({
  base: 'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
  variants: {
    variant: {
      default: 'bg-gray-100 text-gray-800',
      primary: 'bg-primary/10 text-primary',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
    },
    size: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-0.5 text-xs',
      lg: 'px-3 py-1 text-sm',
    },
    outline: {
      true: 'border',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      outline: true,
      className: 'border-gray-300 bg-transparent',
    },
    {
      variant: 'primary',
      outline: true,
      className: 'border-primary bg-transparent',
    },
    {
      variant: 'success',
      outline: true,
      className: 'border-green-500 bg-transparent',
    },
    {
      variant: 'warning',
      outline: true,
      className: 'border-yellow-500 bg-transparent',
    },
    {
      variant: 'error',
      outline: true,
      className: 'border-red-500 bg-transparent',
    },
    {
      variant: 'info',
      outline: true,
      className: 'border-blue-500 bg-transparent',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
    outline: false,
  },
});
