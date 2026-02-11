import { Loader2, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

export function Loading({ className, size = 16, ...props }: LucideProps) {
  return (
    <Loader2
      className={cn("animate-spin text-current", className)}
      size={size}
      {...props}
    />
  );
}
