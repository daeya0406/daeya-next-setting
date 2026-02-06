"use client";

import { Modal } from "./Modal";
import { useModalStore } from "@/shared/store/useModalStore";
import { ProfileModal } from "@/features/modals/ProfileModal";
import { ConfirmModal } from "./ConfirmModal";

const MODAL_COMPONENTS: Record<string, any> = {
  profile: ProfileModal,
  confirm: ConfirmModal,
};

export function ModalProvider() {
  const { stack, closeModal } = useModalStore();

  if (stack.length === 0) return null;

  return (
    <>
      {stack.map((item, index) => {
        const Scene = MODAL_COMPONENTS[item.type];
        if (!Scene) return null;

        return (
          // Radix의 Root에 직접 open과 onOpenChange를 박아야 합니다.
          <Modal
            key={`${item.type}-${index}`}
            open={true}
            onOpenChange={(open) => {
              if (!open) closeModal(); // 여기서 닫기 신호를 처리함
            }}
          >
            <Scene {...item.props} onClose={closeModal} />
          </Modal>
        );
      })}
    </>
  );
}
