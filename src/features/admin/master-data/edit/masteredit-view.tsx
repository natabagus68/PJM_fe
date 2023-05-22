import { Breadcrumbs } from "@common/components";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import SaveIcon from "@common/components/icons-new/SaveIcon";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ResetIcon from "@common/components/icons-new/ResetIcon";
import InputFile from "@common/components/input/InputFile";
import useMasterDataModel from "@features/admin/master-data/masterdata-model";

export default function MasterDataEditView() {
  const masterdata = useMasterDataModel()
  return (
    <main className="flex flex-col gap-[28px]">
      <Breadcrumbs items={["Master Data", "Edit Data"]} />
      <div className="rounded-md border">
        <div className="flex justify-between items-center border-b rounded-md bg-[#FFFFFF]">
          <h1 className="text-2xl px-6 py-8 font-bold">Edit Data</h1>
          <div className="flex gap-4">
            <button
              className="px-5 py-3 mr-6 rounded flex items-center gap-2 border-2 bg-[#FFFFFF] border-[#14988B] text-[#14988B]"
              onClick={() => masterdata.pageBack()}
            >
              <ArrowBackIcon/>
              <span>Back</span>
            </button>
          </div>
        </div>
        <form className="p-[2rem] bg-[#FFFFFF] rounded-md" onSubmit={(e) => masterdata.handleFormSubmit(e)}>
          <h1 className="mb-2">Customer ID</h1>
          <input
            className="px-4 py-2 w-full border mb-[12px] h-[40px] rounded-md border-[#D0D3D9] bg-[#D0D3D9]"
            value="IID66538135"
            disabled
          />
          <h1 className="mb-2">Customer Name</h1>
          <input
            className="px-4 py-2 w-full border mb-[12px] h-[40px] rounded-md border-[#D0D3D9] focus:border-[#14988B] focus:border-2 focus:outline-none"
            value="PT. Ragdalion Revolusi"
            required
          />
          <h1 className="mb-2">Address</h1>
          <div className="relative">
            <textarea
              className="px-4 py-2 border w-full mb-[46px] h-[171px] rounded-md border-[#D0D3D9] resize-none focus:border-[#14988B] focus:border-2 focus:outline-none"
              value="Cikarang Central City Blok G20, Cikarang, Bekasi"
              required
            />
            <span className="absolute right-0 bottom-[15px]">0/200</span>
          </div>
          <h1 className="mb-2">Telp/Fax</h1>
          <input
            className="px-4 py-2 w-full border rounded-md mb-[24px] h-[40px] border-[#D0D3D9] focus:border-[#14988B] focus:border-2 focus:outline-none"
            value="0986375176"
            required
          />
          <div className="border-b pb-8">
            <div className="mb-2">
              <h1 className="my-3 font-[600]">1. Parallism</h1>
              <h1 className="font-[400] text-sm">Images 1</h1>
              <InputFile
                isReset={true}
                label="Choose"
                htmlFor="parallel-1"
                value={"image_default.jpg"}
                bgColor={"#14988B"}
                ftColor={"#FFFFFF"}
              >
                <ResetIcon />
              </InputFile>
            </div>
            <div>
              <h1 className="font-[400] text-sm">Images 2</h1>
              <InputFile
                isReset={true}
                label="Choose"
                htmlFor="parallel-2"
                value={"image_default.jpg"}
                bgColor={"#14988B"}
                ftColor={"#FFFFFF"}
              >
                <ResetIcon />
              </InputFile>
            </div>
          </div>
          <div className="border-b pb-8">
            <div className="mb-2">
              <h1 className="my-3 font-[600]">2. GIB Clearance</h1>
              <h1 className="font-[400] text-sm">Images 1</h1>
              <InputFile
                isReset={true}
                label="Choose"
                htmlFor="Gib-1"
                value={"image_default.jpg"}
                bgColor={"#14988B"}
                ftColor={"#FFFFFF"}
              >
                <ResetIcon />
              </InputFile>
            </div>
            <div>
              <h1 className="font-[400] text-sm">Images 2</h1>
              <InputFile
                isReset={true}
                label="Choose"
                htmlFor="Gib-2"
                value={"image_default.jpg"}
                bgColor={"#14988B"}
                ftColor={"#FFFFFF"}
              >
                <ResetIcon />
              </InputFile>
            </div>
          </div>
          <div className="border-b pb-8">
            <div className="mb-2">
              <h1 className="my-3 font-[600]">3. Perpendicularity</h1>
              <h1 className="font-[400] text-sm">Images 1</h1>
              <InputFile
                isReset={true}
                label="Choose"
                name="prep-1"
                value={"image_default.jpg"}
                bgColor={"#14988B"}
                ftColor={"#FFFFFF"}
              >
                <ResetIcon />
              </InputFile>
            </div>
            <div>
              <h1 className="font-[400] text-sm">Images 2</h1>
              <InputFile
                isReset={true}
                label="Choose"
                name="prep-2"
                value={"image_default.jpg"}
                bgColor={"#14988B"}
                ftColor={"#FFFFFF"}
              >
                <ResetIcon />
              </InputFile>
            </div>
          </div>
          <button className="w-[249px] h-[46px] rounded-md bg-[#14988B] text-[#FFFFFF] flex items-center justify-center gap-2 mt-6">
            <SaveIcon />
            <span>Save</span>
          </button>
        </form>
      <ModalConfirm open={masterdata.open} setOpen={masterdata.setOpen} setOpenSuccess={masterdata.open} cb={() => console.log('hi')} />
    </div>
  </main>
  )
}