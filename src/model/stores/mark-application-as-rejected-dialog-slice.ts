import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ApplicationData } from "../../utils/types";

export interface MarkApplicationAsRejectedDialogSliceData {
  id: ApplicationData['id'] | null;
  company: ApplicationData['company'] | null;
}

const initialState: MarkApplicationAsRejectedDialogSliceData = {
  company: null,
  id: null
}

const createNewApplicationDialogSlice = createSlice({
  name: 'markApplicationAsRejected',
  initialState,
  reducers: {
    setApplicationCompany: (state, action: PayloadAction<MarkApplicationAsRejectedDialogSliceData>) => {
      const { company, id } = action.payload;
      state.company = company;
      state.id = id;
    }
  }
});

export const {
  setApplicationCompany,
} = createNewApplicationDialogSlice.actions;
export default createNewApplicationDialogSlice.reducer;