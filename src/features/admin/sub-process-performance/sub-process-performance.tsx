import { Chartbar } from "@common/components/charts/ChartBar";
import { ChartLine } from "@common/components/charts/ChartLine";
import { useSubProcessPerformance } from "./sub-process-performance-model";

export const SubProcessPerformance = () => {
  const model = useSubProcessPerformance();
  return (
    <>
      <div>
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-1/3 text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">OEE</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">
              Hourly Performance
            </h1>
          </div>
        </div>
        <div className="flex w-full">
          <div className="border-2 border-white w-1/3 text-center  py-8  box-border ">
            <div>
              <h1 className="text-[#74B816] font-bold text-8xl">
                {model.data.oee || 0}
              </h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center py-8  box-border">
            <div className="w-[90%] m-auto">
              <ChartLine
                datas={model.data.hourlyPerformances}
                height={200}
                width={200}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col flex-1">
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Cycle</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Target</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Achievement</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Run Time</h1>
          </div>
        </div>
        <div className="flex w-full flex-1">
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center   box-border ">
            <div>
              <h1 className="text-white font-bold text-8xl">
                {model.data.cycle || 0}
              </h1>
              <h1 className="text-white font-bold text-4xl">Second</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center   box-border ">
            <div>
              <h1 className="text-white font-bold text-8xl">
                {model.data.target || 0}
              </h1>
              <h1 className="text-white font-bold text-4xl">Pcs</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center box-border">
            <div>
              <h1 className="text-white font-bold text-8xl">
                {model.data.achievement || 0}
              </h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center box-border">
            <div>
              <h1 className="text-[#74B816] font-bold text-8xl">
                {model.data.runtime || 0}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col flex-1">
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Real Cycle</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">
              Total Quantity
            </h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Not Good</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Downtime</h1>
          </div>
        </div>
        <div className="flex w-full flex-1">
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center   box-border ">
            <div>
              <h1 className="text-white font-bold text-8xl">
                {model.data.realCycle || 0 || 0}
              </h1>
              <h1 className="text-white font-bold text-4xl">Second</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center   box-border ">
            <div>
              <h1 className="text-white font-bold text-8xl">
                {model.data.totalQuantity || 0}
              </h1>
              <h1 className="text-white font-bold text-4xl">Pcs</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center box-border">
            <div>
              <h1 className="text-[#DA3E33] font-bold text-8xl">
                {model.data.notGood || 0}
              </h1>
              <h1 className="text-[#DA3E33] font-bold text-4xl">Pcs</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center box-border">
            <div>
              <h1 className="text-[#DA3E33] font-bold text-8xl">
                {model.data.downtime || 0}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
