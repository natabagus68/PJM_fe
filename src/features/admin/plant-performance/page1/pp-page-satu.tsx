import { Chartbar } from "@common/components/charts/ChartBar";
import usePlantOneModel from "./pp-page-satu-model";

export const PlantPerformanceOne = () => {
  const plantOne = usePlantOneModel();
  return (
    <>
      <div>
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-1/2 text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">OEE Real-Time</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">
              Hourly Performance
            </h1>
          </div>
        </div>
        <div className="flex w-full">
          <div className="border-2 border-white w-1/2 text-center  py-12  box-border ">
            <div>
              <h1 className="text-[#74B816] font-bold text-9xl">78</h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center py-2  box-border">
            <div className="w-full h-full m-auto">
              <Chartbar colors={"rgba(34, 155, 216, 1)"} data={[{name : '12.00', value:30},{name : '12.00', value:30}]} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Achievement</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Target</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">AVG Run Time</h1>
          </div>
        </div>
        <div className="flex w-full">
          <div className="border-2 border-white w-full text-center  py-8  box-border ">
            <div>
              <h1 className="text-white font-bold text-9xl">7008</h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center  py-8  box-border ">
            <div>
              <h1 className="text-white font-bold text-9xl">7800</h1>
              <h1 className="text-white font-bold text-4xl">pcs</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center py-8  box-border">
            <h1 className="text-[#74B816] font-bold text-9xl">00:50:00</h1>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col">
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Not Good</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">
              Total Quantity
            </h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">AVG Downtime</h1>
          </div>
        </div>
        <div className="flex w-full flex-1">
          <div className="border-2 border-white w-full items-center text-center  py-8  box-border ">
            <div>
              <h1 className="text-[#DA3E33] font-bold text-9xl">4</h1>
              <h1 className="text-[#DA3E33] font-bold text-4xl">pcs</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full items-center text-center  py-8  box-border ">
            <div>
              <h1 className="text-white font-bold text-9xl">7800</h1>
              <h1 className="text-white font-bold text-4xl">pcs</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full items-center text-center py-8  box-border">
            <h1 className="text-[#DA3E33] font-bold text-9xl">00:50:00</h1>
          </div>
        </div>
      </div>
    </>
  );
};
