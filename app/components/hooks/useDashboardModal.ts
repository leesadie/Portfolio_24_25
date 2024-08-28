import { create } from "zustand";

interface DashboardModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useDashboardModal = create<DashboardModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useDashboardModal;