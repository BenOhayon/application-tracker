import { create } from "zustand";

interface SideBarStoreData {
  isOpen: boolean;
}

interface SideBarStoreActions {
  openSideBar: () => void;
  closeSideBar: () => void;
}

type SideBarStoreState = SideBarStoreData & SideBarStoreActions;

const initialState: SideBarStoreData = {
  isOpen: false,
}

const sideBarSlice = create<SideBarStoreState>((set) => ({
  ...initialState,
  openSideBar: () => {
    set((state) => ({ ...state, isOpen: true }));
  },
  closeSideBar: () => {
    set((state) => ({ ...state, isOpen: false }));
  },
}));

export const useIsSidebarOpen = () => sideBarSlice((state) => state.isOpen);
export const useOpenSideBar = () => sideBarSlice((state) => state.openSideBar);
export const useCloseSideBar = () => sideBarSlice((state) => state.closeSideBar);