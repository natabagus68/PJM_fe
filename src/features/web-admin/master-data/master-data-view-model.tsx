import { config } from "@common/utils";
import { useNavigate } from "react-router-dom";

export const useMasterData = () => {
  const navigate = useNavigate();
  const toForm = () => {
    navigate(`${config.pathPrefix}admin/master-data/form`);
  };
  return {
    toForm,
  };
};
