import { Outlet } from "react-router-dom";
import LogoPjm from "../../../assets/logo-pjm.png";
export const LayoutCompany = () => {
  return (
    <>
      <div className="flex h-screen w-screen bg-[#212121] border-4 border-white">
        {/* sidebar */}
        <div className="w-[20%] border-x-4 border-white h-full">
          <div className="w-full bg-white items-center flex justify-center h-32">
            <img src={LogoPjm} alt="" />
          </div>
        </div>
        {/* navhead and body */}
        <div className="w-full flex flex-col">
          <div className="w-full h-32 border-b-2 border-white flex">
            <div className="border-r-2 border-white h-full text-center flex justify-center items-center w-full">
              <h1 className="text-white font-bold text-7xl">
                Company Performance
              </h1>
            </div>
            <div className="border-r-2 border-white h-full text-center flex justify-center items-center w-96">
              <h1 className="text-white font-bold text-7xl px-12">07:59:59</h1>
            </div>
          </div>

          <div className="w-full flex-1 flex flex-col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

