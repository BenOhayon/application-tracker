import { create } from "zustand";

interface ApplicationsTableStoreData {
  itemsPerPage: number;
  showRejectedApplications: boolean;
}

interface ApplicationsTableStoreActions {
  setItemsPerPage: (itemsPerPage: number) => void;
  setShowRejectedApplications: (show: boolean) => void;
}

type ApplicationsTableStoreState = 
  ApplicationsTableStoreData & 
  ApplicationsTableStoreActions;

const initialState: ApplicationsTableStoreData = {
  itemsPerPage: 5,
  showRejectedApplications: false,
}

const useApplicationsTableStore = create<ApplicationsTableStoreState>()((set) => ({
  ...initialState,
  setItemsPerPage: (itemsPerPage: number) => set((state) => {
    if (itemsPerPage <= 0) {
      return state;
    }
    return { itemsPerPage };
  }),
  setShowRejectedApplications: (show: boolean) => set((state) => ({ ...state, showRejectedApplications: show }))
}));

export const useItemsPerPage = () => useApplicationsTableStore((state) => state.itemsPerPage);
export const useShowRejectedApplications = () => useApplicationsTableStore((state) => state.showRejectedApplications);
export const useSetItemsPerPage = () => useApplicationsTableStore((state) => state.setItemsPerPage);
export const useSetShowRejectedApplications = () => useApplicationsTableStore((state) => state.setShowRejectedApplications);