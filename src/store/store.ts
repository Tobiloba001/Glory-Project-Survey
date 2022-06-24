import { configureStore } from "@reduxjs/toolkit";
import slices from "./Slice";

export const store = configureStore({
  reducer: {
    survey: slices.surveySlice,
    user:slices.userSlice,
    step:slices.stepSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
