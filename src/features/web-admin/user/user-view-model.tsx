import { config } from "@common/utils";
import { UserApiRepository } from "@data/api/web-admin/user-api-repository";
import { Paginate } from "@domain/models/web-admin/paginate";
import { RowsData } from "@domain/models/web-admin/rows-data";
import { FilterUser, UserAdmin } from "@domain/models/web-admin/user";
import { IUserAdminRepository } from "@domain/repositories/web-admin/user-repository";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useUserModel = () => {
  const [id, setId] = useState("");
  const userRepo: IUserAdminRepository = new UserApiRepository();
  const navigate = useNavigate();
  const [modalDelete, setModalDelete] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<FilterUser>(
    FilterUser.create({
      q: "",
      role: "",
      shortby: "fullname-asc",
      paginate: Paginate.create({
        page: 1,
        limit: 5,
        rows: 0,
      }),
    })
  );
  const [data, setData] = useState<RowsData<UserAdmin>>(
    RowsData.create({
      rows: 0,
      lastPage: 0,
      data: [],
    })
  );
  const [errorPw, setErrorPw] = useState(false);
  const [changePassword, setChangePassword] = useState<UserAdmin>(
    UserAdmin.create({
      password: "",
    })
  );
  const handlerPasswordModal = () => {
    setOpen(!open);
    setChangePassword(
      UserAdmin.create({
        password: "",
      })
    );
  };

  const HandlechangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "confirmation") {
      if (e.target.value !== changePassword.password) {
        setErrorPw(true);
      } else {
        setErrorPw(false);
      }
    } else {
      setChangePassword((prev) => {
        return UserAdmin.create({
          ...prev.unmarshall(),
          [e.target.name]: e.target.value,
        });
      });
    }
  };

  const toform = () => {
    navigate(`${config.pathPrefix}admin/user/form`);
  };
  const toDetail = (id: string) => {
    navigate(`${config.pathPrefix}admin/user/${id}/detail`);
  };

  const handleFilter = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilter((prev) => {
      return FilterUser.create({
        ...prev.unmarshall(),
        [e.target.name]: e.target.value,
      });
    });
  };

  const handleToggle = (id: string) => {
    const userId = data.data.find((item) => item.id === id).id;

    userRepo.updateToggle(userId).then(() => {
      setData((prev) => {
        return RowsData.create({
          ...prev.unmarshall(),
          data: data.data.map((item) => {
            if (item.id === userId) {
              return UserAdmin.create({
                ...item.unmarshall(),
                isActive: !item.isActive,
              });
            } else {
              return UserAdmin.create({
                ...item.unmarshall(),
              });
            }
          }),
        });
      });
    });
  };

  const chooseUserForChangePW = (id: string) => {
    console.log(id);
    setOpen(!open);
    const user = data.data.find((item) => item.id === id);
    setChangePassword((prev) => {
      return UserAdmin.create({
        ...prev.unmarshall(),
        ...user.unmarshall(),
      });
    });
  };
  const toEdit = (id: string) => {
    navigate(`${config.pathPrefix}admin/user/${id}/form`);
  };

  // fetch data
  const fetchUserData = () => {
    setLoading(true);
    userRepo.getAll(filter).then((result) => {
      setData(result);
      setLoading(false);
    });
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("email", changePassword.email);
    form.append("fullname", changePassword.fullname);
    form.append("isActive", changePassword.isActive ? "1" : "0");
    form.append("role", changePassword.role);
    form.append("password", changePassword.password);
    userRepo.update(form, changePassword.id).then(() => {
      handlerPasswordModal();
    });
  };

  const handleDelete = (id: string) => {
    setId(id);
    setModalDelete(true);
  };
  const handleCancelDelte = () => {
    setId("");
    setModalDelete(false);
  };

  const confirmDelete = async () => {
    try {
      const find = data.data.find((item) => item.id === id);
      await userRepo.delete(find.id);
      setData((prev) => {
        return RowsData.create({
          ...prev.unmarshall(),
          data: prev.data.filter((item) => item.id !== id),
        });
      });
      setId("");
      setModalDelete(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchUserData();
  }, [
    filter.q,
    filter.role,
    filter.shortby,
    filter.paginate.page,
    filter.paginate.limit,
  ]);
  return {
    toform,
    toDetail,
    handleFilter,
    handleToggle,
    toEdit,
    handlerPasswordModal,
    open,
    data,
    filter,
    loading,
    errorPw,
    changePassword,
    modalDelete,
    HandlechangePassword,
    chooseUserForChangePW,
    handleSubmit,
    handleDelete,
    handleCancelDelte,
    confirmDelete,
  };
};
