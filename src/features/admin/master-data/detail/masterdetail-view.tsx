import { Navigate } from "react-router-dom";
import { Breadcrumbs } from "@common/components";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import useMasterDataModel from "@features/admin/master-data/masterdata-model";
import PLeft from "../../../../assets/parallel-left.png";
import PRight from "../../../../assets/parallel-right.png";
import GLeft from "../../../../assets/gib-left.png";
import GRight from "../../../../assets/gib-right.png";
import PRLeft from "../../../../assets/perpen-left.png"
import PRRight from "../../../../assets/perpen-right.png"

export default function MasterDataDetailView() {
  const masterdata = useMasterDataModel()
  const data = masterdata.data?.filter((item, i) => i === 0 ? {item} : null)[0]
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Master Data", "Details"]} />
      <div className="rounded-md border bg-[#FFFFFF]">
        <div className="flex justify-between items-center border-b">
          <h1 className="text-2xl px-6 py-8 font-bold">Customers Details</h1>
            <div className="flex">
              <button
                className="px-5 py-3 mr-6 rounded flex items-center gap-2 border-2 bg-[#FFFFFF] border-[#14988B] text-[#14988B]"
                onClick={() => masterdata.pageBack()}
              >
                <ArrowBackIcon />
                <span>Back</span>
              </button>
            <button
              className="px-5 py-3 rounded mr-6 bg-[#F79009] text-[#FFFFFF] flex items-center gap-2"
              onClick={() => alert("EDIT!")}>
              <EditIcon />
              <span>Edit</span>
            </button>
          </div>
        </div>
        <div className="px-6 py-8 border-b">
          <h1 className="font-[400] text-2xl mb-6">General Information</h1>
          <div className="text-[#514E4E]">
            <div className="grid grid-cols-4 px-4 py-[6px] bg-[#D0D3D9]">
              <h1 className="font-[400]">Customer ID</h1>
              <span className="font-[600]">{data?.customerId}</span>
            </div>
            <div className="grid grid-cols-4 px-4 py-[6px]">
              <h1 className="font-[400]">Customer Name</h1>
              <span className="font-[600]">{data?.customerName}</span>
            </div>
            <div className="grid grid-cols-4 px-4 py-[6px] bg-[#D0D3D9]">
              <h1 className="font-[400]">Customer Address</h1>
              <span className="font-[600]">{data?.customerAddress}</span>
            </div>
            <div className="grid grid-cols-4 px-4 py-[6px]">
              <h1 className="font-[400]">Telp/Fax</h1>
              <span className="font-[600]">{data?.customerTelp}</span>
            </div>
          </div>
        </div>
        <div className="px-6 py-8">
          <h1 className="font-[400] text-2xl mb-[20px]">Accuracy Check Image</h1>
          <div className="border-b pb-9">
            <h1 className="mb-3 text-sm font-[700]">1. Parallelism</h1>
            <div className="flex gap-14">
              <img src={PLeft}/>
              <img src={PRight}/>
            </div>
          </div>
          <div className="border-b py-9">
            <h1 className="mb-3 text-sm font-[700]">2. GIB Clearance</h1>
            <div className="flex gap-14">
              <img src={GLeft}/>
              <img src={GRight}/>
            </div>
          </div>
          <div className="border-b py-9">
            <h1 className="mb-3 text-sm font-[700]">3. Perpendicularity</h1>
            <div className="flex gap-14">
              <img src={PRLeft}/>
              <img src={PRRight}/>
            </div>
          </div>
        </div>
      </div>
   </main>
  )
}