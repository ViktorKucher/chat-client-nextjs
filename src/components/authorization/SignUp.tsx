"use client";
import { Card, Spinner, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler } from "react-hook-form";
import { registration } from "@/store/thunks/userThunks";
import Link from "next/link";
import { IUserRegistration } from "@/types/AuthorizationTypes";
import { useRouter } from "next/navigation";
import { userSelector } from "@/store/selectors";
import { ErrorAlert } from "@/components/ui/Alerts";
import { registrationSchema } from "@/constants/yupSchemas";
import { Form } from "@/components/ui/Form";
import { inputsRegistration } from "@/constants/inputs";
import { memo, useEffect } from "react";

export const SignUp = memo(() => {
  const router = useRouter();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const formSubmit: SubmitHandler<IUserRegistration> = (data) => {
    dispatch(registration(data));
  };
  useEffect(() => {
    if (user.error === null && user.isLoading) {
      router.push("/dashboard");
    }
  }, [user]);
  return user.isLoading ? (
    <Card className="mx-5 w-auto sm:w-80" color="transparent" shadow={false}>
      <Form
        resolverSchema={registrationSchema}
        formSubmit={formSubmit}
        arrayInput={inputsRegistration}
        buttonText={"sign up"}
        title={"Registration"}
      />
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account ?{" "}
        <Link href="/" className="font-medium text-gray-900">
          Sign In
        </Link>
      </Typography>
      <ErrorAlert>{user.error}</ErrorAlert>
    </Card>
  ) : (
    <Spinner />
  );
});
