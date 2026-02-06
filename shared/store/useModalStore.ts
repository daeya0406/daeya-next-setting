import { create } from "zustand";

// 1. 개별 모달의 정보를 담는 타입
interface ModalInstance {
  type: string;
  props?: any;
}

interface ModalStore {
  stack: ModalInstance[]; // 중첩 모달 배열
  openModal: (type: string, props?: any) => void;
  closeModal: () => void;
  closeAllModals: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  stack: [],

  // 새로운 모달을 스택에 추가 (중첩 가능)
  openModal: (type, props) =>
    set((state) => ({
      stack: [...state.stack, { type, props }],
    })),

  // 가장 최근에 열린 모달만 제거
  closeModal: () =>
    set((state) => ({
      stack: state.stack.slice(0, -1),
    })),

  // 모든 모달 닫기
  closeAllModals: () => set({ stack: [] }),
}));
