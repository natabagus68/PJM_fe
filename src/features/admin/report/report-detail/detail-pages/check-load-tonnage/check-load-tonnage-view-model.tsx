import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCheckLoadTonnage = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState("table");
  const handleTogle = () => {
    if (toggle === "table") setToggle("chart");
    else setToggle("table");
  };

  useEffect(() => {
    navigate(toggle);
  }, [toggle]);
  return {
    toggle,
    handleTogle,
  };
};
