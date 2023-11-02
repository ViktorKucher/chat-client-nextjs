import axios from "axios";

export const API_BASE_URL = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});
export const LOGIN_URL = "/api/auth/login";
export const REGISTRATION_URL = "/api/auth/registration";
