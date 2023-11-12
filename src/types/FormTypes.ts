import { FieldValues, UseFormRegister } from "react-hook-form";
import { ObjectSchema, lazy } from "yup";

export interface IInputForm {
  register: UseFormRegister<FieldValues>;
  name: string;
  errors: object;
  title: string;
  placeholder: string;
}

interface IInputProps {
  name: string;
  title: string;
  placeholder: string;
  type: string;
}

export interface IForm {
  resolverSchema: ObjectSchema<FieldValues> | ReturnType<typeof lazy>;
  formSubmit: Function;
  arrayInput: IInputProps[];
  buttonText: string;
  title: string;
}
