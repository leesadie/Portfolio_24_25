import { create } from "zustand";

interface ClassifModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useClassifModal = create<ClassifModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useClassifModal;