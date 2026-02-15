import { badgeStyles } from "./Badge.styles";

export interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  outline?: boolean;
  icon?: React.ReactNode;
}

export const Badge = ({
  children,
  className,
  variant = "default",
  size = "md",
  outline = false,
  icon,
}: BadgeProps) => {
  return (
    <span className={badgeStyles({ variant, size, outline, className })}>
      {icon && <span className="inline-flex mr-1">{icon}</span>}
      {children}
    </span>
  );
};
