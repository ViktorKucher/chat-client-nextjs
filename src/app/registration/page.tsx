"use client";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { registration } from "@/store/thunks/userThunks";
import Link from "next/link";
import { IUserRegistration } from "@/types/AuthorizationTypes";
import { useRouter } from "next/navigation";
import { regExpEmail } from "@/constants/regexr";
import { userSelector } from "@/constants/selectors";
import { ErrorAlert } from "@/components/ui/Alerts";
import { PasswordValidation } from "@/utils/validation";
import { ErrorMessage } from "@hookform/error-message";

export default function Registration() {
  const router = useRouter();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegistration | undefined>();

  const formSubmit: SubmitHandler<IUserRegistration | undefined> = ({
    email,
    password,
    nickname,
  }) => {
    dispatch(registration({ email, password, nickname }));
    if (!user.error) {
      router.push("/dashboard");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Card className="mx-5 w-auto sm:w-80" color="transparent" shadow={false}>
        <Typography variant="h2" color="blue-gray" className="text-center">
          Registration
        </Typography>
        <form onSubmit={handleSubmit(formSubmit)} className="mt-8 mb-2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              {...register("nickname", {
                required: "Please enter your nickname.",
                minLength: { value: 5, message: "Min length 5" },
                maxLength: { value: 16, message: "Max length 16" },
              })}
              placeholder="nickname"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <ErrorMessage
              errors={errors}
              name="nickname"
              render={({ message }) => <ErrorAlert>{message}</ErrorAlert>}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              {...register("email", {
                required: "Please enter your email.",
                minLength: 5,
                pattern: { value: regExpEmail, message: "Error email" },
              })}
              size="lg"
              placeholder="name@gmail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              type="email"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <ErrorAlert>{message}</ErrorAlert>}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              {...register("password", {
                required: "Please enter your password.",
                minLength: { value: 8, message: "Min length 8" },
                maxLength: { value: 18, message: "Max length 18" },
                validate: PasswordValidation,
              })}
              autoComplete="current-password"
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <ErrorAlert>{message}</ErrorAlert>}
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account ?{" "}
            <Link href="/" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
        <ErrorAlert>{user.error}</ErrorAlert>
      </Card>
    </main>
  );
}
