import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { modalStyles } from "./Modal.styles";

const { overlay, content, header, title, description, close } = modalStyles();

const ModalRoot = DialogPrimitive.Root;
const ModalTrigger = DialogPrimitive.Trigger;

const ModalContent = ({
  children,
  ...props
}: DialogPrimitive.DialogContentProps) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={overlay()} />
    <DialogPrimitive.Content className={content()} {...props}>
      {children}
      <DialogPrimitive.Close className={close()}>
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

export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Content: ModalContent,
  Header: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={header({ className })} {...props} />
  ),
  Title: ({ className, ...props }: DialogPrimitive.DialogTitleProps) => (
    <DialogPrimitive.Title className={title({ className })} {...props} />
  ),
  Description: ({
    className,
    ...props
  }: DialogPrimitive.DialogDescriptionProps) => (
    <DialogPrimitive.Description
      className={description({ className })}
      {...props}
    />
  ),
  Footer: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={header({ className: footer({ className }) })} {...props} />
  ),
});
