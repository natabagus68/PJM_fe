import { UserApiRepository } from "@data/api/caller/user-api-repository";
import { Auth } from "@domain/models/caller/auth";
import { User } from "@domain/models/caller/user";
import { IUserRepository } from "@domain/repositories/caller/user-repository";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useAdmin() {
  const userRepo: IUserRepository = new UserApiRepository();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [onMenu, setOnMenu] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [me, setMe] = useState<Auth>(
    Auth.create({
      token: "",
      user: User.create({
        email: "",
        role: "",
        fullName: "",
        lineId: "",
      }),
    })
  );

  const LocationMe = () => {
    const currnetUrl = window.location.href;
    const temp = currnetUrl.split("/");
    const lastTemp = temp[temp.length - 1].split("-");
    let str = "";
    lastTemp.forEach((item) => {
      item.split("").forEach((el, i) => {
        if (i === 0) {
          str += el.toUpperCase();
        } else str += el;
      });
      str += " ";
    });
    if (str !== "Menu") setTitle(str.trim());
    else {
      setTitle(me.user.lineId);
    }
  };

  //set navigate navbar
  const setNavigate = (url: string): void => {
    navigate(url);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const onIsMe = async (): Promise<void> => {
    try {
      const me = await userRepo.me();
      setMe((prev) => {
        return Auth.create({
          ...prev.unmarshall(),
          ...me.unmarshall(),
        });
      });

      if (me.unmarshall().user.role !== "operator") {
        navigate("/caller/maintenance-handling");
      } else {
        navigate("/caller/menu");
      }
    } catch (error) {
      navigate("/login");
    }
  };
  useEffect(() => {
    onIsMe();
  }, []);
  useEffect(() => {
    const title = setInterval(() => {
      LocationMe();
    }, 1000);
    return () => {
      clearInterval(title);
    };
  }, []);

  return {
    isLoading,
    setNavigate,
    navigate,
    logout,
    me,
    title,
  };
}
