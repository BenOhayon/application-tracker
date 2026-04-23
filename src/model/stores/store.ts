import { configureStore } from '@reduxjs/toolkit';
import applicationSliceReducer from './application-slice';
import createNewApplicationDialogSliceReducer from './create-application-dialog-slice';
import markApplicationAsRejectedDialogSliceReducer from './mark-application-as-rejected-dialog-slice';
import applicationsTableSliceReducer from './applications-table-slice';

export const store = configureStore({
  reducer: {
    applications: applicationSliceReducer,
    createNewApplicationDialog: createNewApplicationDialogSliceReducer,
    markApplicationAsRejectedDialog: markApplicationAsRejectedDialogSliceReducer,
    applicationsTable: applicationsTableSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;