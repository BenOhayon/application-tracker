import { configureStore } from '@reduxjs/toolkit';
import applicationSliceReducer from './application-slice';

export const store = configureStore({
  reducer: {
    applications: applicationSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;