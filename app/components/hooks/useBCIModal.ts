import { create } from "zustand";

interface BCIModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useBCIModal = create<BCIModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useBCIModal;