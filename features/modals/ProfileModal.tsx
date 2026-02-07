// features/profile/ui/ProfileModal.tsx
import { Modal } from "@/shared/ui/Modal";
import { Button } from "@/shared/ui/Button";
import { useModalStore } from "@/shared/store/useModalStore";
import { Section } from "@/shared/ui/Section/Section";

export function ProfileModal({
  name,
  onClose,
}: {
  name: string;
  onClose: () => void;
}) {
  const { openModal, closeAllModals } = useModalStore();

  const handleOpenConfirm = () => {
    openModal("confirm", {
      title: "정말 삭제하시겠습니까?",
      message: "삭제된 프로필 정보는 복구할 수 없습니다.",
      confirmText: "영구 삭제",
      cancelText: "취소",
      isDanger: true,
      onConfirm: () => {
        console.log("삭제 로직 실행");
        closeAllModals();
      },
    });
  };

  return (
    <Modal.Content>
      <Modal.Header>
        <Modal.Title>프로필 수정</Modal.Title>
      </Modal.Header>

      <Section>
        <p>
          <strong>{name}</strong>님의 정보를 수정 중입니다.
        </p>
        <input
          className="border p-2 w-full mt-4 rounded-md"
          placeholder="이름 변경"
        />
      </Section>

      <Modal.Footer>
        <Button variant="tertiary" onClick={onClose}>
          취소
        </Button>
        {/* 삭제 버튼 클릭 시 확인 모달 호출 */}
        <Button variant="secondary" onClick={handleOpenConfirm}>
          삭제
        </Button>
      </Modal.Footer>
    </Modal.Content>
  );
}
