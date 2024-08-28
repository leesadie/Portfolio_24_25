import { create } from "zustand";

interface BalletModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useBalletModal = create<BalletModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useBalletModal;