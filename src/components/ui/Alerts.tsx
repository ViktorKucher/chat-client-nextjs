import { Alert } from "@material-tailwind/react";
import { AlertTriangle } from "react-feather";

export const ErrorAlert = ({ children }: { children?: string | null }) => {
  return (
    children && (
      <Alert
        icon={<AlertTriangle />}
        className="rounded-none border-l-4 border-red-800 bg-white-800 font-medium text-red-800 text-sm"
      >
        {children}
      </Alert>
    )
  );
};
