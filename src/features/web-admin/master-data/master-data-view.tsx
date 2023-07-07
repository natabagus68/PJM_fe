import { Breadcrumbs } from "@common/components";
import { Box } from "@common/components/Box";
import { Filter } from "@common/components/Filter";
import PaginationNew from "@common/components/pagination/PaginationNew";
import { PlusIcon } from "lucide-react";
import { useMasterData } from "./master-data-view-model";
export const MasterData = () => {
  const model = useMasterData();
  return (
    <>
      <Breadcrumbs items={["Master Data"]} />
      <div className="mt-4">
        <Box>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[24px] font-bold text-[#313030]">
                Master Data
              </h1>
              <p className="text-[16px] font-[400] text-[#667085] mt-2">
                Management area data.
              </p>
            </div>

            <button
              onClick={model.toForm}
              className="py-3 px-5 bg-[#20519F] text-white rounded-md flex items-center gap-2 justify-center"
            >
              <PlusIcon size={16} color="white" />
              Add Data
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <Filter>
              <div className="flex items-center gap-2 relative">
                <h1 className="text-[#313030] text-[14px] font-[600]">
                  Short by
                </h1>
                <select
                  name=""
                  className="py-3 pr-4 pl-5 border bg-white rounded-md text-[#667085]"
                >
                  <option value="">Name (A-Z)</option>
                  <option value="">Name (Z-A)</option>
                  <option value="">Last Update</option>
                  <option value="">First Update</option>
                </select>
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
