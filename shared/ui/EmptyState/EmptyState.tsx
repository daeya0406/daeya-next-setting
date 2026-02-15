import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/Button";

interface EmptyStateProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  className,
  title,
  description,
  icon,
  action,
  children,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-12 text-center bg-gray-200/25 rounded-xl",
        className,
      )}
    >
      {icon && (
        <div className="bg-muted text-muted-foreground flex h-16 w-16 items-center justify-center rounded-full">
          {icon}
        </div>
      )}

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>

      {action && <Button onClick={action.onClick}>{action.label}</Button>}

      {children}
    </div>
  );
}
