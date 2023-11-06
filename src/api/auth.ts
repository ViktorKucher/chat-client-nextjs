import { API_INSTANCE, LOGIN_URL, REGISTRATION_URL } from "@/constants/api";

export const SignInUser = async (email: string, password: string) => {
  const response = await API_INSTANCE.post(LOGIN_URL, {
    email,
    password,
  });
  return response.data;
};
export const SignUpUser = async (
  email: string,
  password: string,
  nickname: string,
) => {
  const response = await API_INSTANCE.post(REGISTRATION_URL, {
    email,
    password,
    nickname,
  });
  return response.data;
};
