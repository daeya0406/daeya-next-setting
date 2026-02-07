'use client';

import { Toaster as Sonner, toast } from 'sonner';

export function ToastProvider() {
  return (
    <Sonner
      position="top-right"
      toastOptions={{
        style: {
          background: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
        },
        classNames: {
          error: 'border-destructive',
          success: 'border-green-500',
          warning: 'border-yellow-500',
          info: 'border-blue-500',
        },
      }}
    />
  );
}

// Export toast utilities
export { toast };
