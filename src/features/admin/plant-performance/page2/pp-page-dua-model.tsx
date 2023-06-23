import { ProcessPerformance } from "@domain/models/process";
import { ProcessContex } from "@features/admin/andon-layout-process/prcess-contex";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function usePlantTwoModel() {
  const navigate = useNavigate();
  const data: ProcessPerformance = useContext(ProcessContex);
  // useEffect(() =>{
  //     const intervalId = setInterval(() => {
  //         navigate('../plant-performance-one')
  //       }, 30*1000);
  //       return () => {
  //         clearInterval(intervalId);
  //       };
  // },[])

  return { data };
}
