import { config } from "@common/utils";
import { useNavigate } from "react-router-dom";

export const useUserModel = () => {
  const navigate = useNavigate();
  const toform = () => {
    navigate(`${config.pathPrefix}admin/user/form`);
  };
  const toDetail = (id: string) => {
    navigate(`${config.pathPrefix}admin/user/${id}/detail`);
  };
  return {
    toform,
    toDetail,
  };
};
