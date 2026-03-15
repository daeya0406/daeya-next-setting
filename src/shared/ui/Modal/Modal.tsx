import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { modalStyles } from "./Modal.styles";
import { Icon } from "../Icons";

const ModalRoot = DialogPrimitive.Root;
const ModalTrigger = DialogPrimitive.Trigger;

interface ExtendedContentProps extends DialogPrimitive.DialogContentProps {
  size?: "sm" | "md" | "lg" | "full";
}

const ModalContent = ({ children, size, ...props }: ExtendedContentProps) => {
  const styles = modalStyles({ size });

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay()} />
      <DialogPrimitive.Content className={styles.content()} {...props}>
        {/* 접근성 태그 */}
        <DialogPrimitive.Title className="sr-only">Modal</DialogPrimitive.Title>
        <DialogPrimitive.Description className="sr-only">
          Modal Description
        </DialogPrimitive.Description>

        {children}

        <DialogPrimitive.Close className={styles.close()}>
          <Icon name="close" size={20} />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

// 나머지 부품들 modalStyles()를 각자 호출해서 클래스를 가져오게
export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Content: ModalContent,
  Header: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={modalStyles().header({ className })} {...props} />
  ),
  Title: ({ className, ...props }: DialogPrimitive.DialogTitleProps) => (
    <DialogPrimitive.Title
      className={modalStyles().title({ className })}
      {...props}
    />
  ),
  Description: ({
    className,
    ...props
  }: DialogPrimitive.DialogDescriptionProps) => (
    <DialogPrimitive.Description
      className={modalStyles().description({ className })}
      {...props}
    />
  ),
  Footer: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={modalStyles().footer({ className })} {...props} />
  ),
});
