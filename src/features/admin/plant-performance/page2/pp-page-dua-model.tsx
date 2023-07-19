import { ProcessPerformance } from "@domain/models/process";
import { ProcessContex } from "@features/admin/andon-layout-process/prcess-contex";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function usePlantTwoModel() {
  const navigate = useNavigate();
  const { data: file, setLocation, key } = useContext(ProcessContex);
  const [data, setData] = useState<ProcessPerformance>(
    ProcessPerformance.create({
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
      totalSubProcess: "",
      running: "",
      stop: "",
      hourlyPerformances: [],
    })
  );

  const fetchData = () => {
    setData(
      ProcessPerformance.create({
        availability: file?.[key]?.thisMonth?.availability ?? "",
        performance: file?.[key]?.thisMonth?.performance ?? "",
        quality: file?.[key]?.thisMonth?.quality ?? "",
        oeeRealtime: file?.[key]?.thisMonth?.oee ?? "",
        achievement: file?.[key]?.thisMonth?.achievement ?? "",
        notGood: file?.[key]?.thisMonth?.notGood ?? "",
        target: file?.[key]?.thisMonth?.target ?? "",
        totalQuantity: file?.[key]?.thisMonth?.totalQty ?? "",
        avgRuntime: file?.[key]?.thisMonth?.avgRuntime ?? "",
        avgDowntime: file?.[key]?.thisMonth?.avgDowntime ?? "",
        oeeLastMonth: file?.[key]?.thisMonth?.oeeLastMonth ?? "",
        totalSubProcess: file?.[key]?.thisMonth?.totalProcess ?? "",
        running: file?.[key]?.thisMonth?.running ?? "",
        stop: file?.[key]?.thisMonth?.stop ?? "",
        hourlyPerformances: file?.[key]?.thisMonth?.hourlyPerformance ?? [],
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
}
