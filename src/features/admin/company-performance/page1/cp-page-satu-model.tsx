import { CompanyPerformance } from "@domain/models/company";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { companyContex } from "@features/admin/andon-layout-company/company-contex";

export const useCpPageSatu = () => {
  const navigate = useNavigate();
  const data = useContext(companyContex);

  useEffect(() => {
    const intervalId = setInterval(() => {
      navigate("../two");
    }, 30 * 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return {
    data,
  };
};
