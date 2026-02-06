import { useModalStore } from "@/shared/store/useModalStore";

export const useModal = () => {
  const { openModal, closeModal, stack } = useModalStore();

  // 현재 모달이 하나라도 열려있는지 확인하려면 stack.length를 체크
  const isOpen = stack.length > 0;

  // 현재 가장 위에 있는 모달의 정보
  const currentModal = stack[stack.length - 1];

  return {
    openModal,
    closeModal,
    isOpen,
    currentModal,
    stack,
  };
};
