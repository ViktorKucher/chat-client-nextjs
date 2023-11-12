"use client";
import { Input, Typography } from "@material-tailwind/react";
import { ErrorAlert } from "@/components/ui/Alerts";
import { IInputForm } from "@/types/FormTypes";

export const InputForm = ({
  register,
  name,
  errors,
  title,
  placeholder,
  type,
}: IInputForm) => {
  return (
    <>
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        {title}
      </Typography>
      <Input
        {...register(name)}
        type={type}
        size="lg"
        placeholder={placeholder}
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      {errors[name]?.message && (
        <ErrorAlert>{errors[name]?.message}</ErrorAlert>
      )}
    </>
  );
};
