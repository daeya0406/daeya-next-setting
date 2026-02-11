import { Icons } from "./icons";

type IconName = keyof typeof Icons;

interface Props {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, size = 16, className, strokeWidth = 2 }: Props) {
  const LucideIcon = Icons[name];
  if (!LucideIcon) return null;
  return (
    <LucideIcon size={size} className={className} strokeWidth={strokeWidth} />
  );
}
