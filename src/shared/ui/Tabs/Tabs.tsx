import * as RadixTabs from "@radix-ui/react-tabs";
import { tabsStyles } from "./Tabs.styles";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  variant?: "line" | "pill";
  className?: string;
}

export function Tabs({
  items,
  defaultValue,
  variant = "line",
  className,
}: TabsProps) {
  const { root, list, trigger, content } = tabsStyles({ variant });

  return (
    <RadixTabs.Root
      defaultValue={defaultValue || items[0]?.id}
      className={root({ className })}
    >
      <RadixTabs.List className={list()}>
        {items.map((item) => (
          <RadixTabs.Trigger
            key={item.id}
            value={item.id}
            className={trigger()}
          >
            {item.label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>

      {items.map((item) => (
        <RadixTabs.Content key={item.id} value={item.id} className={content()}>
          {item.content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}
