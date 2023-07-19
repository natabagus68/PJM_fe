import { ProcessPerformance } from "@domain/models/process";
import { ProcessContex } from "@features/admin/andon-layout-process/prcess-contex";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function usePlantOneModel() {
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
        availability: file?.[key]?.current?.availability ?? "",
        performance: file?.[key]?.current?.performance ?? "",
        quality: file?.[key]?.current?.quality ?? "",
        oeeRealtime: file?.[key]?.current?.oee ?? "",
        achievement: file?.[key]?.current?.achievement ?? "",
        notGood: file?.[key]?.current?.notGood ?? "",
        target: file?.[key]?.current?.target ?? "",
        totalQuantity: file?.[key]?.current?.totalQty ?? "",
        avgRuntime: file?.[key]?.current?.avgRuntime ?? "",
        avgDowntime: file?.[key]?.current?.avgDowntime ?? "",
        oeeLastMonth: file?.[key]?.current?.oeeLastMonth ?? "",
        totalSubProcess: file?.[key]?.current?.totalSubProcess ?? "",
        running: file?.[key]?.current?.running ?? "",
        stop: file?.[key]?.current?.stop ?? "",
        hourlyPerformances: file?.[key]?.current?.hourlyPerformance ?? [],
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     navigate("../plant-performance-two");
  //   }, 30 * 1000);
  //   return () => {
  //     setLocation("two");
  //     clearInterval(intervalId);
  //   };
  // }, []);
  useEffect(() => {
    setLocation("one");
  }, []);
  return {
    data,
  };
}
