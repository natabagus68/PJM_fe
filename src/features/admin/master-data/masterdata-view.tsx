import useMasterDataModel from "./masterdata-model"
import { Breadcrumbs } from "@common/components";
import EditIcon from "@common/components/icons-new/EditIcon";
import ModalDelete from "@common/components/modals/ModalDelete";

export default function MasterDataView() {
  const isMasterData = useMasterDataModel()
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Master Data"]} />
      <div className="rounded-md border">
        <div className="flex justify-between items-center border-b rounded-md bg-[#FFFFFF]">
          <h1 className="text-2xl px-6 py-8 font-bold">Master Data</h1>
          <div className="flex gap-4">
            <input className="rounded-md border px-4" placeholder="Search" />
            <button
              className="bg-[#14988B] px-4 py-2 rounded text-white mr-6"
              onClick={() => isMasterData.addData("")}
            >
            + Add Data
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start font-semibold">Customer ID</th>
              <th className="px-[32px] text-start font-semibold">Customer Name</th>
              <th className="px-[32px] text-start font-semibold">Address</th>
              <th className="px-[32px] text-start font-semibold">Telp/Fax</th>
              <th className="px-[32px] text-start font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {isMasterData?.masterData.map((item) => (
              <tr key={item?.customerId} className="border-b border-[#D0D3D9] h-[64px] bg-[#FFFFFF]">
                <td className="px-[32px]">{item?.customerId}</td>
                <td className="px-[32px]">{item?.customerName}</td>
                <td className="px-[32px]">{item?.customerAddress}</td>
                <td className="px-[32px]">{item?.customerTelp}</td>
                <td className="px-[32px] flex gap-4 my-4">
                  <div className="bg-[#F79009] p-2 rounded text-white text-sm w-[96px] h-[46px] flex items-center gap-2 cursor-pointer justify-center"
                    onClick={() => isMasterData.handleEdit("")}>
                    <EditIcon width="16px"/>
                    <span>Edit</span>
                  </div>
                  <div className="bg-[#F04438] p-2 rounded text-white text-sm w-[96px] h-[46px] flex items-center gap-2 cursor-pointer justify-center"
                    onClick={() => isMasterData.handleDelete()}>
                    <EditIcon width="16px"/>
                    <span>Delete</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalDelete open={isMasterData.open} setOpen={isMasterData.setOpen} setOpenConfirm={isMasterData.open}/>
      </div>
    </main>
  )
}