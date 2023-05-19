import { Switch } from '@headlessui/react';
import { Breadcrumbs } from "@common/components/Breadcrumbs";
import { Input } from "@common/components/input";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import InputFile from "@common/components/input/InputFile";
import SaveIcon from "@common/components/icons-new/SaveIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
import PreviewImage from "@features/admin/user/popup/previewimage-view";
import useUserModel from "@features/admin/user/user-model";

export default function UserEditView() {
  const user = useUserModel()
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["User", "Edit User"]} />
      <div className="rounded-md border">
        <div className="flex justify-between items-center border-b rounded-tl rounded-tr bg-[#FFFFFF]">
          <h1 className="text-2xl px-6 py-8 font-[700]">Edit User</h1>
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
            <Input className="w-[90%]" value={"Budi Budianto"}/>
          </div>
          <div className="mb-3">
            <h1 className="mb-2">Email</h1>
            <Input className="w-[90%]" value={"dskhsdf@gmail.com"}/>
          </div>
          <div className="mb-3">
            <h1 className="mb-2">Password</h1>
            <Input className="w-[90%]" type="password" value={"123123123123"}/>
            <EyeHideIcon
              className="absolute right-[13%] top-[60%] cursor-pointer" color={"#DDDDDD"}
              onClick={() => user.handlePass()}
            />
          </div>
          <div className="mb-3">
            <h1 className="mb-2">Role</h1>
            <Input className="w-[90%]" value={"Inspector"}/>
          </div>
          <div className="mb-3">
            <h1 className="mb-2">Profile Picture</h1>
            <div className="w-[90%] flex items-center justify-center gap-3 ">
              <div className="w-full">
                <InputFile bgColor={"#B9BDC7"} ftColor={"#514E4E"} onClick={(e) => user.handlePrev(e)} />
              </div>
              <div className="flex gap-2 w-[10%] justify-center items-center mt-2">
                <div className="w-[34px] h-[34px] bg-[#F79009] flex justify-center items-center rounded-md cursor-pointer"
                  onClick={() => alert("Edit")}
                >
                  <EditIcon />
                </div>
                <div className="w-[34px] h-[34px] bg-[#F04438] flex justify-center items-center rounded-md cursor-pointer"
                  onClick={() => alert("Delete")}
                >
                  <TrashIcon />
                </div>
              </div>
            </div>
          </div>
          <button className="w-[249px] h-[46px] rounded-md bg-[#14988B] text-[#FFFFFF] flex items-center justify-center gap-2 mt-6">
            <SaveIcon />
            <span>Save</span>
          </button>
        </form>
        <ModalConfirm open={user.open} setOpen={user.setOpen} setOpenConfirm={user.open}/>
        <PreviewImage open={user.prev} setOpen={user.setPrev} setClose={() => user.handleClose()} />
      </div>
    </main>
  )
}