import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/store/slices/user-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;