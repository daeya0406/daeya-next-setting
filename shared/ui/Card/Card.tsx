import { HTMLAttributes, forwardRef } from "react";
import { cardStyles, type CardVariants } from "./Card.styles";
import { cn } from "@/lib/utils";

// 메인 Card 컴포넌트
interface CardProps extends HTMLAttributes<HTMLDivElement>, CardVariants {}

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, size, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardStyles({ variant, size }), className)}
      {...props}
    />
  ),
);
CardRoot.displayName = "Card";

// 하위 요소들 (Header, Content, Footer)
const CardHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5", className)} {...props} />
);

const CardContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(className)} {...props} />
);

const CardFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center", className)} {...props} />
);

// 컴파운드 패턴으로 export
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});
