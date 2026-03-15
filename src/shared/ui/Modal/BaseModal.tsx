"use client";

import { Modal } from "./Modal"; // 기존 Radix 부품 활용

interface BaseModalProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  showClose?: boolean; // 닫기 버튼 유무
  onClose: () => void;
}

export function BaseModal({
  title,
  description,
  children,
  footer,
  showClose = true,
  onClose,
}: BaseModalProps) {
  return (
    <Modal.Content onPointerDownOutside={onClose} onEscapeKeyDown={onClose}>
      {/* Header 영역: 제목이나 설명이 있을 때만 렌더링 */}
      {(title || description) && (
        <Modal.Header>
          {title && <Modal.Title>{title}</Modal.Title>}
          {description && <Modal.Description>{description}</Modal.Description>}
        </Modal.Header>
      )}

      {/* 본문 영역 */}
      <div className="p-6">{children}</div>

      {/* Footer 영역: 버튼 등 */}
      {footer && (
        <div className="p-4 border-t flex justify-end gap-2">{footer}</div>
      )}

      {/* 닫기 버튼: 옵션에 따라 숨김 가능 */}
      {!showClose && <style>{`.Modal-Close-Button { display: none; }`}</style>}
    </Modal.Content>
  );
}
