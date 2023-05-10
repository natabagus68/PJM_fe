import { Breadcrumbs } from "@common/components";
import useMasterDataModel from "./masterdata-model";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon"
import SaveIcon from "@common/components/icons-new/SaveIcon"
import ModalConfirm from "@common/components/modals/ModalConfirm"

export default function MasterDataAddView() {
  const isMasterData = useMasterDataModel()
  return (
    <main className="flex flex-col gap-[28px] justify-between h-screen">
      <Breadcrumbs items={["Master Data", "Add Data"]} />
      <div className="rounded-md border">
        <div className="flex justify-between items-center border-b rounded-md bg-[#FFFFFF]">
          <h1 className="text-2xl px-6 py-8 font-bold">Add Data</h1>
          <div className="flex gap-4">
            <button
              className="border-2 px-4 py-2 mr-6 rounded bg-[#FFFFFF] border-[#14988B] text-[#14988B] flex items-center gap-2"
              onClick={() => isMasterData.pageBack()}
            >
              <ArrowBackIcon/>
              <span>Back</span>
            </button>
          </div>
        </div>
        <form className="p-[2rem] bg-[#FFFFFF] rounded-md" onSubmit={(e) => isMasterData.handleSubmitAdd(e)}>
          <h1 className="mb-2">Customer ID</h1>
          <input className="w-full border mb-[12px] h-[40px] rounded-md border-[#D0D3D9] bg-[#D0D3D9]" disabled />
          <h1 className="mb-2">Customer Name</h1>
          <input className="pl-2 w-full border mb-[12px] h-[40px] rounded-md border-[#D0D3D9]" required />
          <h1 className="mb-2">Address</h1>
          <div className="relative">
            <input className="border w-full pl-2 mb-[46px] h-[171px] rounded-md border-[#D0D3D9]" required />
            <span className="absolute right-0 bottom-[40px]">92/200</span>
            <h1 className="mb-2">Telp/Fax</h1>
          </div>
          <input className="pl-2 w-full mb-[24px] border h-[40px] rounded-md border-[#D0D3D9]" required />
          <button className="w-[249px] h-[46px] rounded-md bg-[#14988B] text-[#FFFFFF] flex items-center justify-center gap-2">
            <SaveIcon />
            <span>Save</span>
          </button>
        </form>
        <ModalConfirm open={isMasterData.open} setOpen={isMasterData.setOpen} setOpenSuccess={isMasterData.open} cb={() => isMasterData.clear()} />
      </div>
    </main>

  )
}