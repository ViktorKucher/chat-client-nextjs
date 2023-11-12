"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography } from "@material-tailwind/react";
import { InputForm } from "@/components/ui/Input";
import { IForm } from "@/types/FormTypes";

export const Form = ({
  resolverSchema,
  formSubmit,
  arrayInput,
  buttonText,
  title,
}: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resolverSchema),
  });

  return (
    <>
      <Typography variant="h2" color="blue-gray" className="text-center">
        {title}
      </Typography>
      <form onSubmit={handleSubmit(formSubmit)} className="mt-8 mb-2">
        <div className="mb-1 flex flex-col gap-6">
          {arrayInput.map(({ name, title, placeholder, type }, index) => {
            return (
              <InputForm
                key={index}
                register={register}
                name={name}
                errors={errors}
                title={title}
                placeholder={placeholder}
                type={type}
              />
            );
          })}
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          {buttonText}
        </Button>
      </form>
    </>
  );
};
