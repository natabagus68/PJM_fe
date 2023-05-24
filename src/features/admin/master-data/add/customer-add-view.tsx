import { Breadcrumbs } from "@common/components";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import SaveIcon from "@common/components/icons-new/SaveIcon";
import InputFile from "@common/components/input/InputFile";
import ResetIcon from "@common/components/icons-new/ResetIcon";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import useCustomerAddModel from "./customer-add-model";

export default function MasterDataAddView() {
  const data = useCustomerAddModel();
  return (
    <main className="flex flex-col gap-[28px]">
      <Breadcrumbs items={["Master Data", "Add Data"]} />
      <div className="rounded-md border">
        <div className="flex justify-between items-center border-b rounded-md bg-[#FFFFFF]">
          <h1 className="text-2xl px-6 py-8 font-bold">Add Data</h1>
          <div className="flex gap-4">
            <button
              className="px-5 py-3 mr-6 rounded flex items-center gap-2 border-2 bg-[#FFFFFF] border-[#14988B] text-[#14988B]"
              onClick={() => data.pageBack()}
            >
              <ArrowBackIcon />
              <span>Back</span>
            </button>
          </div>
        </div>
        {!data.customer ? (
          <div className="h-[500px] flex items-center justify-center">
            <LoadingIcon className="w-[24px] h-[24px] animate-spin" />
          </div>
        ) : (
          <>
            <form className="p-[2rem] bg-[#FFFFFF] rounded-md">
              <h1 className="mb-2">Customer ID</h1>
              <input
                className="px-4 py-2 w-full border mb-[12px] h-[40px] rounded-md border-[#D0D3D9] bg-[#D0D3D9]"
                disabled
              />
              <h1 className="mb-2">Customer Name</h1>
              <input
                className="px-4 py-2 w-full border mb-[12px] h-[40px] rounded-md border-[#D0D3D9] focus:border-[#14988B] focus:border-2 focus:outline-none"
                placeholder="Input Customer Name"
                name="name"
                value={data.customer.name}
                onChange={(e) => data.handleChange(e)}
              />
              <h1 className="mb-2">Address</h1>
              <div className="relative">
                <textarea
                  className="px-4 py-2 border w-full mb-[46px] h-[171px] rounded-md border-[#D0D3D9] resize-none focus:border-[#14988B] focus:border-2 focus:outline-none"
                  placeholder="Input Address Detail"
                  name="address"
                  value={data.customer.address}
                  onChange={(e) => data.handleChange(e)}
                />
                <span className="absolute right-0 bottom-[15px]">0/200</span>
              </div>
              <h1 className="mb-2">Telp/Fax</h1>
              <input
                className="px-4 py-2 w-full border rounded-md mb-[24px] h-[40px] border-[#D0D3D9] focus:border-[#14988B] focus:border-2 focus:outline-none"
                placeholder="Input Telp/Fax"
                name="phone"
                value={data.customer.phone}
                onChange={(e) => data.handleChange(e)}
              />
              <div className="border-b pb-8">
                <div className="mb-2">
                  <h1 className="my-3 font-[600]">1. Parallism</h1>
                  <h1 className="font-[400] text-sm mb-2">Images 1</h1>
                  <InputFile
                    isReset={true}
                    label="Choose"
                    htmlFor="parallel-1"
                    bgColor="bg-[#14988B]"
                    ftColor="text-[#FFFFFF]"
                    name={"parallel1"}
                    btnIcon={<ResetIcon />}
                    changeHandle={(e) => data.handleFile(e)}
                  />
                </div>
                <div>
                  <h1 className="font-[400] text-sm mb-2">Images 2</h1>
                  <InputFile
                    isReset={true}
                    label="Choose"
                    htmlFor="parallel-2"
                    defaultValue={data.customer.parallel2}
                    bgColor="bg-[#14988B]"
                    ftColor="text-[#FFFFFF]"
                    name={"parallel2"}
                    btnIcon={<ResetIcon />}
                    changeHandle={(e) => data.handleFile(e)}
                  />
                </div>
              </div>
              <div className="border-b pb-8">
                <div className="mb-2">
                  <h1 className="my-3 font-[600]">2. GIB Clearance</h1>
                  <h1 className="font-[400] text-sm mb-2">Images 1</h1>
                  <InputFile
                    isReset={true}
                    label="Choose"
                    htmlFor="Gib-1"
                    defaultValue={data.customer.gib1}
                    bgColor="bg-[#14988B]"
                    ftColor="text-[#FFFFFF]"
                    name={"gib1"}
                    btnIcon={<ResetIcon />}
                    changeHandle={(e) => data.handleFile(e)}
                  />
                </div>
                <div>
                  <h1 className="font-[400] text-sm mb-2">Images 2</h1>
                  <InputFile
                    isReset={true}
                    label="Choose"
                    htmlFor="Gib-2"
                    defaultValue={data.customer.gib2}
                    bgColor="bg-[#14988B]"
                    ftColor="text-[#FFFFFF]"
                    btnIcon={<ResetIcon />}
                    name={"gib2"}
                    changeHandle={(e) => data.handleFile(e)}
                  />
                </div>
              </div>
              <div className="border-b pb-8">
                <div className="mb-2">
                  <h1 className="my-3 font-[600]">3. Perpendicularity</h1>
                  <h1 className="font-[400] text-sm mb-2">Images 1</h1>
                  <InputFile
                    isReset={true}
                    label="Choose"
                    htmlFor="prep1"
                    defaultValue={data.customer.prep1}
                    bgColor="bg-[#14988B]"
                    ftColor="text-[#FFFFFF]"
                    btnIcon={<ResetIcon />}
                    name={"prep1"}
                    changeHandle={(e) => data.handleFile(e)}
                  />
                </div>
                <div>
                  <h1 className="font-[400] text-sm mb-2">Images 2</h1>
                  <InputFile
                    isReset={true}
                    label="Choose"
                    htmlFor="prep2"
                    defaultValue={data.customer.prep2}
                    bgColor="bg-[#14988B]"
                    ftColor="text-[#FFFFFF]"
                    name={"prep2"}
                    btnIcon={<ResetIcon />}
                    changeHandle={(e) => data.handleFile(e)}
                  />
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  data.setOpen(true);
                }}
                className="w-[249px] h-[46px] rounded-md bg-[#14988B] text-[#FFFFFF] flex items-center justify-center gap-2 mt-6"
              >
                <SaveIcon />
                <span>Save</span>
              </button>
            </form>
          </>
        )}
      </div>
      <ModalConfirm
        open={data.open}
        setOpen={data.setOpen}
        setOpenSuccess={data.open}
        onConfirm={data.handleSubmit}
      />
    </main>
  );
}