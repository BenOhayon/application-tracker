import type { ApplicationData } from "../../utils/types";
import { create } from "zustand";

export interface MarkApplicationAsRejectedDialogStoreData {
  id: ApplicationData['id'] | null;
  company: ApplicationData['company'] | null;
}

interface MarkApplicationAsRejectedDialogStoreActions {
  setApplicationCompany: (data: MarkApplicationAsRejectedDialogStoreData) => void;
}

type MarkApplicationAsRejectedDialogStoreState = 
  MarkApplicationAsRejectedDialogStoreData & 
  MarkApplicationAsRejectedDialogStoreActions;

const initialState: MarkApplicationAsRejectedDialogStoreData = {
  company: null,
  id: null
}

const useMarkApplicationAsRejectedDialogStore = create<MarkApplicationAsRejectedDialogStoreState>((set) => ({
  ...initialState,
  setApplicationCompany: (data: MarkApplicationAsRejectedDialogStoreData) => {
    const { company, id } = data;
    set({ company, id });
  }
}));

export const useSetApplicationAsRejectedData = () => useMarkApplicationAsRejectedDialogStore((state) => state.setApplicationCompany);
export const useApplicationForRejectCompany = () => useMarkApplicationAsRejectedDialogStore((state) => state.company);
export const useApplicationForRejectId = () => useMarkApplicationAsRejectedDialogStore((state) => state.id);