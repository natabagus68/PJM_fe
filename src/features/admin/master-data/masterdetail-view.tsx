import useMasterDataModel from "./masterdata-model"
import { Breadcrumbs } from "@common/components";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import EditIcon from "@common/components/icons-new/EditIcon";

export default function MasterDataDetailView() {
  const isMasterData = useMasterDataModel()
  return (
    <main className="flex flex-col gap-[28px] justify-between h-screen">
      <Breadcrumbs items={["Master Data", "Details"]} />
      <div className="rounded-md border">
        <div className="flex justify-between items-center border-b rounded-md bg-[#FFFFFF]">
          <h1 className="text-2xl px-6 py-8 font-bold">Customers Details</h1>
            <div className="flex">
              <button
                className="px-5 py-3 mr-6 rounded flex items-center gap-2 border-2 bg-[#FFFFFF] border-[#14988B] text-[#14988B]"
                onClick={() => isMasterData.pageBack()}
              >
                <ArrowBackIcon />
                <span>Back</span>
              </button>
            <button
              className="px-5 py-3 rounded mr-6 bg-[#F79009] text-[#FFFFFF] flex items-center gap-2"
              onClick={() => isMasterData.addData("")}>
              <EditIcon />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
   </main>
  )
}