import { config } from "@common/utils";
import { UserApiRepository } from "@data/api/web-admin/user-api-repository";
import { UserAdmin } from "@domain/models/web-admin/user";
import { IUserAdminRepository } from "@domain/repositories/web-admin/user-repository";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useUserForm = () => {
  const { id } = useParams();
  const [open, SetOpen] = useState(false);
  const userRepo: IUserAdminRepository = new UserApiRepository();
  const [loading, setLoading] = useState(false);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [data, setData] = useState<UserAdmin>(
    UserAdmin.create({
      email: "",
      role: "",
      fullname: "",
      isActive: true,
      avatar: "",
    })
  );
  const handleDialog = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    SetOpen(!open);
  };
  const navigate = useNavigate();
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

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempUrl = URL.createObjectURL(e.target.files[0]);
    setImgFile(e.target.files[0]);
    setData((prev) => {
      return UserAdmin.create({
        ...prev.unmarshall(),
        avatar: tempUrl,
      });
    });
  };

  const deleteImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setData((prev) => {
      return UserAdmin.create({
        ...prev.unmarshall(),
        avatar: "",
      });
    });
    setImgFile(null);
  };

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData((prev) => {
      return UserAdmin.create({
        ...prev.unmarshall(),
        [e.target.name]: e.target.value,
      });
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("email", data.email);
    form.append("fullname", data.fullname);
    form.append("isActive", data.isActive ? "1" : "0");
    form.append("role", data.role);
    form.append("avatarPath", imgFile);
    if (id) {
      userRepo.update(form, id).then(() => {
        navigate(`${config.pathPrefix}admin/user`);
      });
    } else {
      form.append("password", "password");
      userRepo.create(form).then(() => {
        navigate(`${config.pathPrefix}admin/user`);
      });
    }
  };

  useEffect(() => {
    if (id) {
      fetchDataUser();
    }
  }, []);

  return {
    id,
    open,
    data,
    loading,
    imgFile,
    back,
    handleForm,
    handleImage,
    deleteImage,
    handleDialog,
    handleSubmit,
  };
};
