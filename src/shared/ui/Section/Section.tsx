import React from "react";
import { sectionStyles } from "./Section.styles";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: 1 | 2 | 3;
}

const SectionRoot = ({
  level,
  children,
  className,
  ...props
}: SectionProps) => {
  const styles = sectionStyles({ level });
  return (
    <section className={styles.root({ className })} {...props}>
      {children}
    </section>
  );
};

export const Section = Object.assign(SectionRoot, {
  Header: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={sectionStyles().header({ className })} {...props} />
  ),
  Title: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={sectionStyles().title({ className })} {...props} />
  ),
  Content: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={sectionStyles().content({ className })} {...props} />
  ),
});
