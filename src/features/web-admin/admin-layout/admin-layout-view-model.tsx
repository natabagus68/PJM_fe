import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { boolean } from "yup";

export const useAdminLayout = () => {
  const navigate = useNavigate();
  const [sideShow, setSideShow] = useState<boolean>(true);
  const handleSideShow = () => {
    setSideShow(!sideShow);
  };

  const isMe = () => {};
  const logout = () => {};

  useEffect(() => {
    isMe();
  }, []);
  return {
    sideShow,
    handleSideShow,
    logout,
  };
};
