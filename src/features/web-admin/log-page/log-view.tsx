import { Breadcrumbs } from "@common/components";
import { Box } from "@common/components/Box";
import { Filter } from "@common/components/Filter";
import PaginationNew from "@common/components/pagination/PaginationNew";
import { ChevronDown, DownloadIcon } from "lucide-react";
import Datepicker from "react-tailwindcss-datepicker";
import { useLogModel } from "./log-view-model";

export const Log = () => {
  const model = useLogModel();
  return (
    <>
      <Breadcrumbs items={["log"]} />
      <div className="mt-4">
        <Box>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[24px] font-bold text-[#313030]">Log</h1>
              <p className="text-[16px] font-[400] text-[#667085] mt-2">
                Monitoring log data.
              </p>
            </div>

            <button className="py-3 px-5 bg-white border border-[#667085] rounded-md flex items-center gap-2 justify-center">
              <DownloadIcon size={16} color="#667085" />
              Download
              <ChevronDown size={16} color="#667085" />
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <Filter>
              <div className="flex items-center gap-2 relative">
                <h1 className="text-[#313030] text-[14px] font-[600]">Date</h1>

                <Datepicker
                  value={null}
                  onChange={null}
                  containerClassName={
                    "w-[217px] h-[35px] border border-[#D0D3D9] rounded-md"
                  }
                  inputClassName={
                    "w-full h-full rounded-md text-[12px] text-center pl-3 outline-none"
                  }
                  toggleClassName={"absolute  top-2 left-12 text-[#D0D3D9]"}
                />
              </div>
            </Filter>
            {/* table */}
            <table className="w-full overflow-hidden">
              <thead>
                <tr>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">Location</p>
                    </div>
                  </th>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">
                        Remark Problem
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">Time Handling</p>
                    </div>
                  </th>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">Handling</p>
                    </div>
                  </th>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">Timestamps</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="h-[66px]  bg-white flex items-center py-4 px-2 border-b border-[#D0D3D9]">
                      <p className="font-[400] text-[16px] text-[#514E4E]">
                        Line 1
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="h-[66px]  bg-white flex items-center py-4 px-2 border-b border-[#D0D3D9]">
                      <p className="font-[400] text-[16px] text-[#514E4E]">
                        Problem A
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="h-[66px]  bg-white flex items-center py-4 px-2 border-b border-[#D0D3D9]">
                      <p className="font-[400] text-[16px] text-[#514E4E]">
                        17:12:11
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="h-[66px]  bg-white flex items-center py-4 px-2 border-b border-[#D0D3D9]">
                      <p className="font-[400] text-[16px] text-[#514E4E]">
                        Handling A
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="h-[66px] bg-white flex items-center py-4 px-2 border-b border-[#D0D3D9]">
                      <p className="font-[400] text-[16px] text-[#514E4E]">
                        Senin, 12 Nov 2023 12:20
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <PaginationNew />
          </div>
        </Box>
      </div>
    </>
  );
};
