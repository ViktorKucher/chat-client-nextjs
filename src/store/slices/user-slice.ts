import { createSlice } from "@reduxjs/toolkit";
import { login, registration } from "@/store/thunks/userThunks";
import { IPayloadAction } from "@/types/ReduxTypes";
import { User, UserState } from "@/types/UserSliceTypes";

const initialState: UserState = {
  isLoading: false,
  error: undefined,
  user: {
    _id: "",
    nickname: "",
  },
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = false;
    },
    [login.fulfilled]: (state, action: IPayloadAction<User>) => {
      state.isLoading = true;
      state.user = action;
    },
    [login.rejected]: (state, action: IPayloadAction<string>) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    [registration.pending]: (state) => {
      state.isLoading = false;
    },
    [registration.fulfilled]: (state, action: IPayloadAction<User>) => {
      state.isLoading = true;
      state.user = action;
    },
    [registration.rejected]: (state, action: IPayloadAction<string>) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export const userReducer = user.reducer;
