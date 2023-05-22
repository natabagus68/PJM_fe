import { Breadcrumbs } from "@common/components/Breadcrumbs";
import useUserModal from "@features/admin/user/user-model";
import ArrowBackIcon from "@common/components/icons-new/ArrowBackIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import PofileImage from "../../../../assets/profileniguser.jpg";

export default function UserDetailView() {
  const user = useUserModal()
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["User", "User Detail"]} />
      <div className="rounded-md border min-h-[600px] bg-[#FFFFFF]">
        <div className="flex justify-between items-center border-b rounded-tl rounded-tr bg-[#FFFFFF]">
          <h1 className="text-2xl px-6 py-8 font-[700]">User Details</h1>
          <div className="flex relative">
            <button
              className="px-5 py-3 rounded mr-6 border bg-[#FFFFFF] text-[#14988B] border-[#14988B] flex justify-center items-center gap-2"
              onClick={() => user.pageBack()}
            >
              <ArrowBackIcon />
              <span>Back</span>
            </button>
            <button
              className="px-5 py-3 rounded mr-6 border bg-[#F79009] text-[#FFFFFF] border-[#F79009] flex justify-center items-center gap-2"
              onClick={() => alert("edit")}
            >
              <EditIcon />
              <span>Edit</span>
            </button>
          </div>
        </div>

        <div className="px-8 py-6 flex">
          <div className="w-[50%]">
            <h1 className="text-[24px] mb-6">General Information</h1>
            <div className="grid grid-cols-2 bg-[#D0D3D9] p-3">
              <h1>Name</h1>
              <span>Afif Chandra</span>
            </div>
            <div className="grid grid-cols-2 p-3">
              <h1>Email</h1>
              <span>contoh@gmail.com</span>
            </div>
            <div className="grid grid-cols-2 bg-[#D0D3D9] p-3">
              <h1>Role</h1>
              <span>Inspector</span>
            </div>
            <div className="grid grid-cols-2 p-3">
              <h1>Status</h1>
              <span className="text-[#14988B]">Active</span>
            </div>
          </div>
          <div className="w-[50%] flex flex-col items-center">
            <h1 className="text-[24px] mb-6">Profile Picture</h1>
            <img className="rounded-full w-[200px] h-[200px]" src={PofileImage} alt="user-profile"/>
          </div>
        </div>

      </div>
    </main>
  )
}