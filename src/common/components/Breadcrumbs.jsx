import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaretIcon, HomeIcon } from "./icons/index.js";
import moment from "moment";

export const Breadcrumbs = ({ items = [] }) => {
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();
  const generateLink = (i, arr) => {
    if (i != arr.length - 1) {
      let linkStr = "";
      for (let j = arr.length - i - 1; j >= 1; j--) {
        linkStr += "../";
      }
      return linkStr;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-3 text-[#B8B6B6] font-body items-center">
          <HomeIcon />
          {items.map((item, i, arr) => {
            return (
              <div key={i} className="flex gap-3 items-center">
                <CaretIcon className="text-[#B8B6B6]" />
                <div
                  onClick={() =>
                    items[i] &&
                    i < arr.length - 1 &&
                    navigate(generateLink(i, arr))
                  }
                  className={`font-semibold ${
                    i == arr.length - 1
                      ? "font-[600] text-[#6F6C6C]"
                      : "font-[400] text-[#B8B6B6]"
                  } ${items[i] && i < arr.length - 1 && "cursor-pointer"}`}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-[#6F6C6C] text-[16px] font-[600] font-sans">
          shift 1 {moment(time).format("| LT - MM/DD/YYYY")}
        </p>
      </div>
    </>
  );
};
