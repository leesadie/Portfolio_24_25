import { create } from "zustand";

interface Cogs303ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const use303Modal = create<Cogs303ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default use303Modal;