import my_logo from "../../../assets/my-logo.svg";
import useAdmin from "./menu-layout-model";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import DateTime from "@common/components/DateTime";
import { Outlet } from "react-router-dom";
import useDateTime from "@common/components/DateTime";
import BackIcon from "@common/components/icons-new/BackIcon";

export default function MenuLayout() {
  const admin = useAdmin();
  const date = useDateTime()
  return admin.isLoading ? (
    <main className="w-screen h-screen flex bg-gray-200 items-center justify-center">
      <LoadingIcon className="animate-spin w-[80px] h-[80px]" />
    </main>
  ) : (
    <main className="w-screen h-screen overflow-hidden bg-[#212121] border-2 border-white flex flex-col">
      <div className="flex flex-row justify-around">
        {/* <div className={`${ admin?.title !== 'menu' ? 'bg-transparent' : "bg-[#F6F6F6]"}flex justify-center items-center  w-[400px] border-2 overflow-hidden`}> */}
          {
            admin?.title === "Maintenance Calling" ?(
              <div className="flex justify-center items-center bg-transparent w-[400px] border-2">
                <BackIcon className="cursor-pointer" onClick={()=> admin.navigate(-1)}/>
              </div>
            )
              : admin?.title === "Maintenance Handling" ? (
                <div className=" w-[400px] p-2" onClick={()=>{}}>
                  <button className="w-full h-full  border-4 border-red-500 text-red-500 text-4xl font-bold" onClick={admin.onLogout}>Logout</button>
                </div>
              ) : (
                <div className="flex justify-center items-center bg-[#F6F6F6] w-[400px] border-2 overflow-hidden">
                  <img src={my_logo} alt="My Logo" className="h-[100px] w-fit scale-150" />   
                </div>
              )
          }
        {/* </div> */}
        <div className="flex justify-center items-center border-2 w-[100%] py-5 px-10">
          {/* <div className="w-10 h-10 border-4 border-white bg-green-500 rounded-full mr-20"></div> */}
          <span className={`text-white font-[700] text-5xl text-center`}>{admin.title}</span>
        </div>
        <div className="flex flex-col w-[40%]">
          
          <div className="flex justify-center items-center border-2 border-white py-2">
            <span className="text-white text-3xl font-semibold">DATE : {date.getDateTime('date')}</span>
          </div>
          <div className="flex justify-center items-center border-2 border-white py-2">
            <span className="text-white text-3xl font-semibold">TIME : {date.getDateTime("time")}</span>
          </div>
          
        </div>
      </div>
      <Outlet />
    </main>


    // <main className="relative">
    //   <header
    //     className={`${
    //       admin.isOpenSidebar ? "pl-[265px]" : "pl-[25px]"
    //     } fixed w-full h-[70px] bg-[#20519F] shadow-lg z-50 flex items-center justify-between pr-[25px] transition-all ease-in-out delay-100`}
    //   >
    //     <div className="flex gap-6 items-center">
    //       <BurgerIcon
    //         className="cursor-pointer"
    //         onClick={() => admin.onOpenSideBar()}
    //       />
    //       <button
    //         className="px-[20px] gap-2 h-[46px] rounded-md bg-[#4D74B2] text-white flex items-center"
    //         onClick={() => admin.onOpenTraceability()}
    //       >
    //         <SearchIcon />
    //         <span>Traceability</span>
    //       </button>
    //     </div>
    //     <div className="relative">
    //       <div
    //         className="flex gap-2 items-center cursor-pointer"
    //         onClick={() => admin.onOpenAvatar()}
    //       >
    //         <div className="w-6 h-6 rounded-full bg-white"></div>
    //         <span className="text-white font-semibold">Admin</span>
    //         <ChevronIcon color="white" />
    //       </div>
    //       <div
    //         className={`${
    //           admin.isOpenAvatar ? "flex" : "hidden"
    //         } absolute top-[35px] bg-white rounded-md overflow-hidden right-0 flex-col gap-2 min-w-[190px] border border-gray-400`}
    //         onMouseLeave={() => admin.onOpenAvatar()}
    //       >
    //         <div
    //           className="flex items-center gap-3 cursor-pointer px-4 py-2 hover:bg-gray-100"
    //           onClick={() => admin.onLogout()}
    //         >
    //           <LogoutIcon />
    //           <span>Logout</span>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   <div
    //     className={`${
    //       admin.isOpenSidebar ? null : "-translate-x-[240px]"
    //     } fixed w-[240px] h-full bg-white shadow-lg z-50 flex flex-col gap-[20px] transition-all ease-in-out delay-100`}
    //   >
    //     <div className="w-full h-[70px] shadow-sm flex items-center justify-center">
    //       <img src={my_logo} alt="Logo Ragdalion" className="h-[50px]" />
    //     </div>
    //     <div className="flex flex-col px-4 gap-[12px]">
    //       <span className="font-semibold text-[#5C5C5C]">Menu</span>
    //       <div className="flex flex-col gap-2">
    //         <NavItem
    //           label={`Dashboard`}
    //           icon={<DashboardIcon className="w-[24px] h-[24px]" />}
    //         >
    //           <NavItem label="General" to={"dashboard/general"} />
    //           <NavItem label="Details" to={"dashboard/details"} />
    //           <NavItem label="Real Time" to={"dashboard/real-time"} />
    //         </NavItem>
    //         <NavItem
    //           label={`Master Data`}
    //           icon={<MasterDataIcon className="w-[24px] h-[24px]" />}
    //         >
    //           <NavItem label="Manpower" to={"master-data/manpower/manpower"} />
    //           <NavItem label="Mesin" to={"master-data/mesin/mesin"} />
    //         </NavItem>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className={`${
    //       admin.isOpenSidebar ? "pl-[265px]" : "pl-[25px]"
    //     } flex-1 pt-[95px] p-[25px] transition-all ease-in-out delay-100`}
    //   >
    //     <Outlet />
    //   </div>
    // </main>
  );
}
