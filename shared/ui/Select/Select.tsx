import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { selectStyles } from "./Select.styles";

// Props 타입
interface SelectProps extends SelectPrimitive.SelectProps {
  children: React.ReactNode;
  placeholder?: string;
}

const { trigger, content, item, indicator, viewport } = selectStyles();

const SelectRoot = ({ children, placeholder, ...props }: SelectProps) => (
  <SelectPrimitive.Root {...props}>
    <SelectPrimitive.Trigger className={trigger()}>
      <SelectPrimitive.Value placeholder={placeholder} />
      {/* 아이콘도 좀 더 예쁘게 바꿨어요 */}
      <SelectPrimitive.Icon asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-50"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>

    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position="popper"
        sideOffset={6}
        className={content()}
      >
        <SelectPrimitive.Viewport className={viewport()}>
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
);

const SelectItem = React.forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectItemProps
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={item()} {...props}>
    <span className={indicator()}>
      <SelectPrimitive.ItemIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName = "SelectItem";

export const Select = Object.assign(SelectRoot, {
  Item: SelectItem,
});
