import { config } from "@common/utils";
import { UserApiRepository } from "@data/api/web-admin/user-api-repository";
import { UserAdmin } from "@domain/models/web-admin/user";
import { IUserAdminRepository } from "@domain/repositories/web-admin/user-repository";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginWebAdmin = () => {
  const navigate = useNavigate();
  const userRepo: IUserAdminRepository = new UserApiRepository();
  const [form, setForm] = useState<UserAdmin>(
    UserAdmin.create({
      email: "",
      password: "",
    })
  );

  const [error, setError] = useState("");
  const [eye, setEye] = useState<boolean>(false);
  const handleEye = () => {
    setEye(!eye);
  };

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return UserAdmin.create({
        ...prev.unmarshall(),
        [e.target.name]: e.target.value,
      });
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    userRepo
      .login(form)
      .then(async (result) => {
        await localStorage.setItem("token", result.token);
        navigate(`${config.pathPrefix}admin`);
      })
      .catch((error) => {
        setError("Email or Password not correct");
      });
  };

  const removeError = () => {
    setError("");
  };

  const isMe = async () => {
    userRepo.me().then((result) => {
      navigate(`${config.pathPrefix}admin`);
    });
  };

  useEffect(() => {
    isMe();
  }, []);
  return {
    eye,
    form,
    error,
    handleEye,
    handleForm,
    handleSubmit,
    removeError,
  };
};
