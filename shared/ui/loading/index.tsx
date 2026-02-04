import { Loader2, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingProps extends LucideProps {
  className?: string;
}

export function Loading({ className, size = 16, ...props }: LoadingProps) {
  return (
    <Loader2
      className={cn("animate-spin text-current", className)}
      size={size}
      {...props}
    />
  );
}
