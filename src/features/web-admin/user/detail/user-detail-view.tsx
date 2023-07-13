import { Breadcrumbs } from "@common/components";
import { Box } from "@common/components/Box";
import EditIcon from "@common/components/icons-new/EditIcon";
import { ArrowLeft } from "lucide-react";
import ProfileDumi from "../../../../assets/profile-full.png";
import { useUserDetail } from "./user-detail-view-model";
import { config } from "@common/utils";
export const UserDetail = () => {
  const model = useUserDetail();
  return (
    <>
      <div className="mb-4">
        <Breadcrumbs items={["User", "Details"]} />
      </div>
      <Box card={true}>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-[24px] font-bold text-[#313030]">User</h1>
            <p className="text-[16px] font-[400] text-[#667085] mt-2">
              Management account & access
            </p>
          </div>
          <div className="w-fit flex items-center gap-4">
            <button
              onClick={model.back}
              className="py-3 px-5 bg-[#FFFF] text-[#667085] border border-[#667085] rounded-md flex items-center gap-2 justify-center"
            >
              <ArrowLeft size={16} color="#667085" />
              Back
            </button>
            <button
              onClick={model.toEdit}
              className="py-3 px-5 bg-[#F79009] text-white rounded-md flex items-center gap-2 justify-center"
            >
              <EditIcon size={16} color="white" />
              Edit
            </button>
          </div>
        </div>
        <hr className="mt-4 border border-[#D0D3D9]" />
        <div className="mt-2">
          <h1 className="text-[16px] text-[#313030] font-[600] mt-2">
            Profile Picture
          </h1>
          <div className="flex items-center gap-4">
            {/* image profile */}
            <div
              className={`w-[120px] h-[120px] mt-3 rounded-full bg-center bg-cover`}
              style={{
                backgroundImage: `url(${config.assetsUrl + model.data.avatar})`,
              }}
            ></div>
            <h1 className="font-[600] text-[#20519F] font-sans text-[14px] cursor-pointer">
              See Photo
            </h1>
          </div>
        </div>

        <div className="w-[421px] mt-5 border-t border-[#D0D3D9] py-4">
          <h1 className="text-[16px] font-[600] text-[#313030]">
            General Information
          </h1>
          <div className="flex justify-between items-center py-4">
            <div>
              <h3 className="text-[#989FAD] text-[14px] font-[600]">Name</h3>
              <h3 className="text-[#514E4E] text-[14px] font-[600]">
                {model.data.fullname}
              </h3>
            </div>
            <div>
              <h3 className="text-[#989FAD] text-[14px] font-[600]">Role</h3>
              <h3 className="text-[#514E4E] text-[14px] font-[600]">
                {model.data.role}
              </h3>
            </div>
          </div>
          <div className="flex justify-between items-center py-4">
            <div>
              <h3 className="text-[#989FAD] text-[14px] font-[600]">Email</h3>
              <h3 className="text-[#514E4E] text-[14px] font-[600]">
                {model.data.email}
              </h3>
            </div>
            <div>
              <h3 className="text-[#989FAD] text-[14px] font-[600]">Status</h3>
              <h3
                className={`${
                  model.data.isActive ? "text-[#12B569]" : "text-red-500"
                } text-[14px] font-[600]`}
              >
                {model.data.isActive ? "active" : "inactive"}
              </h3>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};
