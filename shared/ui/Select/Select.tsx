import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { selectStyles } from "./Select.styles";
import { Icon } from "../Icons";

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
      <SelectPrimitive.Icon asChild>
        <Icon name="chevronDown" size={16} />
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
        <Icon name="check" size={16} />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName = "SelectItem";

export const Select = Object.assign(SelectRoot, {
  Item: SelectItem,
});
