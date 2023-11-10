import {
  regExpCapitalLetters,
  regExpNumbers,
  regExpSmallLetters,
  regExpSpecialCharacters,
} from "@/constants/regexr";

export const PasswordValidation = (value) => {
  if (!regExpSpecialCharacters.test(value)) return "You need add number";
  if (!regExpCapitalLetters.test(value))
    return "You need to add capital letters";
  if (!regExpSmallLetters.test(value)) return "You need to add small letters";
  if (!regExpNumbers.test(value)) return "You need to add special characters";
  return true;
};
