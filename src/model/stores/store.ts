import { configureStore } from '@reduxjs/toolkit';
import dialogSliceReducer from './dialog-slice';
import applicationSliceReducer from './application-slice';
import createNewApplicationDialogSliceReducer from './create-application-dialog-slice';
import markApplicationAsRejectedDialogSliceReducer from './mark-application-as-rejected-dialog-slice';
import applicationsTableSliceReducer from './applications-table-slice';
import sideBarSliceReducer from './sidebar-slice';

export const store = configureStore({
  reducer: {
    dialogs: dialogSliceReducer,
    applications: applicationSliceReducer,
    createNewApplicationDialog: createNewApplicationDialogSliceReducer,
    markApplicationAsRejectedDialog: markApplicationAsRejectedDialogSliceReducer,
    applicationsTable: applicationsTableSliceReducer,
    sideBar: sideBarSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;