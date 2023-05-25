import { Breadcrumbs } from "@common/components/Breadcrumbs";
import { Input } from "@common/components/input/Input";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import InputFile from "@common/components/input/InputFile";
import SaveIcon from "@common/components/icons-new/SaveIcon";
import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
import useUserAddModal from "./useradd-model";

export default function UserAddView() {
  const model = useUserAddModal();
  return (
    <main className="flex flex-col gap-[28px] justify-between ">
      <Breadcrumbs items={["User", "Add User"]} />
      <div className="rounded-md border">
        <div className="flex justify-between items-center border-b rounded-tl rounded-tr bg-[#FFFFFF] ">
          <h1 className="text-2xl px-6 py-8 font-[700]">
            {model.id ? "Edit User" : "Add User"}
          </h1>
          <div className="flex gap-4 relative">
            <button
              className="px-5 py-3 rounded mr-6 border bg-[#FFFFFF] text-[#14988B] border-[#14988B] flex justify-center items-center gap-2"
              onClick={() => model.pageBack()}
            >
              <ArrowBackIcon />
              <span>Back</span>
            </button>
          </div>
        </div>
        <form
          className="px-8 py-6 bg-[#FFFFFF] pr-32"
          onSubmit={() => alert("submit")}
        >
          <div className="mb-3">
            <h1 className="mb-2">Manpower Name</h1>
            <Input
              className="w-full border border-gray-300 outline-none"
              name="name"
              value={model.form.name}
              onChange={model.handleForm}
            />
          </div>
          <div className="mb-3">
            <h1 className="mb-2">Email</h1>
            <Input
              className="w-full border border-gray-300 outline-none"
              name="email"
              value={model.form.email}
              onChange={model.handleForm}
            />
          </div>
          <div className="mb-3 relative">
            <h1 className="mb-2">Password</h1>
            <Input
              className="w-full border border-gray-300 outline-none"
              type="password"
              name="password"
              value={model.form.password}
              onChange={model.handleForm}
            />
            <EyeHideIcon
              className="absolute right-[11%] top-[60%] cursor-pointer"
              color={"#DDDDDD"}
              onClick={() => alert("show password")}
            />
          </div>
          <div className="mb-3">
            <h1 className="mb-2">Role</h1>
            <select
              name="role"
              value={model.form.role}
              onChange={model.handleForm}
              defaultValue={"DEFAULT"}
              className={`w-full border border-gray-300 outline-none px-3 py-2 bg-[#FFFFFF] rounded-md  `}
            >
              <option value="DEFAULT" disabled>
                -- Choose Options --
              </option>
              <option value="Super Admin">Super Admin</option>
              <option value="Admin">Admin</option>
              <option value="Inspector">Inspector</option>
            </select>
          </div>
          <div className="mb-3">
            <h1>Profile Picture</h1>
            <InputFile
              width="100%"
              label="Choose"
              htmlFor="fileimg"
              bgColor="bg-[#B9BDC7]"
              ftColor="bg-[#FFFFFF]"
              name="photo"
              onChange={model.handleForm}
            />
          </div>
          <button
            onClick={model.handleSubmmit}
            className="w-[249px] h-[46px] rounded-md bg-[#14988B] text-[#FFFFFF] flex items-center justify-center gap-2 mt-6"
          >
            <SaveIcon />
            <span>Save</span>
          </button>
        </form>
      </div>
    </main>
  );
}
