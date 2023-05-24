import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserApiRepository } from "@data/api/user-api-repository";
import { User } from "@domain/models/user";

export default function useUserEditModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = new UserApiRepository();

  const [loading, setLoading] = useState(false)
  const [edit, setEdit] = useState<User>(
    User.create({
      id: "",
      name: "",
      email: "",
      role: ""
    })
  );

  const handleEditById = async() => {
    try {
      const data = await user.getUserById(id)
      setTimeout(() => {
        setLoading(true)
        setEdit(data)
      }, 100)
    } catch(error) {
      console.log(error)
    }
  }

  const pageBack = () => {
    navigate("../");
  };

  useEffect(() => {
    handleEditById()
  }, [])

  return {
    edit,
    loading,
    pageBack,
  };
}