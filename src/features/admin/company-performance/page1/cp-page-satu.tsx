import { Chartbar } from "@common/components/charts/ChartBar";
import { useCpPageSatu } from "./cp-page-satu-model";

export const CompanynPerformanceOne = () => {
  const model = useCpPageSatu();
  return (
    <>
      <div>
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-1/2 text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-4xl">OEE Real-Time</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-5">
            <h1 className="text-[#F59F00] font-bold text-4xl">
              Hourly Performance
            </h1>
          </div>
        </div>
        <div className="flex w-full">
          <div className="border-2 border-white w-1/2 text-center  py-8 h-64 flex dlwx-col items-center justify-center box-border ">
            <div>
              <h1 className="text-white font-bold text-9xl">
                {model.data.oeeRealtime || 0}
              </h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center py-8 h-64 flex dlwx-col items-center justify-center box-border">
            <div className="w-[90%] m-auto">
              {model.data.hourlyPerformances && (
                <Chartbar
                  colors={"rgba(245, 159, 0, 1)"}
                  data={model?.data?.hourlyPerformances}
                />
              )}
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
              <h1 className="text-white font-bold text-9xl">
                {model.data.achievement || 0}
              </h1>
              <h1 className="text-white font-bold text-5xl">%</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center  py-8  box-border ">
            <div>
              <h1 className="text-white font-bold text-9xl">
                {model.data.target || 0}
              </h1>
              <h1 className="text-white font-bold text-5xl">pcs</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center py-8  box-border">
            <h1 className="text-[#74B816] font-bold text-9xl">
              {model.data.avgRuntime || 0}
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col">
        <div className="flex w-full">
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-5xl">Not Good</h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-5xl">
              Total Quantity
            </h1>
          </div>
          <div className="border-2 border-white bg-neutral-500  w-full text-center py-2">
            <h1 className="text-[#F59F00] font-bold text-5xl">AVG Downtime</h1>
          </div>
        </div>
        <div className="flex w-full flex-1">
          <div className="border-2 border-white w-full items-center text-center  py-8  box-border ">
            <div>
              <h1 className="text-[#DA3E33] font-bold text-9xl">
                {model.data.notGood || 0}
              </h1>
              <h1 className="text-[#DA3E33] font-bold text-5xl">pcs</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full items-center text-center  py-8  box-border ">
            <div>
              <h1 className="text-white font-bold text-9xl">
                {model.data.totalQuantity || 0}
              </h1>
              <h1 className="text-white font-bold text-5xl">pcs</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full items-center text-center py-8  box-border">
            <h1 className="text-[#DA3E33] font-bold text-9xl">
              {model.data.avgDowntime || 0}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
