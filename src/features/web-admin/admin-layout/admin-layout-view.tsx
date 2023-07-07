import {
  AlignJustifyIcon,
  CheckSquareIcon,
  FileIcon,
  UserIcon,
} from "lucide-react";
import Profile from "../../../assets/profile.png";
import { useAdminLayout } from "./admin-layout-view-model";
import PJMLogo from "../../../assets/logo-pjm.png";
import { NavItem } from "@common/components";
import DashboardIcon from "@common/components/icons-new/DashboardIcon";
import { Outlet } from "react-router-dom";
export const AdminLayout = () => {
  const model = useAdminLayout();
  return (
    <>
      {/* nav head */}
      <div
        className={`${
          model.sideShow ? "w-[82%]" : "w-full"
        } h-[70px] duration-300 py-[21px] px-[36px] flex items-center justify-between bg-[#20519F] fixed right-0`}
      >
        <AlignJustifyIcon
          size={18}
          color="#FFFF"
          className="cursor-pointer"
          onClick={model.handleSideShow}
        />
        <div className="w-32 flex items-center gap-2 cursor-pointer">
          <img
            src={Profile}
            alt="profile image"
            width={28}
            height={20}
            className="block"
          />
          <p className="text-white text-[14px] font-[500]">Admin 12</p>
        </div>
        {/* nav sidebar */}
      </div>
      <div
        className={`fixed h-screen w-[18%] bg-white ${
          model.sideShow ? "translate-[999px]" : "-translate-x-[999px]"
        } duration-300`}
      >
        {/* head logo */}
        <div className="h-[70px] flex items-center justify-center shadow-lg">
          <img src={PJMLogo} alt="logo pjm" width={135} height={50} />
        </div>
        {/* content */}
        <div className="px-[16px] flex flex-col gap-4 mt-8">
          <h1 className="text-[#404446] text-[14px] font-bold">Menu</h1>
          <div className="mt-4">
            <NavItem label="Dashboard" icon={<DashboardIcon />}>
              <NavItem label="Company" />
              <NavItem label="Plant" />
              <NavItem label="Line" />
            </NavItem>
            <NavItem
              label="Log"
              icon={<FileIcon size={24} />}
              className={"mt-3"}
            />
            <NavItem
              label="Master Data"
              icon={<CheckSquareIcon size={24} />}
              className={"mt-3"}
            />
            <NavItem
              label="User"
              icon={<UserIcon size={24} />}
              className={"mt-3"}
            />
          </div>
        </div>
      </div>

      {/* main content */}
      <main
        className={`${
          model.sideShow ? "w-[82%]" : "w-full"
        } h-screen p-9   mt-10 duration-300 flex flex-col items-center justify-center float-right`}
      >
        <Outlet />
      </main>
    </>
  );
};