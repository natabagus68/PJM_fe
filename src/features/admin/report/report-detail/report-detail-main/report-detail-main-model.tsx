import { config } from "@common/utils";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useReportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nav, setNav] = useState(1);

  const navHandle = (val: number, nav: string) => {
    setNav(val);
    navigate(`${config.pathPrefix}admin/report/${id}/detail/${nav}`);
  };
  return {
    nav,
    navHandle,
  };
};

