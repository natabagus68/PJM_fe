import { NavLink, Outlet } from "react-router-dom";

import { Breadcrumbs } from "@common/components";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import ConfirmCheck from "@common/components/icons-new/ConfirmCheck";

import useApprovalModel from "@features/admin/approval/approvalreport-model";
import aprovalContext from "./aprovalContex";
import ChooseInspectionModal from "./popup/choose-inspection/chooseinspection-view";

export default function ApprovalReport() {
  const model = useApprovalModel();
  return (
    <div>
      <div className="mb-5">
        <Breadcrumbs items={["Approval", "Review"]} />
      </div>
      <main className="px-8 py-6 bg-[#FFFFFF] border rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Approve E-sign</h1>
          <div className="flex gap-4">
            <button
              className="px-5 py-3 rounded flex items-center gap-2 border bg-[#FFFFFF] border-[#14988B] text-[#14988B]"
              onClick={() => model.pageBack()}
            >
              <ArrowBackIcon />
              <span>Back</span>
            </button>
          </div>
        </div>
      </main>
      <div className="flex gap-3">
        <div className="flex gap-3 flex-col">
          <div className="w-[370px] px-4 py-7 mt-4 border rounded-lg bg-[#FFFFFF] font-[400] text-[#514E4E]">
            <div className="flex justify-between mb-4 items-center">
              <h1>Status</h1>
              {!model.data.aproval.status ? (
                <span className="px-6 py-2 rounded-full text-[#FFFFFF] bg-[#F79009]">
                  Waiting
                </span>
              ) : (
                <span className="px-6 py-2 rounded-full text-[#FFFFFF] bg-[#10A560]">
                  Confirmed
                </span>
              )}
            </div>
            <div className="flex justify-between mb-4 items-center">
              <h1>Inspection ID</h1>
              <span className="font-[700]">{model.data.aproval.inspector}</span>
            </div>
            <div className="flex justify-between mb-4 items-center">
              <h1>Inspection Date</h1>
              <span className="font-[700]">
                {model.data.aproval.inspectionDate}
              </span>
            </div>
            <div className="flex justify-between mb-4 items-center">
              <h1>Confirmation Date</h1>
              <span className="font-[700]">
                {model.data.aproval.inspectionDate}
              </span>
            </div>
            <div className="flex justify-between mb-4 items-center">
              <h1>Customer</h1>
              <span className="font-[700]">{model.data.aproval.customer}</span>
            </div>
            <h1
              className="text-center text-[#14988B] cursor-pointer font-[700] underline"
              onClick={() => {}}
            >
              Show Detail
            </h1>
          </div>
          {/* <ShowDetailModel
            open={detail.open}
            setOpen={detail.setOpen}
            onClose={detail.handleShowDetailClose}
          /> */}
          <div className="w-[370px] px-4 py-7 bg-[#FFFFFF] rounded-lg border">
            {model.data.inspection?.opt ? (
              <div className="flex gap-4 items-center mb-4 px-2">
                {/* circle icon */}
                <div
                  className={`w-12 h-12 rounded-full bg-[${model.data.inspection.color}] relative`}
                >
                  <h1 className="font-bold text-white text-3xl absolute top-1.5 left-3.5">
                    {model.data.inspection.opt}
                  </h1>
                </div>

                {/* text */}
                <div className="w-[60%]">
                  <p className="text-teal-500">{model.data.inspection.desc}</p>
                </div>
              </div>
            ) : (
              <div
                className="flex items-center justify-between font-[14px] py-[18px] px-[12px] border border-[#14988B] bg-[#FBFBFB] rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  model.openChooseInspection();
                }}
              >
                <h1 className="text-[#0E6C63]">Choose Result Of Inspection</h1>
                <ArrowBackIcon className="rotate-180 mr-2" />
              </div>
            )}

            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Machine Type</h1>
              <span className="font-[700]">
                {model.data.aprovalResult.machineType}
              </span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Serial No</h1>
              <span className="font-[700]">
                {model.data.aprovalResult.serial}
              </span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>MFG Date</h1>
              <span className="font-[700]">
                {model.data.aprovalResult.MFGDate}
              </span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Capacity</h1>
              <span className="font-[700] flex gap-2">
                {model.data.aprovalResult.capasity}
                <p>ton</p>
              </span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Slide Stroke</h1>
              <span className="font-[700] flex gap-2">
                {model.data.aprovalResult.st} <p>mm</p>
              </span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Stroke Per Minutes</h1>
              <span className="font-[700] flex gap-2">
                {model.data.aprovalResult.stPerminutes}
                <p>spm</p>
              </span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Die Height</h1>
              <span className="font-[700] flex gap-2 ">
                {model.data.aprovalResult.dHeightt}
                <p>mm</p>
              </span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Slide Adjustment</h1>
              <span className="font-[700] flex gap-2">
                {model.data.aprovalResult.adjustment}
                <p>mm</p>
              </span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Dimensti Area Bloaster</h1>
              <span className="font-[700] flex gap-2">
                {model.data.aprovalResult.bloasterX}
                {" X "}
                {model.data.aprovalResult.bloasterY}
                <p>mm</p>
              </span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Dimensti Area Slide</h1>
              <span className="font-[700] flex gap-2">
                {model.data.aprovalResult.areaSlideX} <p>X</p>
                {model.data.aprovalResult.areaSlideY}
                <p>mm</p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 rounded-lg bg-[#FFFFFF] border">
          <div className="grid grid-cols-5 mt-3 border-b mx-6">
            {model.menu.map((item) => (
              <NavLink
                key={item?.id}
                onClick={() => model.handleSetNav()}
                className={`flex justify-center text-sm pb-2 mt-6 hover:pb-0 hover:border-b-2 hover:border-b-[#14988B] hover:text-[#14988B] text-[#6F6C6C] cursor-pointer
                  ${model.nav ? "border-b-[#14988B]" : "text-[#6F6C6C]"}
                `}
                to={item?.to}
              >
                {item?.label}
              </NavLink>
            ))}
          </div>
          <div className="border rounded-md mt-6 mx-6">
            <aprovalContext.Provider value={model.data}>
              <Outlet />
            </aprovalContext.Provider>
          </div>
          <div className="flex border-t mt-4 py-[16px] px-[32px] bg-[#FFFFFF] justify-end">
            <button
              className="py-[12px] px-[20px] rounded-md text-[#FFFFFF] bg-[#14988B] flex items-center gap-2"
              onClick={model.onConfirm}
            >
              <ConfirmCheck />
              <span>Confirm</span>
            </button>
          </div>
          {/* <ModalConfirm
            open={inspection.open}
            setOpen={inspection.setOpen}
            setOpenSuccess={inspection.open}
          /> */}
          <ChooseInspectionModal
            open={model.open}
            setOpen={model.setOpen}
            onCancel={() => model.closeChooseInspection()}
            onSubmit={() => model.fetchData()}
          />
        </div>
      </div>
    </div>
  );
}
