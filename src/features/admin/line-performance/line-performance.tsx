import { Chartbar } from "@common/components/charts/ChartBar";
import { ChartLine } from "@common/components/charts/ChartLine";

export const LinePerformance = () => {
    
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
              <h1 className="text-[#74B816] font-bold text-8xl">78</h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center py-8  box-border">
            <div className="w-[90%] m-auto">
              <ChartLine datas={[88,52,23,67,46,84,13,47]} height={200} width={200}/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col flex-1">
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">
              Cycle
            </h1>
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
              <h1 className="text-white font-bold text-8xl">28.6</h1>
              <h1 className="text-white font-bold text-4xl">Second</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center   box-border ">
            <div>
              <h1 className="text-white font-bold text-8xl">78800</h1>
              <h1 className="text-white font-bold text-4xl">Pcs</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center box-border">
            <div>
              <h1 className="text-white font-bold text-8xl">2.996</h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center box-border">
            <div>
            <h1 className="text-[#74B816] font-bold text-7xl">00:50:00</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col flex-1">
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">
              Real Cycle
            </h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">Total Quantity</h1>
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
              <h1 className="text-white font-bold text-8xl">25.7</h1>
              <h1 className="text-white font-bold text-4xl">Second</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center   box-border ">
            <div>
              <h1 className="text-white font-bold text-8xl">7800</h1>
              <h1 className="text-white font-bold text-4xl">Pcs</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center box-border">
            <div>
              <h1 className="text-[#DA3E33] font-bold text-8xl">3</h1>
              <h1 className="text-[#DA3E33] font-bold text-4xl">Pcs</h1>
            </div>
          </div>
          <div className="flex-1 border-2 border-white flex items-center justify-center  text-center box-border">
            <div>
                <h1 className="text-[#DA3E33] font-bold text-7xl">00:50:00</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
