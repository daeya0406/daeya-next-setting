import { create } from "zustand";

type ModalType = "profile" | "deleteConfirm" | "settings" | null;

interface ModalStore {
  type: ModalType;
  isOpen: boolean;
  data: any;
  openModal: (type: ModalType, data?: any) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: null,
  openModal: (type, data = null) => set({ isOpen: true, type, data }),
  closeModal: () => set({ isOpen: false, type: null, data: null }),
}));
