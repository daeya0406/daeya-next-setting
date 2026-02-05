import * as PopoverPrimitive from "@radix-ui/react-popover";
import { popoverStyles } from "./Popover.styles";

const { content } = popoverStyles();

export const Popover = Object.assign(PopoverPrimitive.Root, {
  Trigger: PopoverPrimitive.Trigger,
  Content: ({
    className,
    align = "center",
    sideOffset = 4,
    ...props
  }: PopoverPrimitive.PopoverContentProps) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={content({ className })}
        {...props}
      />
    </PopoverPrimitive.Portal>
  ),
});
