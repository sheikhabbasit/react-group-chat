import { toast } from "react-toastify";

export const useLoginController = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login Successful");
  };
  return { handleSubmit };
};
