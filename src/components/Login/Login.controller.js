import { useLoginModel } from "./Login.model";
import { useState } from "react";

export const useLoginController = () => {
  const { handleRegistration, handleLogin } = useLoginModel();
  const [registrationLoading, setRegistrationLoading] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    await handleLogin({ email, password });
    setIsLoggingIn(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRegistrationLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    await handleRegistration({ username, email, password });
    setRegistrationLoading(false);
  };

  return {
    handleLoginSubmit,
    handleRegisterSubmit,
    registrationLoading,
    isLoggingIn,
  };
};
