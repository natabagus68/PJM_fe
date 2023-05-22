import { Breadcrumbs } from "@common/components";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon"
import SaveIcon from "@common/components/icons-new/SaveIcon"
import InputFile from "@common/components/input/InputFile";
import ResetIcon from "@common/components/icons-new/ResetIcon";
import useMasterDataModel from "@features/admin/master-data/masterdata-model";

export default function MasterDataAddView() {
  const masterdata = useMasterDataModel()

  return (
    <main className="flex flex-col gap-[28px]">
      <Breadcrumbs items={["Master Data", "Add Data"]} />
      <div className="rounded-md border">
        <div className="flex justify-between items-center border-b rounded-md bg-[#FFFFFF]">
          <h1 className="text-2xl px-6 py-8 font-bold">Add Data</h1>
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
        <form className="p-[2rem] bg-[#FFFFFF] rounded-md" onSubmit={(e) => e.preventDefault()}>
          <h1 className="mb-2">Customer ID</h1>
          <input
            className="px-4 py-2 w-full border mb-[12px] h-[40px] rounded-md border-[#D0D3D9] bg-[#D0D3D9]"
            placeholder="Customer ID"
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
            <span className="absolute right-0 bottom-[15px]">0/200</span>
          </div>
          <h1 className="mb-2">Telp/Fax</h1>
          <input
            className="px-4 py-2 w-full border rounded-md mb-[24px] h-[40px] border-[#D0D3D9] focus:border-[#14988B] focus:border-2 focus:outline-none"
            placeholder="Input Telp/Fax"
            required
          />
          <div className="border-b pb-8">
            <div className="mb-2">
              <h1 className="my-3 font-[600]">1. Parallism</h1>
              <h1 className="font-[400] text-sm">Images 1</h1>
              <InputFile
                label="Choose"
                htmlFor="parallel-1"
                defaultValue="image_default.jpg"
                bgColor="bg-[#B9BDC7]"
                ftColor="bg-[#FFFFFF]"
                isReset={true}
                btnName="Reset"
                btnIcon={<ResetIcon />}
                btnHandle={() => alert("paralel-1")}
              />
            </div>
            <div>
              <h1 className="font-[400] text-sm">Images 2</h1>
              <InputFile
                label="Choose"
                htmlFor="parallel-2"
                defaultValue="image_default.jpg"
                bgColor="bg-[#14988B]"
                ftColor="bg-[#FFFFFF]"
                isReset={true}
                btnName="Reset"
                btnIcon={<ResetIcon />}
                btnHandle={() => alert("paralel-2")}
              />
            </div>
          </div>
          <div className="border-b pb-8">
            <div className="mb-2">
              <h1 className="my-3 font-[600]">2. GIB Clearance</h1>
              <h1 className="font-[400] text-sm">Images 1</h1>
              <InputFile
                label="Choose"
                htmlFor="Gib-1"
                defaultValue="image_default.jpg"
                bgColor="bg-[#14988B]"
                ftColor="bg-[#FFFFFF]"
                isReset={true}
                btnName="Reset"
                btnIcon={<ResetIcon />}
                btnHandle={() => alert("Gib-1")}
              />
            </div>
            <div>
              <h1 className="font-[400] text-sm">Images 2</h1>
              <InputFile
                label="Choose"
                htmlFor="Gib-2"
                defaultValue="image_default.jpg"
                bgColor="bg-[#14988B]"
                ftColor="bg-[#FFFFFF]"
                isReset={true}
                btnName="Reset"
                btnIcon={<ResetIcon />}
                btnHandle={() => alert("Gib-2")}
              />
            </div>
          </div>
          <div className="border-b pb-8">
            <div className="mb-2">
              <h1 className="my-3 font-[600]">3. Perpendicularity</h1>
              <h1 className="font-[400] text-sm">Images 1</h1>
              <InputFile
                label="Choose"
                name="prep-1"
                defaultValue="image_default.jpg"
                bgColor="bg-[#14988B]"
                ftColor="bg-[#FFFFFF]"
                isReset={true}
                btnName="Reset"
                btnIcon={<ResetIcon />}
                btnHandle={() => alert("prep-1")}
              />
            </div>
            <div>
              <h1 className="font-[400] text-sm">Images 2</h1>
              <InputFile
                label="Choose"
                name="prep-2"
                defaultValue="image_default.jpg"
                bgColor="bg-[#14988B]"
                ftColor="bg-[#FFFFFF]"
                isReset={true}
                btnName="Reset"
                btnIcon={<ResetIcon />}
                btnHandle={() => alert("prep-2")}
              />
            </div>
          </div>
          <button className="w-[249px] h-[46px] rounded-md bg-[#14988B] text-[#FFFFFF] flex items-center justify-center gap-2 mt-6">
            <SaveIcon />
            <span>Save</span>
          </button>
        </form>
      </div>
    </main>
  )
}