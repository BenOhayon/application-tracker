import { configureStore } from '@reduxjs/toolkit';
import applicationSliceReducer from './application-slice';
import createNewApplicationDialogSliceReducer from './create-application-dialog-slice';

export const store = configureStore({
  reducer: {
    applications: applicationSliceReducer,
    createNewApplicationDialog: createNewApplicationDialogSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;