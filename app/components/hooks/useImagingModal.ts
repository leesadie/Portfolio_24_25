import { create } from "zustand";

interface ImagingModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useImagingModal = create<ImagingModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useImagingModal;