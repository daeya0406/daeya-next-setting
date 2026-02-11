import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { dropdownStyles } from "./Dropdown.styles";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: "start" | "center" | "end";
}

export function Dropdown({ trigger, children, align = "end" }: DropdownProps) {
  const { content, trigger: triggerStyle } = dropdownStyles();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={triggerStyle()}>
        {trigger}
      </DropdownMenu.Trigger>

      {/* 포털을 사용하여 DOM 계층 구조에 구애받지 않고 최상단에 렌더링 */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={content()}
          align={align}
          sideOffset={5}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export const DropdownItem = ({
  children,
  onClick,
  disabled,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) => {
  const { item } = dropdownStyles();
  return (
    <DropdownMenu.Item
      className={`${item()} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </DropdownMenu.Item>
  );
};

export const DropdownSeparator = () => {
  const { separator } = dropdownStyles();
  return <DropdownMenu.Separator className={separator()} />;
};
