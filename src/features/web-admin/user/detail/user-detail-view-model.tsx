import { useNavigate } from "react-router-dom";

export const useUserDetail = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return {
    back,
  };
};
