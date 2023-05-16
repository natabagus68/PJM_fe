import { NavLink, Outlet } from "react-router-dom";
import useInspection from "@features/admin/approval/inspectionform-model";
import useShowDetailModel from "@features/admin/approval/showdetail-model";
import useChooseInspectionModel from "@features/admin/approval/popup/chooseinspection-model"
import { Breadcrumbs } from "@common/components";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import ConfirmCheck from "@common/components/icons-new/ConfirmCheck";
import ShowDetailModel from "@features/admin/approval/showdetail-view";
import ChooseInspectionModal from "@features/admin/approval/popup/chooseinspection-view"

export default function ApprovalReport() {
  const inspection = useInspection()
  const detail = useShowDetailModel()
  const choose = useChooseInspectionModel()
  return (
    <div>
      <div className="mb-5">
        <Breadcrumbs items={['Approval', 'Review']} />
      </div>
      <main className="px-8 py-6 bg-[#FFFFFF] border rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Review</h1>
          <div className="flex gap-4">
            <button
              className="px-5 py-3 rounded flex items-center gap-2 border bg-[#FFFFFF] border-[#14988B] text-[#14988B]"
              onClick={() => inspection.pageBack()}
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
              <span className="px-6 py-2 rounded-full text-[#FFFFFF] bg-[#F79009]">{inspection.data.detail?.status}</span>
            </div>
            <div className="flex justify-between mb-4 items-center">
              <h1>Inspection ID</h1>
              <span className="font-[700]">{inspection.data.detail?.inspectionId}</span>
            </div>
            <div className="flex justify-between mb-4 items-center">
              <h1>Inspection Date</h1>
              <span className="font-[700]">{inspection.data.detail?.inspectionDate}</span>
            </div>
            <div className="flex justify-between mb-4 items-center">
              <h1>Confirmation Date</h1>
              <span className="font-[700]">{inspection.data.detail?.confirmationDate}</span>
            </div>
            <div className="flex justify-between mb-4 items-center">
              <h1>Customer</h1>
              <span className="font-[700]">{inspection.data.detail?.customer}</span>
            </div>
            <h1
              className="text-center text-[#14988B] cursor-pointer font-[700] underline"
              onClick={() => detail.handleShowDetailModal()}
            >
              Show Detail
            </h1>
          </div>
          <ShowDetailModel open={detail.open} setOpen={detail.setOpen} onClose={detail.handleShowDetailClose} />
          <div className="w-[370px] px-4 py-7 bg-[#FFFFFF] rounded-lg border">
            <div
              className="flex items-center justify-between font-[14px] py-[18px] px-[12px] border border-[#14988B] bg-[#FBFBFB] rounded-lg mb-4 cursor-pointer"
              onClick={() => choose.openChooseInspection()}
            >
              <h1 className="text-[#0E6C63]">Choose Result Of Inspection</h1>
              <ArrowBackIcon className="rotate-180 mr-2" />
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Machine Type</h1>
              <span className="font-[700]">{inspection.data.result?.machineType}</span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Serial No</h1>
              <span className="font-[700]">{inspection.data.result?.serialNo}</span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>MFG Date</h1>
              <span className="font-[700]">{inspection.data.result?.mfgDate}</span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Capacity</h1>
              <span className="font-[700]">{inspection.data.result?.capacity}</span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Slide Stroke</h1>
              <span className="font-[700]">{inspection.data.result?.slideStroke}</span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Stroke Per Minutes</h1>
              <span className="font-[700]">{inspection.data.result?.strokePerMinutes}</span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Die Height</h1>
              <span className="font-[700]">{inspection.data.result?.dieHeight}</span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Slide Adjustment</h1>
              <span className="font-[700]">{inspection.data.result?.slideAdjustment}</span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Dimensti Area Bloaster</h1>
              <span className="font-[700]">{inspection.data.result?.dimensiAreaBloster}</span>
            </div>
            <div className="flex justify-between mb-4 items-center font-[400]">
              <h1>Dimensti Area Slide</h1>
              <span className="font-[700]">{inspection.data.result?.dimensiAreaSlide}</span>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 rounded-lg bg-[#FFFFFF] border">
          <div className="grid grid-cols-5 mt-3 border-b mx-6">
            {inspection.menu.map(item => (
              <NavLink
                className="flex justify-center text-sm pb-2 mt-6 hover:pb-0 hover:border-b-2 hover:border-b-[#14988B] hover:text-[#14988B] text-[#6F6C6C] cursor-pointer"
                to={item?.to}
              >
                {item?.label}
              </NavLink>
            ))}
          </div>
          <div className="border rounded-md mt-6 mx-6">
            <div className="grid grid-cols-5 text-center border-b">
              <h1 className="font-[700] p-2 col-span-2">Point Inspection</h1>
              <h1 className="border-l border-r font-[700] p-2 col-span-1">Ketetapan</h1>
              <h1 className="font-[700] p-2 col-span-2">Notes</h1>
            </div>
            <Outlet />
          </div>
            <div className="flex border-t mt-4 py-[16px] px-[32px] bg-[#FFFFFF] justify-end">
              <button
                className="py-[12px] px-[20px] rounded-md text-[#FFFFFF] bg-[#14988B] flex items-center gap-2"
                onClick={(e) => inspection.handleConfirmation(e)}
                >
                <ConfirmCheck />
                <span>Confirm</span>
                </button>
            </div>
          <ModalConfirm open={inspection.open} setOpen={inspection.setOpen} setOpenSuccess={inspection.open} />
          <ChooseInspectionModal
            open={choose.open}
            setOpen={choose.setOpen}
            onCancel={() => choose.closeChooseInspection()}
            onSubmit={() => alert("Submit")}
          />
        </div>
      </div>
    </div>
  )
}