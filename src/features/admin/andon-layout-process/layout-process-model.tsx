import { Socket } from "@data/socket/_socket";
import { AndonProcessPerformanceSocket } from "@data/socket/andon-process-performance-socket";
import { ProcessPerformance } from "@domain/models/process";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useLayoutProcess = () => {
  const { processName } = useParams();
  const processRepo = new AndonProcessPerformanceSocket(Socket.getInstance());
  const [location, setLocation] = useState("one");
  const [key, setKey] = useState("");
  const [data, setData] = useState(null);

  const [newDate, setNewDate] = useState(new Date());

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

  const listenerProcess = () => {
    processRepo.ProcessSocketListener(
      "andon-process-performance",
      (data: ProcessPerformance) => {
        setData(data);
      },
      location
    );
  };

  useEffect(() => {
    const url = window.location.href;
    const last = url.split("/");
    setLocation(last[last.length - 1]);
    setKey(last[last.length - 2].split("%20").join(" ").trim());
  }, []);
  useEffect(() => {
    // Socket.getInstance().io.on("connection", () => {
    Socket.getInstance().io.emit("andon-process-performance", processName);
    listenerProcess();
    // });
  }, []);

  return {
    data,
    newDate,
    location,
    key,
    setLocation,
    getDateTime,
  };
};
