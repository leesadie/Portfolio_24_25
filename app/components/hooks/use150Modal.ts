import { create } from "zustand";

interface Wrds150ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const use150Modal = create<Wrds150ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default use150Modal;