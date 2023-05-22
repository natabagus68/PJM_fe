import { Switch } from '@headlessui/react';
import { Breadcrumbs } from "@common/components/Breadcrumbs";
import { Toggle } from "@common/components/input/Toggle";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon"
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon"
import EditIcon from "@common/components/icons-new/EditIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import useUserModel from "@features/admin/user/user-model";

export default function UserView() {
  const user = useUserModel()
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["User"]} />
      <div className="rounded-md border">
        <div className="flex justify-between items-center border-b rounded-md bg-[#FFFFFF]">
          <h1 className="text-2xl px-6 py-8 font-[700]">User</h1>
          <div className="flex gap-4 relative">
            <SearchIcon className="absolute top-4 left-4" color={"#B8B6B6"} />
            <input className="pl-10 py-[6px] font-[400] rounded-md border px-[14px] focus:border-2 focus:outline-none focus:border-[#14988B]" placeholder="Search" />
            <button
              className="px-5 py-3 rounded mr-6 bg-[#14988B] text-[#FFFFFF]"
              onClick={() => user.handleAddUser()}>+ Add Data</button>
          </div>
        </div>
        {
          !user.loading ? (
            <div className="h-[500px] flex items-center justify-center">
              <LoadingIcon
                color="black"
                className="w-[24px] h-[24px] animate-spin"
              />
            </div>
          ) : (
            <>
              <table className="w-full">
                <thead className="text-sm font-semibold border-b h-[64px] bg-[#FAFAFB] border-[#D0D3D9] text-[#514E4E]">
                  <tr>
                    <th className="px-14 text-left">Status</th>
                    <th className="px-8 text-left">Name</th>
                    <th className="px-8 text-left">Email</th>
                    <th className="px-8 text-left">Role</th>
                    <th className="px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                  user.users?.map(item => (
                    <tr key={item?.id} className="border-b h-[64px] border-[#D0D3D9] bg-[#FFFFFF] font-[400] text-[16px] relative">
                      <td className="absolute top-5 left-6">
                        <Toggle
                          id={item?.id}
                          name={item?.name}
                          checked={item?.is_active ? false : false}
                          activeText="Active"
                          inactiveText="Inactive"
                          cb={() => console.log(item?.name)}
                        />
                      </td>
                      <td className="px-8">{item?.name}</td>
                      <td className="px-8">{item?.email}</td>
                      <td className="px-8">{item?.role_id}</td>
                      <td className="px-4 flex gap-3 my-2">
                        {
                          item?.role_id === "SUPER_ADMIN"
                          ? (
                            <>
                              <span className="rounded text-sm flex items-center gap-2 cursor-pointer justify-center w-[96px] h-[46px] bg-[#1BBDD4] text-[#FFFFFF]"
                                onClick={() => user.handleDetail(item?.id)}>
                                <EyeShowIcon color={"#FFFFFF"} width="16px"/>
                                <span>Detail</span>
                              </span>
                              <span className="rounded text-sm flex items-center gap-2 cursor-pointer justify-center w-[96px] h-[46px] bg-[#F79009] text-[#FFFFFF]"
                                onClick={() => user.handleEdit(item?.id)}>
                                <EditIcon width="16px"/>
                                <span>Edit</span>
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="rounded text-sm flex items-center gap-2 cursor-pointer justify-center w-[96px] h-[46px] bg-[#1BBDD4] text-[#FFFFFF]"
                                onClick={() => user.handleDetail(item?.id)}>
                                <EyeShowIcon color={"#FFFFFF"} width="16px"/>
                                <span>Detail</span>
                              </span>
                              <span className="rounded text-sm flex items-center gap-2 cursor-pointer justify-center w-[96px] h-[46px] bg-[#F79009] text-[#FFFFFF]"
                                onClick={() => user.handleEdit(item?.id)}>
                                <EditIcon width="16px"/>
                                <span>Edit</span>
                              </span>
                              <span className="rounded text-sm flex items-center gap-2 cursor-pointer justify-center w-[96px] h-[46px] bg-[#F04438] text-[#FFFFFF]">
                                <TrashIcon width="16px"/>
                                <span>Delete</span>
                              </span>
                            </>
                          )
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex py-4 px-[32px] justify-end gap-4 bg-[#FFFFFF]">
                <button className="px-4 h-[40px] text-[#B8B6B6] border gap-2 border-[#B8B6B6] rounded flex items-center justify-center">
                  <ArrowUpIcon
                    className="w-[16px] h-[16px] -rotate-90"
                    color="#B8B6B6"
                  />
                  <span>Prev</span>
                </button>
                <div className="w-[40px] h-[40px] bg-[#14988B] rounded flex items-center justify-center text-white">1</div>
                <div className="w-[40px] h-[40px] bg-[#FFFFFF] rounded flex items-center justify-center text-[#514E4E]">2</div>
                <div className="w-[40px] h-[40px] bg-[#FFFFFF] rounded flex items-center justify-center text-[#514E4E]">3</div>
                <div className="w-[40px] h-[40px] bg-[#FFFFFF] rounded flex items-center justify-center text-[#514E4E]">...</div>
                <div className="w-[40px] h-[40px] bg-[#FFFFFF] rounded flex items-center justify-center text-[#514E4E]">10</div>
                  <button className="px-4 h-[40px] text-[#FFFFFF] border gap-2 border-[#14988B] rounded flex items-center justify-center">
                    <span className="text-[#514E4E]">Next</span>
                    <ArrowUpIcon
                      className="w-[16px] h-[16px] rotate-90"
                      color="#14988B"
                    />
                  </button>
              </div>
           </>
          )
        }
      </div>
    </main>
  )
}