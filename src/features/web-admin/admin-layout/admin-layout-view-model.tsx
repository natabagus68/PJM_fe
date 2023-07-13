import { config } from "@common/utils";
import { UserApiRepository } from "@data/api/web-admin/user-api-repository";
import { IUserAdminRepository } from "@domain/repositories/web-admin/user-repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { boolean } from "yup";

export const useAdminLayout = () => {
  const userReppo: IUserAdminRepository = new UserApiRepository();
  const navigate = useNavigate();
  const [sideShow, setSideShow] = useState<boolean>(true);
  const handleSideShow = () => {
    setSideShow(!sideShow);
  };

  const isMe = async () => {
    try {
      await userReppo.me();
    } catch (error) {
      navigate("/login-web-admin");
    }
  };
  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.clear();
    navigate(`/login-web-admin`);
  };

  useEffect(() => {
    isMe();
  }, []);

  return {
    sideShow,
    handleSideShow,
    logout,
  };
};
