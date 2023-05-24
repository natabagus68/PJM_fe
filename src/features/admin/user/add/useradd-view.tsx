import { Breadcrumbs } from "@common/components/Breadcrumbs";
import { Input } from "@common/components/input/Input";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import InputFile from "@common/components/input/InputFile";
import SaveIcon from "@common/components/icons-new/SaveIcon";
import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
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
        <form className="px-8 py-6 bg-[#FFFFFF]" onSubmit={() => alert("submit")}>
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
              onClick={() => alert("show password")}
            />
          </div>
          <div className="mb-3">
            <h1 className="mb-2">Role</h1>
            <select defaultValue={'DEFAULT'} className={`w-[90%] px-3 py-2 bg-[#FFFFFF] rounded-md border text-[#dddddd]`}>
                <option value="DEFAULT" disabled>-- Choose Options --</option>
                <option value="1">Super Admin</option>
                <option value="2">Admin</option>
                <option value="3">Inspector</option>
              </select>
          </div>
          <div className="mb-3">
            <h1>Profile Picture</h1>
            <InputFile
              isReset={true}
              width="125px"
              label="Choose"
              htmlFor="fileimg"
              value="no file choosen"
              bgColor="bg-[#B9BDC7]"
              ftColor="bg-[#FFFFFF]"
              btnReset={(e: any) => {
                e.preventDefault()
                alert("Reset")
              }}
            />
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