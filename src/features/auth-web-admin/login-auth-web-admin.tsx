import HeroLogin from "../../assets/logo-login.png";
import PJMLogo from "../..//assets/logo-pjm.png";
import { EyeIcon, KeyRound, UserIcon } from "lucide-react";
import { useLoginWebAdmin } from "./login-web-admin-model";
import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
export const AuthWebAdmin = () => {
  const model = useLoginWebAdmin();
  return (
    <>
      <div className="w-full h-screen  flex">
        {/* side left */}
        <div className="w-1/2 h-full flex items-center justify-center bg-[#20519F]">
          <img src={HeroLogin} alt="hero login" width={500} />
        </div>
        {/* side right */}
        <div className="w-1/2 h-full flex items-center justify-center bg-white">
          {/* card */}
          <div className="w-[70%] py-[92px] px-[72px] flex flex-col  border border-[#20519F] rounded-xl shadow-xl">
            <img src={PJMLogo} alt="logo pjm" width={135} height={50} />
            <div className="text-start mt-4">
              <h1 className="text-[#514E4E] text-[32px] font-bold">Welcome</h1>
              <p className="text-[#514E4E] text-[16px] font-[400]">
                Please sign in with registered account!
              </p>
              <form className="mt-4">
                <div className="relative">
                  <UserIcon
                    size={20}
                    color="#514E4E"
                    className="absolute top-4 left-3"
                  />
                  <input
                    type="email"
                    placeholder="enter email address"
                    className="w-full h-[49px] border border-neutral-300 rounded-md outline-none px-10"
                  />
                </div>
                <div className="relative mt-6">
                  <KeyRound
                    size={20}
                    color="#514E4E"
                    className="absolute top-4 left-3"
                  />
                  <input
                    type={model.eye ? "text" : "password"}
                    placeholder="enter email address"
                    className="w-full h-[49px] border border-neutral-300 rounded-md outline-none px-10"
                  />

                  <EyeIcon
                    size={20}
                    color="#514E4E"
                    className={`absolute right-3 bottom-3.5 ${
                      model.eye ? "" : "hidden"
                    }`}
                    onClick={model.handleEye}
                  />
                  <EyeHideIcon
                    size={20}
                    color="#514E4E"
                    className={`absolute right-3 bottom-3.5 ${
                      model.eye ? "hidden" : ""
                    }`}
                    onClick={model.handleEye}
                  />
                </div>
                <button className="w-full py-3 text-white bg-[#20519F] rounded-md mt-10">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
