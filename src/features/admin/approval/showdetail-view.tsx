import useShowDetailModel from "@features/admin/approval/showdetail-model";
import CloseIcon from "@common/components/icons-new/CloseIcon";
import Modal from "@common/components/modals/Modal";

export default function ShowDetailModel({ open = false, setOpen, onClose }) {
  const detail = useShowDetailModel()
  return (
    <Modal open={open}>
      <div className="w-[500px] px-4 mt-4 rounded-lg bg-[#FFFFFF] font-[400] text-[#514E4E]">
        <div className="flex justify-between mb-6">
          <h1 className="text-[#6F6C6C] text-2xl font-[700]">Customer Detail Info</h1>
          <CloseIcon className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="border-b mb-4">
          <div className="flex justify-between mb-4 items-center">
            <h1>Status</h1>
            <span className="px-6 py-2 rounded-full text-[#FFFFFF] bg-[#10A560]">{detail.data?.status}</span>
          </div>
          <div className="flex justify-between mb-4 items-center">
            <h1>Inspection ID</h1>
            <span className="font-[600]">{detail.data?.inspectionId}</span>
          </div>
          <div className="flex justify-between mb-4 items-center">
            <h1>Inspection Date</h1>
            <span className="font-[600]">{detail.data?.inspectionDate}</span>
          </div>
          <div className="flex justify-between mb-4 items-center">
            <h1>Confirmation Date</h1>
            <span className="font-[600]">{detail.data?.confirmDate}</span>
          </div>
          <div className="flex justify-between mb-6 items-center">
            <h1>Inspector</h1>
            <span className="font-[600]">{detail.data?.inspector}</span>
          </div>
        </div>
        <div className="flex justify-between mb-4 items-center">
          <h1>Customer</h1>
          <span className="font-[700]">{detail.data?.customer}</span>
        </div>
        <div className="flex justify-between mb-4 items-center">
          <h1>Telp/Fax</h1>
          <span className="font-[600]">{detail.data?.telp}</span>
        </div>
        <div className="flex justify-between mb-4 items-center">
          <h1>Address</h1>
          <span className="w-[291px] font-[600] inline-block text-right">{detail.data?.address}</span>
        </div>
        <div className="flex justify-between mb-4 items-center">
          <h1>Person In Charge</h1>
          <span className="font-[600]">{detail.data?.personInChange}</span>
        </div>
      </div>
    </Modal>
  )
}