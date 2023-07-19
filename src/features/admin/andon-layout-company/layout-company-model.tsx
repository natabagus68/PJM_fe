import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AndonCompanyPerformanceListener } from "@data/socket/andoncompany-performance-socket-listener";
import { CompanyPerformance } from "@domain/models/company";
import { Socket } from "@data/socket/_socket";

export default function uselayout() {
  const { processName } = useParams();
  const socketAndon = new AndonCompanyPerformanceListener(Socket.getInstance());
  const [loactionMe, setLoaction] = useState("one");
  const [datas, setDatas] = useState(null);
  const [newDate, setNewDate] = useState(new Date());
  let location = useLocation();

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

  const getTitleHeader = () => {
    if (location.pathname.includes("plant-performance")) {
      return "Process Performance";
    } else if (location.pathname.includes("company-performance")) {
      return "Company Performance";
    } else if (location.pathname.includes("line-performance")) {
      return "Sub Process Performance";
    }
  };

  useEffect(() => {
    const url = window.location.href;
    const last = url.split("/");
    setLoaction(last[last.length - 1]);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const url = window.location.href;
      const last = url.split("/");
      setLoaction(last[last.length - 1]);
    }, 30 * 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    socketAndon.onAndonListener("andon-company-performance", (data) => {
      console.log(data);
      setDatas(data);
    });
  }, []);
  return {
    getDateTime,
    getTitleHeader,
    datas,
    loaction: loactionMe,
    setLoaction,
  };
}
