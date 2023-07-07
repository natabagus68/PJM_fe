import { Breadcrumbs } from "@common/components";
import { Box } from "@common/components/Box";
import { Filter } from "@common/components/Filter";
import EditIcon from "@common/components/icons-new/EditIcon";
import PaginationNew from "@common/components/pagination/PaginationNew";
import { Switch } from "@material-tailwind/react";
import { EyeIcon, PlusIcon, RepeatIcon, TrashIcon } from "lucide-react";
import { useUserModel } from "./user-view-model";

export const User = () => {
  const model = useUserModel();
  return (
    <>
      <Breadcrumbs items={["User"]} />
      <div className="mt-4">
        <Box>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-[24px] font-bold text-[#313030]">User</h1>
              <p className="text-[16px] font-[400] text-[#667085] mt-2">
                Management account & access
              </p>
            </div>

            <button
              onClick={model.toform}
              className="py-3 px-5 bg-[#20519F] text-white rounded-md flex items-center gap-2 justify-center"
            >
              <PlusIcon size={16} color="white" />
              Create new user
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <Filter>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <h1 className="text-[14px] font-[600] text-[#313030]">
                    Role
                  </h1>
                  <select name="" className="py-3 px-5 bg-white rounded-md ">
                    <option value="">All</option>
                    <option value="1">All11111</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-[14px] font-[600] text-[#313030]">
                    Sort by
                  </h1>
                  <select name="" className="py-3 px-5 bg-white rounded-md ">
                    <option value="">Ascending</option>
                  </select>
                </div>
              </div>
            </Filter>
            {/* table */}
            <table className="w-full overflow-hidden">
              <thead>
                <tr>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">Status</p>
                    </div>
                  </th>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">Name</p>
                    </div>
                  </th>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">Email</p>
                    </div>
                  </th>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">Role</p>
                    </div>
                  </th>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">ACTION</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="h-[66px]  bg-white py-4 px-2 border-b border-[#D0D3D9]">
                      <Switch label={"Inactive"} />
                    </div>
                  </td>
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
                  <td className="w-0">
                    <div className="flex gap-[12px] h-[66px]  bg-white  items-center py-4 px-2 border-b border-[#D0D3D9]">
                      <button className="w-[46px] h-[46px] bg-[#20519F] rounded-[4px] flex items-center justify-center">
                        <EyeIcon className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-[46px] h-[46px] bg-[#F79009] rounded-[4px] flex items-center justify-center">
                        <EditIcon className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-[46px] h-[46px] bg-[#12B569] rounded-[4px] flex items-center justify-center">
                        <RepeatIcon className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-[46px] h-[46px] bg-[#F04438] rounded-[4px] flex items-center justify-center">
                        <TrashIcon className="w-4 h-4 text-white" />
                      </button>
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
