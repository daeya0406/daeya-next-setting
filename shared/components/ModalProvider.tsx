"use client";

import { useModalStore } from "@/shared/store/useModalStore";
import { Modal } from "@/shared/ui/Modal";
import { Button } from "@/shared/ui/Button";

export const ModalProvider = () => {
  const { type, isOpen, closeModal, data } = useModalStore();

  // 스토어의 type에 따라 실제 렌더링할 모달을 결정합니다.
  return (
    <>
      {/* 1. 프로필 수정 모달 */}
      <Modal open={isOpen && type === "profile"} onOpenChange={closeModal}>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>프로필 수정</Modal.Title>
          </Modal.Header>
          <div className="py-4">유저 정보: {data?.name}</div>
          <Modal.Footer>
            <Button onClick={closeModal}>닫기</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      {/* 2. 삭제 확인 모달 */}
      <Modal
        open={isOpen && type === "deleteConfirm"}
        onOpenChange={closeModal}
      >
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>정말 삭제할까요?</Modal.Title>
            <Modal.Description>
              ID: {data?.id} 항목을 삭제합니다.
            </Modal.Description>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="outline" onClick={closeModal}>
              취소
            </Button>
            <Button
              onClick={() => {
                console.log(`${data?.id} 삭제 로직 실행`);
                closeModal();
              }}
            >
              삭제
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
