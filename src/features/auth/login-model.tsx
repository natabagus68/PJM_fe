import { User } from "@domain/models/caller/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  //input password
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const [error, setError] = useState(false);

  //input password
  const onPasswordShow = (): void => {
    setIsPasswordShow(!isPasswordShow);
  };

  const [form, setForm] = useState<User>(
    User.create({
      email: "",
      password: "",
      lineId: "",
      shift: "",
    })
  );

  //button login
  const onSubmitLogin = async (e): Promise<void> => {
    e.preventDefault();
    try {
      console.log(e.target.email.value, e.target.password.value);
      await localStorage.setItem(
        "web-admin",
        JSON.stringify({ token: "token-12345678" })
      );
      setError(false);
      navigate("../caller/menu");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return {
    isPasswordShow,
    onPasswordShow,
    onSubmitLogin,
    error,
  };
}
