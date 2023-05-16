import Modal from "@common/components/modals/Modal";
import useChooseInspectionModel from "@features/admin/approval/popup/chooseinspection-model";

export default function ChooseInspectionModal({ open = false, setOpen, onCancel, onSubmit }) {
  const choose = useChooseInspectionModel()
  return (
    <Modal open={open}>
      <div className="w-[480px] bg-[#FFFFFF] mt-4 rounded-md">
        <div className="px-6 my-6">
          <h1 className="font-[600] text-2xl mb-4">Choose Result Of Inspection</h1>
          <div className="mt-5">
            {choose?.data.map(item => (
            <div key={item?.id} className="flex gap-4 mb-3 items-center text-[#0E6C63]">
              <input type="radio" name="choose_report" />
                <div className={`w-[40px] h-[40px] text-[#FFFFFF] flex items-center justify-center rounded-full font-[700] ${
                  item?.grade === "A"
                  ? "bg-[#0D824B]"
                  : item?.grade === "B"
                  ? "bg-[#7054A8]"
                  : item?.grade === "C"
                  ? "bg-[#E18308]"
                  : "bg-[#AA3028]"
                  }`}
                >
                  {item?.grade}
                </div>
                <h1 className="flex-1">{item?.label}</h1>
            </div>
            ))}
            <div className="flex gap-4 justify-center mt-8">
              <button className="w-[202px] h-[46px] rounded bg-[#FFFFFF] px-5 py-3 border" onClick={onCancel}>Cancel</button>
              <button className="w-[202px] h-[46px] rounded bg-[#14988B] text-[#FFFFFF] px-5 py-3" onClick={onSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}