import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IInputForm {
  register: UseFormRegister<FieldValues>;
  name: string;
  errors: any;
  title: string;
  placeholder: string;
  inputType: string;
}

interface IInputProps {
  name: string;
  title: string;
  placeholder: string;
  inputType: string;
}

export interface IForm {
  resolverSchema: any;
  formSubmit: any;
  arrayInput: IInputProps[];
  buttonText: string;
  title: string;
}
