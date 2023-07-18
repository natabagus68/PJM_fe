import { ProcessPerformance } from "@domain/models/process";
import { ProcessContex } from "@features/admin/andon-layout-process/prcess-contex";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function usePlantOneModel() {
  const navigate = useNavigate();
  const { data, setLocation } = useContext(ProcessContex);
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
