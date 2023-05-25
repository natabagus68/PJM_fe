import { Breadcrumbs } from "@common/components";
import { Outlet } from "react-router-dom";
import { useReportDetail } from "./report-detail-main-model";
import ReportContex from "./report-useContex";
export const ReportDetailMain = () => {
  const model = useReportDetail();
  return (
    <>
      <div>
        <Breadcrumbs items={["Report Document", "Details"]} />
      </div>
      {/* header */}
      <div className="w-full  py-6 px-4 border-b border border-gray-300 mt-12 bg-white rounded-xl flex justify-between">
        <h1 className="font-semibold text-3xl text-natural-300">Details</h1>
        <div className="flex gap-3 items-center">
          <button
            onClick={model.toBack}
            className="bg-transparent border border-teal-500 flex gap-1 text-center items-center text-teal-500 py-3 px-5 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
            back
          </button>

          <button className="px-5 py-3 rounded-md bg-teal-500 text-white flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Report
          </button>
        </div>
      </div>

      {/* main */}
      <main className="w-full flex mt-12">
        {/* left */}
        <section className="w-[36%] flex flex-col gap-5">
          {/* card-left 1 */}
          <div className="w-full border border-gray-300 rounded-xl items-center bg-white px-3 py-3">
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Inspection ID</p>
              <p className="font-semibold">{model.data.aproval.inspectionID}</p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Inspection Date</p>
              <p className="font-semibold">
                {model.data.aproval.inspectionDate}
              </p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Confirmation Date</p>
              <p className="font-semibold">{model.data.aproval.confirmation}</p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Inspector</p>
              <p className="font-semibold">{model.data.aproval.inspector}</p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Customer</p>
              <p className="font-semibold">{model.data.aproval.customer}</p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Person In Charge</p>
              <p className="font-semibold">{model.data.aproval.inspector}</p>
            </div>
            <div className="w-full text-center py-3">
              <h3 className="text-teal-500 font-semibold text-xl cursor-pointer hover:text-teal-600">
                Show Detail
              </h3>
            </div>
          </div>
          {/* card-left 2 */}
          <div className="w-full border border-gray-300 rounded-xl items-center bg-white px-3 py-4">
            <div className="flex gap-4 items-center mb-4 px-2">
              {/* circle icon */}
              <div
                className={`w-12 h-12 rounded-full bg-[${model.data.inspection?.color}] relative`}
              >
                <h1 className="font-bold text-white text-3xl absolute top-1.5 left-3.5">
                  {model.data.inspection?.opt}
                </h1>
              </div>

              {/* text */}
              <div className="w-[60%]">
                <p className="text-teal-500">{model.data.inspection?.desc}</p>
              </div>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Machine Type</p>
              <p className="font-semibold">
                {model.data.aprovalResult.machineType}
              </p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Serial No.</p>
              <p className="font-semibold">{model.data.aprovalResult.serial}</p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>MFG Date</p>
              <p className="font-semibold">
                {model.data.aprovalResult.MFGDate}
              </p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Capacity</p>
              <p className="font-semibold">
                {model.data.aprovalResult.capasity}
              </p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Slide Stroke</p>
              <p className="font-semibold">{model.data.aprovalResult.st}</p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Stroke Per Minute</p>
              <p className="font-semibold">
                {model.data.aprovalResult.stPerminutes}
              </p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Die Height</p>
              <p className="font-semibold">
                {model.data.aprovalResult.dHeightt}
              </p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Slide Adjustment</p>
              <p className="font-semibold">
                {model.data.aprovalResult.adjustment}
              </p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Dimensi Area Bloster</p>
              <p className="font-semibold">
                {model.data.aprovalResult.bloasterX} x{" "}
                {model.data.aprovalResult.bloasterY} mm
              </p>
            </div>
            <div className="w-full py-3 px-2 flex justify-between">
              <p>Dimensi Area Slide</p>
              <p className="font-semibold">
                {model.data.aprovalResult.areaSlideX} x{" "}
                {model.data.aprovalResult.areaSlideY}
              </p>
            </div>
            <div className="w-full text-center py-3">
              <h3 className="text-teal-500 font-semibold text-xl cursor-pointer hover:text-teal-600">
                Show Detail
              </h3>
            </div>
          </div>
        </section>
        {/* right */}
        <section className="w-full pl-5 ">
          {/* card */}
          <div className="w-full rounded-xl border border-gray-300 py-8 px-3 max-h-full bg-white">
            {/* navigate */}
            <div
              className={`w-full flex justify-between border-b border-natural-200 mb-8 `}
            >
              <div
                className={`text-center cursor-pointer px-4  py-2 ${
                  model.nav == 1 && "border-b border-teal-500"
                } `}
                onClick={() => model.navHandle(1, "")}
              >
                <p className="text-natural-200 font-semibold text-xl">
                  Inspection Form
                </p>
              </div>
              <div
                className={`text-center cursor-pointer px-4  py-2 ${
                  model.nav == 2 && "border-b border-teal-500"
                } `}
                onClick={() => model.navHandle(2, "machine-check")}
              >
                <p className="text-natural-200 font-semibold text-xl">
                  Machine Check
                </p>
              </div>
              <div
                className={`text-center cursor-pointer px-4  py-2 ${
                  model.nav == 3 && "border-b border-teal-500"
                } `}
                onClick={() => model.navHandle(3, "acuracy-check")}
              >
                <p className="text-natural-200 font-semibold text-xl">
                  Accuracy Check
                </p>
              </div>
              <div
                className={`text-center cursor-pointer px-4  py-2 ${
                  model.nav == 4 && "border-b border-teal-500"
                } `}
                onClick={() => model.navHandle(4, "check-load-tonnage")}
              >
                <p className="text-natural-200 font-semibold text-xl">
                  Check Load Tonnage
                </p>
              </div>
              <div
                className={`text-center cursor-pointer px-4  py-2 ${
                  model.nav == 5 && "border-b border-teal-500"
                } `}
                onClick={() => model.navHandle(5, "resume-check")}
              >
                <p className="text-natural-200 font-semibold text-xl">
                  Resume Check
                </p>
              </div>
            </div>
            <ReportContex.Provider value={model.data}>
              <Outlet />
            </ReportContex.Provider>
          </div>
        </section>
      </main>
    </>
  );
};

