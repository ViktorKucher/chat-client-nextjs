import axios from "axios";

export const API_INSTANCE = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});
const AUTH_API_URL = "/api/auth";
export const LOGIN_URL = `${AUTH_API_URL}/login`;
export const REGISTRATION_URL = `${AUTH_API_URL}/registration`;
