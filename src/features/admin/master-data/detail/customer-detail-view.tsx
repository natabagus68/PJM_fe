import { Breadcrumbs } from "@common/components";
import { config } from "@common/utils";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import useCustomerDetailModel from "./customer-detail-model";

export default function MasterDataDetailView() {
  const data = useCustomerDetailModel()
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Master Data", "Details"]} />
      <div className="rounded-md border bg-[#FFFFFF]">
        <div className="flex justify-between items-center border-b">
          <h1 className="text-2xl px-6 py-8 font-bold">Customers Details</h1>
            <div className="flex">
              <button
                className="px-5 py-3 mr-6 rounded flex items-center gap-2 border-2 bg-[#FFFFFF] border-[#14988B] text-[#14988B]"
                onClick={() => data.pageBack()}
              >
                <ArrowBackIcon />
                <span>Back</span>
              </button>
            <button
              className="px-5 py-3 rounded mr-6 bg-[#F79009] text-[#FFFFFF] flex items-center gap-2"
              onClick={() => data.goToEditCustomer(data.id)}>
              <EditIcon />
              <span>Edit</span>
            </button>
          </div>
        </div>
        <div className="px-6 py-8 border-b">
          <h1 className="font-[400] text-2xl mb-6">General Information</h1>
          <div className="text-[#514E4E]">
            {
              !data.loading ? (
                  <div className="h-[500px] flex items-center justify-center">
                    <LoadingIcon className="w-[24px] h-[24px] animate-spin" />
                  </div>
              ) : (
                <>
                  <div className="grid grid-cols-4 px-4 py-[6px] bg-[#D0D3D9]">
                    <h1 className="font-[400]">Customer ID</h1>
                    <span className="font-[600]">{ data.customer.customerId }</span>
                  </div>
                  <div className="grid grid-cols-4 px-4 py-[6px]">
                    <h1 className="font-[400]">Customer Name</h1>
                    <span className="font-[600]">{ data.customer.name }</span>
                  </div>
                  <div className="grid grid-cols-4 px-4 py-[6px] bg-[#D0D3D9]">
                    <h1 className="font-[400]">Customer Address</h1>
                    <span className="font-[600]">{ data.customer.address }</span>
                  </div>
                  <div className="grid grid-cols-4 px-4 py-[6px]">
                    <h1 className="font-[400]">Telp/Fax</h1>
                    <span className="font-[600]">{ data.customer.phone }</span>
                  </div>
                </>
              )
            }
          </div>
        </div>
        <div className="px-6 py-8">
          <h1 className="font-[400] text-2xl mb-[20px]">Accuracy Check Image</h1>
          {
            !data.loading ? (
              <div className="h-[500px] flex items-center justify-center">
                <LoadingIcon className="w-[24px] h-[24px] animate-spin" />
              </div>
            ) : (
              <>
              <div className="border-b pb-16">
                <h1 className="mb-3 text-sm font-[700]">1. Parallelism</h1>
                <div className="grid grid-cols-[256px_256px] h-[100px] gap-14">
                  <img src={`${config.assetsUrl}${data.customer.parallel1}`}/>
                  <img src={`${config.assetsUrl}${data.customer.parallel2}`}/>
                </div>
              </div>
              <div className="border-b pb-16">
                <h1 className="mb-3 text-sm font-[700]">2. GIB Clearance</h1>
                <div className="grid grid-cols-[256px_256px] h-[100px] gap-14">
                  <img src={`${config.assetsUrl}${data.customer.gib1}`}/>
                  <img src={`${config.assetsUrl}${data.customer.gib2}`}/>
                </div>
              </div>
              <div className="border-b pb-16">
                <h1 className="mb-3 text-sm font-[700]">3. Perpendicularity</h1>
                <div className="grid grid-cols-[256px_256px] h-[100px] gap-14">
                  <img src={`${config.assetsUrl}${data.customer.prep1}`}/>
                  <img src={`${config.assetsUrl}${data.customer.prep2}`}/>
                </div>
              </div>
            </>
            )
          }
        </div>
      </div>
   </main>
  )
}