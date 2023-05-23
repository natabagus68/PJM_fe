import { Outlet } from "react-router-dom";
import { useCheckLoadTonnage } from "./check-load-tonnage-view-model";
import { useContext } from "react";
export const CheckLoadTonnage = () => {
  const model = useCheckLoadTonnage();

  return (
    <>
      <div className="w-full border border-gray-300 rounded-xl">
        <div className="w-full flex justify-end gap-4 px-9 py-4">
          <p className="font-semibold">View Mode:</p>
          <p
            className={`${
              model.toggle == "table" ? "text-cyan-600" : "text-[#B8B6B6]"
            }`}
          >
            Table
          </p>
          <div>
            <div
              onClick={model.handleTogle}
              className={`w-14 h-6 ${
                model.toggle == "table" ? "bg-cyan-600" : "bg-green-500"
              }  rounded-xl items-center py-0.5 px-1 flex`}
            >
              <label
                htmlFor="checkbox"
                className={`w-5 h-5 bg-white shadow-lg rounded-full ${
                  model.toggle === "chart" ? "translate-x-7" : ""
                }  duration-200`}
              ></label>
              <input type="checkbox" className="hidden" />
            </div>
          </div>
          <p
            className={`${
              model.toggle == "chart" ? "text-green-500" : "text-[#B8B6B6]"
            }`}
          >
            Chart
          </p>
        </div>

        <Outlet />
      </div>
    </>
  );
};

