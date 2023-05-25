import { UserApiRepository } from "@data/api/user-api-repository";
import { User } from "@domain/models/user";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function useUserAddModal() {
  const userRepo = new UserApiRepository();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState<User>(
    User.create({
      name: "",
      email: "",
      password: "",
      role: "",
      id: "",
      photo: "",
    })
  );

  const fetchData = () => {
    userRepo.getUserById(id).then((result) => setForm(result));
  };

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let x = e as React.ChangeEvent<HTMLInputElement>;
    setForm((prev) => {
      return User.create({
        ...prev.unmarshall(),
        [e.target.name]:
          e.target.name !== "photo" ? e.target.value : x.target.files[0],
      });
    });
  };

  const handleSubmmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!id)
      userRepo.create(form).then(() => {
        navigate("../");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "New User Created",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    else {
      let val = "";
      if (form.isActive.toString() == "false") val = "0";
      else val = "1";
      const formSet = User.create({
        ...form.unmarshall(),
        isActive: Number(val),
      });
      userRepo.updateUser(id, formSet).then(() => {
        navigate("../");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, []);
  const pageBack = () => navigate("../");
  return {
    id,
    pageBack,
    form,
    handleForm,
    handleSubmmit,
  };
}

