import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserApiRepository } from "@data/api/user-api-repository";
import { User } from "@domain/models/user";

export default function useUserModel() {
  const navigate = useNavigate();
  const user = new UserApiRepository();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const getUserData = async () => {
    try {
      const data = await user.getAllData();
      setTimeout(() => {
        setLoading(true);
        setUsers(data);
      }, 100);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateIsactive = async (id: string) => {
    const data = users.find((item) => item.id == id);
    const result = User.create({
      ...data.unmarshall(),
      isActive: !data.unmarshall().isActive ? 1 : 0,
    });

    console.log(result);
    await user.updateUser(id, result);
  };
  const handleAddUser = (): void => {
    navigate("add/useradd-view");
  };

  const handleDetail = (id: string): void => {
    navigate(`detail/${id}/userdetail-view`);
  };

  const handleEdit = (id: string): void => {
    navigate(`edit/${id}/useredit-view`);
  };

  const pageBack = (): void => {
    navigate("../");
  };

  useEffect(() => {
    getUserData();
  }, []);

  return {
    users,
    setUsers,
    open,
    loading,
    setLoading,
    pageBack,
    handleAddUser,
    handleDetail,
    handleEdit,
    updateIsactive,
  };
}
