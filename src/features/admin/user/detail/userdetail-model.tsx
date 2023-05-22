import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserApiRepository } from "@data/api/user-api-repository";
import { User } from "@domain/models/user";

export default function useDetailModel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = new UserApiRepository();

  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState<User>(
    User.create({
      id: "",
      name: "",
      email: "",
      role: "",
      photo: "",
      isActive: null,
    })
  );

  const getDetailById = async () => {
    try {
      const detail = await user.getUserById(id)
      setTimeout(() => {
        setLoading(true);
        setDetail(detail);
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailById();
  }, []);

  const pageBack = () => navigate("../");

  return {
    loading,
    detail,
    pageBack,
    getDetailById,
  };
}
