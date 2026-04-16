import { createSlice } from "@reduxjs/toolkit";

interface SideBarSliceData {
  isOpen: boolean;
}

const initialState: SideBarSliceData = {
  isOpen: false,
}

export const sideBarSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.isOpen = true
    },
    closeSideBar: (state) => {
      state.isOpen = false
    },
  },
});

export const { openSideBar, closeSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;