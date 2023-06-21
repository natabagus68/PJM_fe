import { AndonListener } from "@data/socket/andon-socket-listener";
import { CompanyPerformance } from "@domain/models/company";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { parentContex } from "./parent-contex";
export const ParentCompany = () => {
  const socketAndon = new AndonListener();
  const [data, setData] = useState<CompanyPerformance>(
    CompanyPerformance.create({
      availability: Number(0),
      performance: Number(0),
      quality: Number(0),
      oeeRealtime: Number(0),
      achievement: Number(0),
      notGood: Number(0),
      target: Number(0),
      totalQuantity: Number(0),
      avgRuntime: "",
      avgDowntime: "",
      oeeLastMonth: Number(0),
      totalProcess: Number(0),
      running: Number(0),
      stop: Number(0),
      hourlyPerformances: [],
    })
  );
  useEffect(() => {
    socketAndon.onAndonListener((data: CompanyPerformance) => {
      setData(data);
    });
  }, []);
  return (
    <>
      <parentContex.Provider value={data}>
        <Outlet />
      </parentContex.Provider>
    </>
  );
};
