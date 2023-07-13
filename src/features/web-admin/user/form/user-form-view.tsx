import { Breadcrumbs } from "@common/components";
import { Box } from "@common/components/Box";
import { ArrowLeft, EyeIcon, SaveIcon, TrashIcon } from "lucide-react";
import { useUserForm } from "./user-form-model";
import { ModalImage } from "@common/components/modals/ModalImage";
import { config } from "@common/utils";

export const UserForm = () => {
  const model = useUserForm();
  return (
    <>
      <ModalImage
        image={
          model.imgFile
            ? model.data.avatar
            : `${config.assetsUrl}${model.data.avatar}`
        }
        open={model.open}
        handleChange={model.handleDialog}
      />
      <Breadcrumbs items={["User", model.id ? "Edit User" : "Add User"]} />
      <div className="mt-4">
        <Box padding={false} card={true}>
          <div className="flex items-center justify-between px-[36px] py-[18px] border-b border-[#D0D3D9]">
            <h1 className="text-[#313030] font-bold text-[24px]">
              {model.id ? "Edit User" : "Add User"}
            </h1>
            <button
              onClick={model.back}
              className="py-3 pr-5 pl-4 border border-[#514E4E] flex gap-2 items-center justify-center rounded-md"
            >
              <ArrowLeft size={16} color="#14988B" />
              Back
            </button>
          </div>
          <div className="w-full px-[36px] mt-4">
            <form onSubmit={model.handleSubmit}>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[16px] font-[400] text-[#514E4E]"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={model.data.fullname}
                  name="fullname"
                  onChange={model.handleForm}
                  className="w-full py-2 px-4 border border-[#D0D3D9] rounded-md outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label
                  htmlFor="Email"
                  className="text-[16px] font-[400] text-[#514E4E]"
                >
                  Email
                </label>
                <input
                  type="text"
                  value={model.data.email}
                  name="email"
                  onChange={model.handleForm}
                  className="w-full py-2 px-4 border border-[#D0D3D9] rounded-md outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label
                  htmlFor="Role"
                  className="text-[16px] font-[400] text-[#514E4E]"
                >
                  Role
                </label>
                <select
                  value={model.data.role}
                  name="role"
                  onChange={model.handleForm}
                  className="w-full py-2 px-4 border border-[#D0D3D9] rounded-md outline-none bg-white"
                >
                  <option value="" disabled>
                    Role Choose role
                  </option>
                  <option value="superadmin">Superadmin</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="quality">Quality</option>
                  <option value="leader">Leader</option>
                  <option value="operator">Operator</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label className="text-[16px] font-[400] text-[#514E4E]">
                  Profile Picture
                </label>
                <div className="flex relative items-center">
                  <label
                    htmlFor="Raw dataset"
                    className="w-[94px] h-[40px]  bg-[#B9BDC7] text-[#514E4E] flex items-center justify-center rounded-l-md cursor-pointer"
                  >
                    Choose
                  </label>
                  {!model.imgFile && (
                    <div className="absolute left-24  z-50 h-[40px] w-[60%] file:hidden border-y  border-[#D0D3D9] rounded-r-md bg-white flex items-center pl-3">
                      {model.data.avatar}
                    </div>
                  )}

                  <input
                    type="file"
                    readOnly
                    onChange={model.handleImage}
                    className="h-[40px] w-[94%] file:hidden border-y border-r border-[#D0D3D9] rounded-r-md static bg-white  outline-none px-4 py-2 placeholder:text-black"
                    id="Raw dataset"
                  />
                  {model.imgFile || model.data.avatar ? (
                    <>
                      <button
                        onClick={model.deleteImage}
                        className="ml-3 w-[32px] h-[32px] bg-[#F04438] rounded-[4px] flex items-center justify-center"
                      >
                        <TrashIcon className="w-4 h-4 text-white" />
                      </button>
                      <button
                        onClick={model.handleDialog}
                        className="ml-3 w-[32px] h-[32px] bg-[#20519F] rounded-[4px] flex items-center justify-center"
                      >
                        <EyeIcon className="w-4 h-4 text-white" />
                      </button>
                    </>
                  ) : null}
                </div>
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
