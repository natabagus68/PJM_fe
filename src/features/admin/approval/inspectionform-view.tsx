import useInspection from "@features/admin/approval/inspectionform-model";
import { Breadcrumbs } from '@common/components';
import ModalConfirm from "@common/components/modals/ModalConfirm"
import ArrowBackIcon from '@common/components/icons-new/ArrowBackIcon';
import ConfirmCheck from '@common/components/icons-new/ConfirmCheck';

export default function ApprovalInspectionFormView() {
  const inspection = useInspection()
  return (
    <>
      <div className="mb-5">
        <Breadcrumbs items={['Approval', 'Review']} />
      </div>
      <main className="px-8 py-6 bg-[#FFFFFF] border rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Review</h1>
          <div className="flex gap-4">
            <button
                className="px-5 py-3 rounded flex items-center gap-2 border bg-[#FFFFFF] border-[#14988B] text-[#14988B]"
                onClick={() => inspection.pageBack()}>
                <ArrowBackIcon />
                <span>Back</span>
            </button>
          </div>
        </div>
      </main>
      <div className="flex gap-3">
        <div>
          <div className="w-[370px] px-4 py-7 mt-4 border rounded-lg bg-[#FFFFFF] font-[400] text-[#514E4E] mb-3">
            {Object.keys(inspection.status).map(item => (
              <div className="flex justify-between mb-4 items-center" key={item}>
                <h1>{item}</h1>
                <span
                    className={
                      item === "Status"
                      ? "px-6 py-2 rounded-full text-[#FFFFFF] bg-[#F79009]"
                      : "font-[600]" }>
                    {inspection.status[item]}
                </span>
              </div>
            ))}
            <h1
              className="text-center text-[#14988B] cursor-pointer font-[700] underline"
              onClick={() => inspection.handleShowDetail()}
            >
              Show Detail
            </h1>
            <div></div>
          </div>
          <div className="w-[370px] px-4 py-7 bg-[#FFFFFF] rounded-lg border">
            <div className="flex items-center justify-between font-[14px] py-[18px] px-[12px] border border-[#14988B] bg-[#FBFBFB] rounded-lg mb-4 cursor-pointer">
                <h1 className="text-[#0E6C63]">Choose Result Of Inspection</h1>
                <ArrowBackIcon className="rotate-180 mr-2" />
            </div>
            {Object.keys(inspection.result).map(item => (
              <div className="flex justify-between mb-4 items-center font-[400]" key={item}>
                <h1>{item}</h1>
                <span className="font-[700]">{inspection.result[item]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-4 border rounded-lg bg-[#FFFFFF]">
          <ul className="flex gap-3 justify-center mt-2 border-b">
            {inspection.menu.map(item => (
              <li
                key={item.id}
                className="font-[700] pb-2 hover:border-b-2 hover:border-b-[#14988B] hover:text-[#14988B] text-[#6F6C6C] cursor-pointer"
              >
              {item.menu}
              </li>
            ))}
          </ul>
          {/*
          <div className="flex border-t mt-4 py-[16px] px-[32px] bg-[#FFFFFF] justify-end">
            <button
                className="py-[12px] px-[20px] rounded-md text-[#FFFFFF] bg-[#14988B] flex items-center gap-2"
                onClick={(e) => inspection.handleConfirm(e)}
              >
              <ConfirmCheck />
              <span>Confirm</span>
              </button>
          </div>
          <ModalConfirm open={inspection.open} setOpen={ispection.setOpen} setOpenSuccess={inspection.open} />
        */}
      </div>
    </div>
  </>
  )
}