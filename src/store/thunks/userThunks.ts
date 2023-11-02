import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserLogin, IUserRegistration } from "@/types/AuthorizationTypes";
import { SingInUser, SingUpUser } from "@/api/auth";

export const login = createAsyncThunk(
  "user/login",
  async function ({ email, password }: IUserLogin, { rejectWithValue }) {
    try {
      return await SingInUser(email, password);
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  },
);

export const registration = createAsyncThunk(
  "user/registration",
  async function (
    { email, password, nickname }: IUserRegistration,
    { rejectWithValue },
  ) {
    try {
      return await SingUpUser(email, password, nickname);
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  },
);
