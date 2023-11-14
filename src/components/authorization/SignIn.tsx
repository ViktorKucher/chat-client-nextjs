"use client";
import { Card, Spinner, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { SubmitHandler } from "react-hook-form";
import { login } from "@/store/thunks/userThunks";
import Link from "next/link";
import { IUserLogin } from "@/types/AuthorizationTypes";
import { useRouter } from "next/navigation";
import { userSelector } from "@/store/selectors";
import { ErrorAlert } from "@/components/ui/Alerts";
import { loginSchema } from "@/constants/yupSchemas";
import { Form } from "@/components/ui/Form";
import { inputsLogin } from "@/constants/inputs";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/reduxHooks";

export const SignIn = () => {
  const router = useRouter();
  const user = useSelector(userSelector);
  const dispatch = useAppDispatch();

  const formSubmit: SubmitHandler<IUserLogin> = (data) => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (user.error === null && user.isLoading) {
      router.push("/dashboard");
    }
  }, [user, router]);
  return user.isLoading ? (
    <Card className="mx-5 w-auto sm:w-80" color="transparent" shadow={false}>
      <Form
        resolverSchema={loginSchema}
        formSubmit={formSubmit}
        arrayInput={inputsLogin}
        buttonText={"sign in"}
        title={"Login"}
      />
      <Typography color="gray" className="mt-4 text-center font-normal">
        Want to create an account ?{" "}
        <Link href="/registration" className="font-medium text-gray-900">
          Sign Up
        </Link>
      </Typography>
      <ErrorAlert>{user.error}</ErrorAlert>
    </Card>
  ) : (
    <Spinner />
  );
};
