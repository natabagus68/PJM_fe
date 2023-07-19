import { CompanyPerformance } from "@domain/models/company";
import { HourlyPerformance } from "@domain/models/hourly-performance";
import { companyContex } from "@features/admin/andon-layout-company/company-contex";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePageDua = () => {
  const navigate = useNavigate();
  const { datas, setLoaction } = useContext(companyContex);
  const [data, setData] = useState<CompanyPerformance>(
    CompanyPerformance.create({
      availability: "",
      performance: "",
      quality: "",
      oeeRealtime: "",
      achievement: "",
      notGood: "",
      target: "",
      totalQuantity: "",
      avgRuntime: "",
      avgDowntime: "",
      oeeLastMonth: "",
      totalProcess: "",
      running: "",
      stop: "",
      hourlyPerformances: [],
    })
  );

  useEffect(() => {
    setData(
      CompanyPerformance.create({
        availability: datas?.thisMonth?.availability,
        performance: datas?.thisMonth?.performance,
        quality: datas?.thisMonth?.quality,
        oeeRealtime: datas?.thisMonth?.oee,
        achievement: datas?.thisMonth?.achievement,
        notGood: datas?.thisMonth?.notGood,
        target: datas?.thisMonth?.target,
        totalQuantity: datas?.thisMonth?.totalQty,
        avgRuntime: datas?.thisMonth?.avgRuntime,
        avgDowntime: datas?.thisMonth?.avgDowntime,
        oeeLastMonth: datas?.thisMonth?.oeeLastMonth,
        totalProcess: datas?.thisMonth?.totalProcess,
        running: datas?.thisMonth?.running,
        stop: datas?.thisMonth?.stop,
        hourlyPerformances: datas?.thisMonth?.hourlyPerformance ?? [],
      })
    );
  }, [datas]);
  useEffect(() => {
    setLoaction("two");
  }, []);

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
