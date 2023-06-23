import { Socket } from "@data/socket/_socket";
import { SubProcessPerformanceListener } from "@data/socket/andon-sub-process-socket";
import { SubProcessPerformance } from "@domain/models/sub-process";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useLayoutSubProcess = () => {
  const { processName } = useParams();
  const subProcessRepo = new SubProcessPerformanceListener(
    Socket.getInstance()
  );
  const [newDate, setNewDate] = useState(new Date());
  const [data, setData] = useState<SubProcessPerformance>(
    SubProcessPerformance.create({
      availability: "",
      performance: "",
      quality: "",
      oee: "",
      cycle: "",
      realCycle: "",
      target: "",
      totalQuantity: "",
      achievement: "",
      notGood: "",
      runtime: "",
      downtime: "",
      hourlyPerformances: [],
    })
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setNewDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const getDateTime = (status) => {
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();

    if (status === "date") {
      return `${date}${"-"}${
        month < 10 ? `0${month}` : `${month}`
      }${"-"}${year}`;
    } else if (status === "time")
      return `${hours < 10 ? `0${hours}` : `${hours}`}${":"}${
        minute < 10 ? `0${minute}` : `${minute}`
      }${":"}${second < 10 ? `0${second}` : `${second}`}`;
  };

  const subProcessListener = () => {
    subProcessRepo.subProcessPerformanceListener(
      "andon-sub-process-performance",
      (data: SubProcessPerformance) => {
        console.log("get data", data);
        setData(data);
      }
    );
  };

  useEffect(() => {
    Socket.getInstance().io.on("connect", () => {
      Socket.getInstance().io.emit(
        "andon-sub-process-performance",
        processName
      );
      subProcessListener();
    });
  }, []);

  return {
    data,
    newDate,
    getDateTime,
  };
};
