import { Outlet } from "react-router-dom";
import LogoPjm from "../../../assets/logo-pjm.png";
import ChartSemiCircle from "@common/components/charts/ChartSemiCircle";
import ChartDonut from "@common/components/charts/ChartDonut";
import { useLayoutProcess } from "./layout-process-model";
import { ProcessContex } from "./prcess-contex";
export const LayoutProcess = () => {
  const layout = useLayoutProcess();
  const data = layout.data;
  // const [key] = Object.keys[data];
  return (
    <>
      <div className="flex h-screen w-screen bg-[#212121] border-4 border-white">
        {/* sidebar */}
        <div className="w-[20%] border-x-4 border-white h-full">
          <div className="w-full bg-white items-center flex justify-center h-32">
            <img src={LogoPjm} alt="" />
          </div>
          <div className="flex flex-col py-5 gap-7 items-center">
            <ChartDonut
              value={
                layout.location == "one"
                  ? data?.[layout.key]?.current?.availability ?? ""
                  : data?.[layout.key]?.thisMonth?.availability ?? ""
              }
              color={"#F59F00"}
              title={"Availability"}
            />
            <ChartDonut
              value={
                layout.location == "one"
                  ? data?.[layout.key]?.current?.performance ?? ""
                  : data?.[layout.key]?.thisMonth?.performance ?? ""
              }
              color={"#2D8DF4"}
              title={"Performance"}
            />
            <ChartDonut
              value={
                layout.location == "one"
                  ? data?.[layout.key]?.current?.quality ?? ""
                  : data?.[layout.key]?.thisMonth?.quality ?? ""
              }
              color={"#74B816"}
              title={"Quality"}
            />
          </div>
        </div>
        {/* navhead and body */}
        <div className="w-full flex flex-col">
          <div className="w-full h-32 border-b-2 border-white flex">
            <div className="border-r-2 border-white h-full text-center py-3 flex justify-center items-center w-full">
              <h1 className="text-white font-bold text-7xl">
                Process Performance
              </h1>
            </div>
            <div className="border-r-2 border-white h-full text-center py-3 flex justify-center items-center w-96">
              <h1 className="text-white font-bold text-7xl px-12">
                {layout.getDateTime("time")}
              </h1>
            </div>
          </div>

          <div className="w-full flex-1 flex flex-col">
            <ProcessContex.Provider value={layout}>
              <Outlet />
            </ProcessContex.Provider>
          </div>
        </div>
      </div>
    </>
  );
};
