import { Chartbar } from "@common/components/charts/ChartBar";
import { useCpPageSatu } from "./cp-page-satu-model";

export const CompanynPerformanceOne = () => {
  const model = useCpPageSatu();
  return (
    <>
      {/* <table className="w-full">
        <thead>
          <tr>
            <th className="py-4 text-center border-2 border-white bg-neutral-500 text-[#FAB005] text-5xl w-1/3">
              OEE Real-Time
            </th>
            <th className="py-4 text-center border-2 border-white bg-neutral-500 text-[#FAB005] text-5xl w-full">
              Hourly Performance
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center items-center border-2 border-white  w-1/3 py-8">
              <h1 className="text-[#FAB005] text-9xl">72</h1>
              <p className="text-white text-3xl mt-5">%</p>
            </td>
            <td className="items-center border-2 border-white  text-[#FAB005] text-5xl w-full py-8 px-3 h-[30vh]">
              <Chartbar />
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full ">
        <thead>
          <tr>
            <th className="text-center border-2 border-white bg-neutral-500 text-[#FAB005] text-5xl">
              Achievement
            </th>
            <th className="text-center border-2 border-white bg-neutral-500 text-[#FAB005] text-5xl">
              Target
            </th>
            <th className="text-center border-2 border-white bg-neutral-500 text-[#FAB005] text-5xl">
              AVG Run Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center border-2 border-white py-8 text-white ">
              <h1 className="text-6xl font-bold">40.5</h1>
              <h1 className="text-5xl font-bold">%</h1>
            </td>
            <td className="text-center border-2 border-white py-8 text-white">
              <h1 className="text-6xl font-bold">4000</h1>
              <h1 className="text-4xl font-bold">pcs</h1>
            </td>
            <td className="text-center border-2 border-white py-8 text-[#74B816]">
              <h1 className="text-6xl font-bold">00:50:00</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center border-2 border-white bg-neutral-500 text-[#FAB005] text-4xl">
              Achievement
            </th>
            <th className="text-center border-2 border-white bg-neutral-500 text-[#FAB005] text-4xl">
              Target
            </th>
            <th className="text-center border-2 border-white bg-neutral-500 text-[#FAB005] text-4xl">
              AVG Run Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center  border-x-2 border-white   text-white ">
              <h1 className="text-6xl font-bold">40.5</h1>
              <h1 className="text-4xl font-bold">%</h1>
            </td>
            <td className="text-center  border-x-2 border-white   text-white">
              <h1 className="text-6xl font-bold">4000</h1>
              <h1 className="text-4xl font-bold">pcs</h1>
            </td>
            <td className="text-center  border-x-2 border-white   text-[#74B816]">
              <h1 className="text-6xl font-bold">00:50:00</h1>
            </td>
          </tr>
        </tbody>
      </table> */}

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
          <div className="border-2 border-white w-1/2 text-center  py-12 h-80 flex dlwx-col items-center justify-center box-border ">
            <div>
              <h1 className="text-white font-bold text-9xl">
                {model.data.oeeRealtime}
              </h1>
              <h1 className="text-white font-bold text-4xl">%</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center py-12 h-80 flex dlwx-col items-center justify-center box-border">
            <div className="w-[90%] m-auto">
              {model.data.hourlyPerformances && (
                <Chartbar
                  colors={"rgba(245, 159, 0, 1)"}
                  data={model.data.hourlyPerformances}
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
                {model.data.achievement}
              </h1>
              <h1 className="text-white font-bold text-5xl">%</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center  py-8  box-border ">
            <div>
              <h1 className="text-white font-bold text-9xl">
                {model.data.target}
              </h1>
              <h1 className="text-white font-bold text-5xl">pcs</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full text-center py-8  box-border">
            <h1 className="text-[#74B816] font-bold text-9xl">
              {model.data.avgRuntime}
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
                {model.data.notGood}
              </h1>
              <h1 className="text-[#DA3E33] font-bold text-5xl">pcs</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full items-center text-center  py-8  box-border ">
            <div>
              <h1 className="text-white font-bold text-9xl">
                {model.data.totalQuantity}
              </h1>
              <h1 className="text-white font-bold text-5xl">pcs</h1>
            </div>
          </div>
          <div className="border-2 border-white w-full items-center text-center py-8  box-border">
            <h1 className="text-[#DA3E33] font-bold text-9xl">
              {model.data.avgDowntime}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
