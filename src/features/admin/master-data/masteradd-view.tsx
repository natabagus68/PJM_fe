import { Breadcrumbs } from "@common/components";
import useMasterDataModel from "./masterdata-model";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon"
import SaveIcon from "@common/components/icons-new/SaveIcon"
import ModalConfirm from "@common/components/modals/ModalConfirm"
import ModalSuccess from "@common/components/modals/ModalSeccess"

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
              className="px-5 py-3 mr-6 rounded flex items-center gap-2 border-2 bg-[#FFFFFF] border-[#14988B] text-[#14988B]"
              onClick={() => isMasterData.pageBack()}
            >
              <ArrowBackIcon/>
              <span>Back</span>
            </button>
          </div>
        </div>
        <form className="p-[2rem] bg-[#FFFFFF] rounded-md" onSubmit={(e) => isMasterData.handleFormSubmit(e)}>
          <h1 className="mb-2">Customer ID</h1>
          <input
            className="px-4 py-2 w-full border mb-[12px] h-[40px] rounded-md border-[#D0D3D9] bg-[#D0D3D9]"
            disabled
          />
          <h1 className="mb-2">Customer Name</h1>
          <input
            className="px-4 py-2 w-full border mb-[12px] h-[40px] rounded-md border-[#D0D3D9] focus:border-[#14988B] focus:border-2 focus:outline-none"
            placeholder="Input Customer Name"
            required />
          <h1 className="mb-2">Address</h1>
          <div className="relative">
            <textarea
              className="px-4 py-2 border w-full mb-[46px] h-[171px] rounded-md border-[#D0D3D9] resize-none focus:border-[#14988B] focus:border-2 focus:outline-none"
              placeholder="Input Address Detail"
              required
            />
            <span className="absolute right-0 bottom-[15px]">92/200</span>
          </div>
          <h1 className="mb-2">Telp/Fax</h1>
          <input className="px-4 py-2 w-full border rounded-md mb-[24px] h-[40px] border-[#D0D3D9] focus:border-[#14988B] focus:border-2 focus:outline-none" required />
          <button className="w-[249px] h-[46px] rounded-md bg-[#14988B] text-[#FFFFFF] flex items-center justify-center gap-2">
            <SaveIcon />
            <span>Save</span>
          </button>
        </form>
        <ModalConfirm open={isMasterData.open} setOpen={isMasterData.setOpen} setOpenSuccess={isMasterData.open} />
      </div>
    </main>

  )
}