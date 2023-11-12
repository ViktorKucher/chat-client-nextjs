import { createSlice } from "@reduxjs/toolkit";
import { login, registration } from "@/store/thunks/userThunks";
import { IPayloadAction } from "@/types/ReduxTypes";
import { User, UserState } from "@/types/UserSliceTypes";

const initialState: UserState = {
  isLoading: true,
  user: {
    _id: "",
    nickname: "",
  },
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action: IPayloadAction<User>) => {
      state.isLoading = true;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action: IPayloadAction<string>) => {
      state.isLoading = true;
      state.error = action.payload;
      state.user = null;
    });
    builder.addCase(registration.pending, (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    });
    builder.addCase(
      registration.fulfilled,
      (state, action: IPayloadAction<User>) => {
        state.isLoading = true;
        state.user = action.payload;
        state.error = null;
      },
    );
    builder.addCase(
      registration.rejected,
      (state, action: IPayloadAction<string>) => {
        state.isLoading = true;
        state.error = action.payload;
        state.user = null;
      },
    );
  },
});

export const userReducer = user.reducer;
