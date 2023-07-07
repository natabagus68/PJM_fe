import { Breadcrumbs } from "@common/components";
import { Box } from "@common/components/Box";
import { ArrowLeft, SaveIcon } from "lucide-react";

export const MasterDataForm = () => {
  return (
    <>
      <Breadcrumbs items={["Master Data", "Add Data"]} />
      <div className="mt-4">
        <Box padding={false} card={true}>
          <div className="flex items-center justify-between px-[36px] py-[18px] border-b border-[#D0D3D9]">
            <h1 className="text-[#313030] font-bold text-[24px]">Add Data</h1>
            <button className="py-3 pr-5 pl-4 border border-[#514E4E] flex gap-2 items-center justify-center rounded-md">
              <ArrowLeft size={16} color="#14988B" />
              Back
            </button>
          </div>
          <div className="w-full px-[36px] mt-4">
            <form>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="line"
                  className="text-[16px] font-[400] text-[#514E4E]"
                >
                  Line
                </label>
                <input
                  type="text"
                  className="w-full py-2 px-4 border border-[#D0D3D9] rounded-md outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label
                  htmlFor="machine"
                  className="text-[16px] font-[400] text-[#514E4E]"
                >
                  Machine
                </label>
                <input
                  type="text"
                  className="w-full py-2 px-4 border border-[#D0D3D9] rounded-md outline-none"
                />
              </div>
              <button className="text-white py-3 px-5 rounded-md bg-[#20519F] flex gap-2 items-center w-[249px] justify-center mt-8">
                <SaveIcon color="white" size={16} /> Save
              </button>
            </form>
          </div>
        </Box>
      </div>
    </>
  );
};
