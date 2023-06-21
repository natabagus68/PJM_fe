import { AndonListener } from "@data/socket/andon-socket-listener";
import { CompanyPerformance } from "@domain/models/company";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { parentContex } from "../parent/parent-contex";

export const useCpPageSatu = () => {
  const navigate = useNavigate();
  const data = useContext(parentContex);
  // const socketAndon = new AndonListener();
  // const [data, setData] = useState<CompanyPerformance>(
  //   CompanyPerformance.create({
  //     availability: Number(0).toFixed(1),
  //     performance: Number(0).toFixed(1),
  //     quality: Number(0).toFixed(1),
  //     oeeRealtime: Number(0).toFixed(1),
  //     achievement: Number(0).toFixed(1),
  //     notGood: Number(0).toFixed(1),
  //     target: Number(0).toFixed(1),
  //     totalQuantity: Number(0).toFixed(1),
  //     avgRuntime: "",
  //     avgDowntime: "",
  //     oeeLastMonth: Number(0).toFixed(1),
  //     totalProcess: Number(0).toFixed(1),
  //     running: Number(0).toFixed(1),
  //     stop: Number(0).toFixed(1),
  //     hourlyPerformances: [],
  //   })
  // );
  // useEffect(() => {
  //   socketAndon.onAndonListener((data: CompanyPerformance) => {
  //     setData(data);
  //   });
  // }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      navigate("../company-performance-two");
    }, 30 * 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return {
    data,
  };
};
