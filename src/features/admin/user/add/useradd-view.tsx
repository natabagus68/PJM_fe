import { Breadcrumbs } from "@common/components/Breadcrumbs";
import { Input } from "@common/components/input/Input";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import InputFile from "@common/components/input/InputFile";
import SaveIcon from "@common/components/icons-new/SaveIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import useUserModel from "@features/admin/user/user-model";

export default function UserAddView(){
  const user = useUserModel()
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["User", "Add User"]} />
      <div className="rounded-md border">
        <div className="flex justify-between items-center border-b rounded-tl rounded-tr bg-[#FFFFFF]">
          <h1 className="text-2xl px-6 py-8 font-[700]">Add User</h1>
          <div className="flex gap-4 relative">
            <button
              className="px-5 py-3 rounded mr-6 border bg-[#FFFFFF] text-[#14988B] border-[#14988B] flex justify-center items-center gap-2"
              onClick={() => user.pageBack()}
            >
              <ArrowBackIcon />
              <span>Back</span>
            </button>
          </div>
        </div>
        <form className="px-8 py-6" onSubmit={(e) => user.handleFormSubmit(e)}>
          <div className="mb-3">
            <h1 className="mb-2">Manpower Name</h1>
            <Input className="w-[90%]"/>
          </div>
          <div className="mb-3">
            <h1 className="mb-2">Email</h1>
            <Input className="w-[90%]"/>
          </div>
          <div className="mb-3 relative">
            <h1 className="mb-2">Password</h1>
            <Input className="w-[90%]" type="password"/>
            <EyeHideIcon
              className="absolute right-[11%] top-[60%] cursor-pointer" color={"#DDDDDD"}
              onClick={() => user.handlePass()}
            />
          </div>
          <div className="mb-3">
            <h1 className="mb-2">Role</h1>
            <select name="user-access" className="w-[90%] px-3 py-2 bg-[#FFFFFF] rounded-md border text-[#dddddd]">
              <option disabled selected value> -- select role -- </option>
              <option value="superadmin">SuperAdmin</option>
              <option value="admin">Dave</option>
              <option value="inspector">Pumpernickel</option>
            </select>
          </div>
          <div className="mb-3">
            <h1>Profile Picture</h1>
            <InputFile
              htmlFor="fileimg"
              width={"125px"}
              label={"Choose"}
              bgColor={"#B9BDC7"}
              ftColor={"#514E4E"}
              value={"no file choosen"}
            />
          </div>
          <button className="w-[249px] h-[46px] rounded-md bg-[#14988B] text-[#FFFFFF] flex items-center justify-center gap-2 mt-6">
            <SaveIcon />
            <span>Save</span>
          </button>
        </form>
        <ModalConfirm open={user.open} setOpen={user.setOpen} setOpenConfirm={user.open} cb={(e) => e.preventDefault()}/>
      </div>
    </main>
  )
}