import { UserAdmin } from "@domain/models/web-admin/user";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import RecycleLogo from "../../../assets/recycle.png";
import { EyeIcon } from "lucide-react";
import { useState } from "react";
import EyeHideIcon from "../icons-new/EyeHideIcon";
export const ModalChangePassword = ({
  open,
  handler = null,
  form,
  submit = null,
  error,
  handleForm,
}: {
  open: boolean;
  handler: any;
  form: UserAdmin;
  submit: any;
  error: boolean;
  handleForm: any;
}) => {
  const [hidden, sethidden] = useState(true);
  const [hidden2, sethidden2] = useState(true);
  const handleEye = () => sethidden(!hidden);
  const handleEye2 = () => sethidden2(!hidden2);
  return (
    <>
      <Dialog open={open} size="md" handler={null}>
        <div className="w-full rounded-md p-6">
          {/* head */}
          <div className="flex gap-2 items-center">
            <img src={RecycleLogo} alt="recycle logo" width={48} height={48} />
            <div>
              <h1 className="text-[24px] font-[600] text-[#313030]">
                Change Password
              </h1>
              <h4 className="text-[14px] font-[400] text-[#9A9898]">
                Update your password.
              </h4>
            </div>
          </div>

          <form onSubmit={submit} className="mt-4">
            <div className="flex flex-col gap-2 relative">
              <label>New Password</label>
              <input
                type={hidden ? "password" : "text"}
                name="password"
                value={form.password}
                onChange={handleForm}
                className="w-full outline-none py-2 px-4 border border-[#B8B6B6] rounded-md"
              />
              <EyeIcon
                size={24}
                color="#D0D3D9"
                className={`${
                  hidden ? "hidden" : ""
                } absolute top-11 right-3 cursor-pointer`}
                onClick={handleEye}
              />
              <EyeHideIcon
                size={24}
                color="#D0D3D9"
                className={`${
                  hidden ? "" : "hidden"
                } absolute top-12 right-3 cursor-pointer`}
                onClick={handleEye}
              />
            </div>
            <div className="flex flex-col gap-2 relative mt-2">
              <label>Confirm Password</label>
              <input
                type={hidden2 ? "password" : "text"}
                name="confirmation"
                onChange={handleForm}
                className="w-full outline-none py-2 px-4 border border-[#B8B6B6] rounded-md"
              />
              <EyeIcon
                size={24}
                color="#D0D3D9"
                className={`${
                  hidden2 ? "hidden" : ""
                } absolute top-11 right-3 cursor-pointer`}
                onClick={handleEye2}
              />
              <EyeHideIcon
                size={24}
                color="#D0D3D9"
                className={`${
                  hidden2 ? "" : "hidden"
                } absolute top-12 right-3 cursor-pointer`}
                onClick={handleEye2}
              />
            </div>
            <div className="flex items-center justify-between gap-4 mt-8">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handler();
                }}
                className="py-3 px-5 w-1/2 font-[600] text-[14px] border border-[#514E4E] rounded-md"
              >
                Cancel
              </button>
              <button
                disabled={error}
                className="py-3 px-5 w-1/2 font-[600] text-[14px] bg-[#20519F] text-white rounded-md"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
};
