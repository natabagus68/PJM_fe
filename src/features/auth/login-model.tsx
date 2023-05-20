import { Authentication } from "@data/api/authentication";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  //input password
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  //input password
  const onPasswordShow = (): void => {
    setIsPasswordShow(!!!isPasswordShow);
  };

  //button login
  const onSubmitLogin = async (e): Promise<void> => {
    e.preventDefault();
    try {
      const result = await Authentication.login(form);
      localStorage.setItem("token", `${result}`);
      navigate("../admin");
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };
  return {
    form,
    isPasswordShow,
    handleForm,
    onPasswordShow,
    onSubmitLogin,
  };
}
