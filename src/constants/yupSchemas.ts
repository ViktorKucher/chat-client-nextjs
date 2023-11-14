import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(18).required(),
});

export const registrationSchema = yup.object().shape({
  nickname: yup.string().min(5).max(16).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(18).required(),
});
