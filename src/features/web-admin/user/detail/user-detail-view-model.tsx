import { config } from "@common/utils";
import { UserApiRepository } from "@data/api/web-admin/user-api-repository";
import { UserAdmin } from "@domain/models/web-admin/user";
import { IUserAdminRepository } from "@domain/repositories/web-admin/user-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useUserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userRepo: IUserAdminRepository = new UserApiRepository();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserAdmin>(
    UserAdmin.create({
      email: "",
      role: "",
      fullname: "",
      isActive: true,
      avatar: "",
    })
  );

  const back = () => {
    navigate(-1);
  };

  const fetchDataUser = () => {
    setLoading(true);
    userRepo.findByid(id).then((result) => {
      setData(result);
      setLoading(false);
    });
  };
  const toEdit = () => {
    navigate(`${config.pathPrefix}admin/user/${id}/form`);
  };
  useEffect(() => {
    fetchDataUser();
  }, []);
  return {
    back,
    data,
    toEdit,
  };
};
