import { CompanyPerformance } from "@domain/models/company";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { companyContex } from "@features/admin/andon-layout-company/company-contex";
import { HourlyPerformance } from "@domain/models/perfomance-company";

export const useCpPageSatu = () => {
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
        availability: datas?.current?.availability,
        performance: datas?.current?.performance,
        quality: datas?.current?.quality,
        oeeRealtime: datas?.current?.oeeRealtime,
        achievement: datas?.current?.achievement,
        notGood: datas?.current?.notGood,
        target: datas?.current?.target,
        totalQuantity: datas?.current?.totalQuantity,
        avgRuntime: datas?.current?.avgRuntime,
        avgDowntime: datas?.current?.avgDowntime,
        oeeLastMonth: datas?.current?.oeeLastMonth,
        totalProcess: datas?.current?.totalProcess,
        running: datas?.current?.running,
        stop: datas?.current?.stop,
        hourlyPerformances: datas?.current?.hourlyPerformance ?? [],
      })
    );
  }, [datas]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      navigate("../two");
    }, 30 * 1000);
    return () => {
      setLoaction("two");
      clearInterval(intervalId);
    };
  }, []);

  return {
    data,
  };
};
