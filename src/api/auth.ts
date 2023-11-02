import { API_BASE_URL, LOGIN_URL, REGISTRATION_URL } from "@/constants/api";

export const SingInUser = async (email: string, password: string) => {
  const response = await API_BASE_URL.post(LOGIN_URL, {
    email,
    password,
  });
  return response.data;
};
export const SingUpUser = async (
  email: string,
  password: string,
  nickname: string,
) => {
  const response = await API_BASE_URL.post(REGISTRATION_URL, {
    email,
    password,
    nickname,
  });
  return response.data;
};
