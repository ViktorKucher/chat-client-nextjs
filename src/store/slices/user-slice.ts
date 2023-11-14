import { createSlice } from "@reduxjs/toolkit";
import { login, registration } from "@/store/thunks/userThunks";
import { IPayloadAction } from "@/types/ReduxTypes";
import { User, UserState } from "@/types/UserSliceTypes";

const initialState: UserState = {
  isLoading: true,
  user: null,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.toString()]: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    },
    [login.fulfilled.toString()]: (state, action: IPayloadAction<User>) => {
      state.isLoading = true;
      state.user = action.payload;
      state.error = null;
    },
    [login.rejected.toString()]: (state, action: IPayloadAction<string>) => {
      state.isLoading = true;
      state.error = action.payload;
      state.user = null;
    },
    [registration.pending.toString()]: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    },
    [registration.fulfilled.toString()]: (
      state,
      action: IPayloadAction<User>,
    ) => {
      state.isLoading = true;
      state.user = action.payload;
      state.error = null;
    },
    [registration.rejected.toString()]: (
      state,
      action: IPayloadAction<string>,
    ) => {
      state.isLoading = true;
      state.error = action.payload;
      state.user = null;
    },
  },
});

export const userReducer = user.reducer;
