import { Chartbar } from "@common/components/charts/ChartBar";
import usePlantTwoModel from "./pp-page-dua-model";

export const PlantPerformanceTwo = () => {
    const plantTwo = usePlantTwoModel()
  return (
    <>
      <div>
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-1/2 text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">OEE Real-Time</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2 ">
            <h1 className="text-[#F59F00] font-bold text-4xl">
              Hourly Performance
            </h1>
          </div>
        </div>
        <div className="flex w-full">
          <div className="border-2 border-white w-1/2 text-center  py-32   ">
            <div>
              <h1 className="text-[#74B816] font-bold text-8xl">78</h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center py-32 ">
            <div className="w-[90%] m-auto">
              <Chartbar colors={'rgba(34, 155, 216, 1)'}/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col flex-1">
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">
              OEE (Last Month)
            </h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Total IoT</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Running</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Stop</h1>
          </div>
        </div>
        <div className="flex w-full flex-1">
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center   box-border ">
            <div>
              <h1 className="text-red-500 font-bold text-8xl">78</h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center   box-border ">
            <div>
              <h1 className="text-white font-bold text-8xl">7800</h1>
              <h1 className="text-white font-bold text-4xl">Machine</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center box-border">
            <div>
              <h1 className="text-white font-bold text-8xl">7008</h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center box-border">
            <div>
              <h1 className="text-white font-bold text-8xl">7008</h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

