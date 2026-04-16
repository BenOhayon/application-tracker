import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ApplicationsTableSliceData {
  itemsPerPage: number;
  showRejectedApplications: boolean;
}

const initialState: ApplicationsTableSliceData = {
  itemsPerPage: 5,
  showRejectedApplications: false,
}

const applicationsTableSlice = createSlice({
  name: 'applications-table',
  initialState,
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      const itemsPerPage = action.payload;
      if (itemsPerPage <= 0) {
        return;
      }
      state.itemsPerPage = itemsPerPage;
    },
    setShowRejectedApplications: (state, action: PayloadAction<boolean>) => {
      state.showRejectedApplications = action.payload;
    }
  }
});

export const {
  setItemsPerPage,
  setShowRejectedApplications
} = applicationsTableSlice.actions;
export default applicationsTableSlice.reducer;
