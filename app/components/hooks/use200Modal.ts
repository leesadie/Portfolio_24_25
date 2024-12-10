import { create } from "zustand";

interface Info200ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const use200Modal = create<Info200ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default use200Modal;