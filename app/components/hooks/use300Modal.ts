import { create } from "zustand";

interface Cogs300ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const use300Modal = create<Cogs300ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default use300Modal;