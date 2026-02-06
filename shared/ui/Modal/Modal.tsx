import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { modalStyles } from "./Modal.styles";

const ModalRoot = DialogPrimitive.Root;
const ModalTrigger = DialogPrimitive.Trigger;

interface ExtendedContentProps extends DialogPrimitive.DialogContentProps {
  size?: "sm" | "md" | "lg" | "full";
}

const ModalContent = ({ children, size, ...props }: ExtendedContentProps) => {
  // 1. 여기서 호출해야 size에 맞는 스타일이 나옵니다.
  const styles = modalStyles({ size });

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay()} />
      <DialogPrimitive.Content className={styles.content()} {...props}>
        {/* 접근성 태그 (유지) */}
        <DialogPrimitive.Title className="sr-only">Modal</DialogPrimitive.Title>
        <DialogPrimitive.Description className="sr-only">
          Modal Description
        </DialogPrimitive.Description>

        {children}

        <DialogPrimitive.Close className={styles.close()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

// 2. 나머지 부품들도 modalStyles()를 각자 호출해서 클래스를 가져오게 합니다.
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
