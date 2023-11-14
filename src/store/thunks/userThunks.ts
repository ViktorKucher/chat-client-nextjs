import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserLogin, IUserRegistration } from "@/types/AuthorizationTypes";
import { SignUpUser, SignInUser } from "@/api/auth";
import { AxiosError } from "axios";

export const login = createAsyncThunk(
  "user/login",
  async function ({ email, password }: IUserLogin, { rejectWithValue }) {
    try {
      return await SignInUser(email, password);
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error?.response?.data || error?.message);
      }
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
      return await SignUpUser(email, password, nickname);
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error?.response?.data || error?.message);
      }
    }
  },
);
