import { create } from "zustand";
import type { DialogId } from "../../utils/types";

interface DialogInstance {
  id: DialogId;
}

interface DialogStoreData {
  stack: DialogInstance[];
}

interface DialogStoreActions {
  showDialog: (dialogId: DialogId) => void;
  closeDialog: () => void;
  closeAllDialogs: () => void;
}

type DialogState = DialogStoreData & DialogStoreActions;

const initialState: DialogStoreData = {
  stack: [],
}

const useDialogStore = create<DialogState>((set) => ({
  ...initialState,
  showDialog: (dialogId: DialogId) => {
    set((state) => ({
      stack: [...state.stack, { id: dialogId }]
    }));
  },
  closeDialog: () => {
    set((state) => ({
      stack: [...state.stack.slice(0, -1)]
    }));
  },
  closeAllDialogs: () => {
    set({ stack: [] });
  },
}));

export const useDialogStoreStack = () => useDialogStore((state) => state.stack);
export const useShowDialog = () => useDialogStore((state) => state.showDialog);
export const useCloseDialog = () => useDialogStore((state) => state.closeDialog);
export const useCloseAllDialogs = () => useDialogStore((state) => state.closeAllDialogs);