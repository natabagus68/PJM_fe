import { CompanyPerformance } from "@domain/models/company";
import { companyContex } from "@features/admin/andon-layout-company/company-contex";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePageDua = () => {
  const navigate = useNavigate();
  const { data, setLoaction } = useContext(companyContex);

  useEffect(() => {
    const intervalId = setInterval(() => {
      navigate("../one");
    }, 30 * 1000);
    return () => {
      setLoaction("one");
      clearInterval(intervalId);
    };
  }, []);

  return {
    data,
  };
};
