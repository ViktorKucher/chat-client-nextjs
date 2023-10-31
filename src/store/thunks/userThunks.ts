import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/constants/axios";
import { IUserLogin, IUserRegistration } from "@/types/AuthorizationTypes";

export const login = createAsyncThunk(
  "user/login",
  async function ({ email, password }: IUserLogin, { rejectWithValue }) {
    try {
      const response = await instance.post("/api/auth/login", {
        email,
        password,
      });
      return response.data;
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
      const response = await instance.post("/api/auth/registration", {
        email,
        password,
        nickname,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  },
);
