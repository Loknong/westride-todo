import { create } from "zustand";

interface SidebarState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  layoutNumber : number;
  setLayoutNumber: (num: number) => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  layoutNumber: 1,
  setLayoutNumber: (num) => set({layoutNumber:num})
}));

export default useSidebarStore;
