import { Outlet } from "react-router-dom";
import my_logo from "../../../assets/my-logo.svg";
import BurgerIcon from "@common/components/icons-new/BurgerIcon";
import useAdmin from "./admin-layout-model";
import LogoutIcon from "@common/components/icons-new/LogoutIcon";
import { NavItem } from "@common/components";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import MasterDataIcon from "@common/components/icons-new/MasterDataIcon";
import UserAdminIcon from "@common/components/icons-new/UserAdminIcon";
import { ReportDocumentIcon, ApprovalIcon, UserInfoIcon } from "@common/components/icons";

export default function AdminLayout() {
  const admin = useAdmin();
  return admin.isLoading ? (
    <main className="w-screen h-screen flex bg-gray-200 items-center justify-center">
      <LoadingIcon className="animate-spin w-[80px] h-[80px]" />
    </main>
  ) : (
    <main className="relative">
      <header
        className={`${
          admin.isOpenSidebar ? "pl-[265px]" : "pl-[25px]"
        } fixed w-full h-[70px] bg-[#14988B] shadow-lg z-50 flex items-center justify-between pr-[25px] transition-all ease-in-out delay-100`}
      >
        <div className="flex gap-6 items-center">
          <BurgerIcon
            className="cursor-pointer"
            onClick={() => admin.onOpenSideBar()}
          />
          <button
            className="px-[20px] gap-2 h-[46px] rounded-md bg-[#14988B] text-white flex items-center"
            onClick={() => admin.onOpenTraceability()}
          >
            <SearchIcon />
            <span>Traceability</span>
          </button>
        </div>
        <div className="relative">
          <div
            className="flex gap-2 items-center"
            onClick={() => admin.onOpenAvatar()}
          >
            <UserAdminIcon />
            <span className="text-white font-semibold">Admin</span>
          </div>
        </div>
      </header>
      <div
        className={`${
          admin.isOpenSidebar ? null : "-translate-x-[240px]"
        } fixed w-[240px] h-full bg-white shadow-lg z-50 flex flex-col gap-[20px] transition-all ease-in-out delay-100`}
      >
        <div className="w-full h-[70px] shadow-sm flex items-center justify-center">
          <img src={my_logo} alt="Logo Ragdalion" className="h-[50px]" />
        </div>
        <div className="flex flex-col px-4 gap-[12px]">
          <span className="font-semibold text-[#5C5C5C] pl-2">Menu</span>
            <div className="flex flex-col h-[calc(100vh-24vh)]">
              <NavItem
                className="block font-light text-sm text-[#514E4E] hover:bg-[#E8F5F3]"
                label="Report Document"
                icon={<ReportDocumentIcon />}
                to={"#"}
              />
              <NavItem
                className="block font-light text-sm text-[#514E4E] hover:bg-[#E8F5F3]"
                label="Approval"
                icon={<ApprovalIcon />}
                to={"#"}
              />
              <NavItem
                className="block font-light text-sm text-[#514E4E] hover:bg-[#E8F5F3]"
                label="Master Data"
                icon={<MasterDataIcon />}
                to={"master-data"}
              />
              <NavItem
                className="block font-light text-sm text-[#514E4E] hover:bg-[#E8F5F3]"
                label="User"
                icon={<UserInfoIcon />}
                to={"#"}
              />
            </div>
            <div className="">
              <div
                  className="flex items-center gap-2 cursor-pointer pl-2 text-[#F04438]"
                  onClick={() => admin.onLogout()}
                >
                <LogoutIcon color={"#F04438"} />
              <span className="text-sm font-thin tracking-wider">Signout</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          admin.isOpenSidebar ? "pl-[265px]" : "pl-[25px]"
        } flex-1 pt-[95px] p-[25px] transition-all ease-in-out delay-100`}
      >
        <Outlet />
      </div>
    </main>
  );
}