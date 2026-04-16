import type { DialogId } from "../../utils/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface DialogInstance {
  id: DialogId;
}

interface DialogState {
  stack: DialogInstance[];
}

const initialState: DialogState = {
  stack: [],
}

export const dialogSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    showDialog: (state, action: PayloadAction<DialogId>) => {
      const dialogId = action.payload;
      state.stack = [...state.stack, { id: dialogId }]
    },
    closeDialog: (state) => {
      state.stack = [...state.stack.slice(0, -1)]
    },
    closeAllDialogs: (state) => { 
      state.stack = [];
    },
  },
});

export const { showDialog, closeDialog, closeAllDialogs } = dialogSlice.actions;
export default dialogSlice.reducer;