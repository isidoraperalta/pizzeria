import { useState } from "react";
import { useRouter } from "expo-router";
import { showAlert } from "@/utils/alert";
import { validateEmail, validatePassword } from "@/constants/validation";
import { useAuth } from "@/contexts/AuthContext";

export const useLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = (): void => {
    setIsLoading(true);

    if (!validateEmail(email)) {
      showAlert("Error", "Formato de email inválido");
      setIsLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      showAlert("Error", "Contraseña incorrecta");
      setIsLoading(false);
      return;
    }

    login(email);
    router.replace("/(tabs)");
    setIsLoading(false);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleLogin,
  };
};
