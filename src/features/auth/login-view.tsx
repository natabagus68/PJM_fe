import EmailIcon from "@common/components/icons-new/EmailIcon"; import EyeHideIcon from "@common/components/icons-new/EyeHideIcon"; import EyeShowIcon from "@common/components/icons-new/EyeShowIcon"; import LockIcon from "@common/components/icons-new/LockIcon";
import EyesShowHide from "@common/components/icons/ShowHideIcon";
import useLogin from "./login-model";
import { EyeIcon } from "@common/components/icons";
import myLogo from "../../assets/my-logo.svg";
import MachineIcon from "@common/components/icons-new/MachineIcon";
import ShiftIcon from "@common/components/icons-new/ShiftIcon";


export default function LoginView() {
  const login = useLogin();
  return (
    <main className="w-screen h-[100dvh] flex border-4 border-white bg-[#212121]">
      <div className="flex-1 flex items-center justify-center">
        <form
          className="w-[500px] h-[650px] bg-transparent rounded-sm border-[5px] border-[#F0F1F3]  px-[72px] py-[20px] flex flex-col justify-between" onSubmit={login.onSubmitLogin} >
          <div className="flex flex-col">
            <img src={myLogo} alt="My Logo" className="h-[94px] w-fit" />
            <span className="font-extrabold text-[34px] text-white">
              Welcome Back.
            </span>
            <span className="text-[16px] text-white">
              Log in to your account
            </span>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div className={`w-full h-[52px] bg-[#313030] px-[18px] flex items-center gap-[16px] rounded-lg border ${login.error? "border-red-500" : "border-[#B8B6B6]" }`}>
              <EmailIcon />
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className=" bg-transparent w-full h-full outline-none text-[#B8B6B6] "
              />
            </div>
            <div className={`w-full h-[52px] bg-[#313030] px-[18px] flex items-center gap-[16px] rounded-lg border  ${login.error? "border-red-500" : "border-[#B8B6B6]" }`}>
              <LockIcon />
              <input
                type={`${login.isPasswordShow ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className=" bg-transparent w-full h-full outline-none text-[#B8B6B6]"
              />
              {login.isPasswordShow ? (
                <EyeShowIcon
                  color="#6E7079"
                  className="w-[22px] h-[22px]"
                  onClick={()=>login.onPasswordShow()}
                />
              ) : (
                <EyeHideIcon
                  color="#6E7079"
                  className="w-[22px] h-[22px]"
                  onClick={login.onPasswordShow}
                />
              )}
            </div>
            <div className={`w-full h-[52px] bg-[#313030] px-[18px] flex items-center gap-[16px] rounded-lg border  ${login.error? "border-red-500" : "border-[#B8B6B6]" }`}>
              <MachineIcon />
              <select defaultValue={""} className="w-full bg-transparent py-2 focus:outline-none active:border-none text-[#B8B6B6]" name="operator" id="">
                <option value="" disabled>Select Machine</option>
                <option value="" >Select Machine</option>
              </select>
            </div>
            <div className={`w-full h-[52px] bg-[#313030] px-[18px] flex items-center gap-[16px] rounded-lg border  ${login.error? "border-red-500" : "border-[#B8B6B6]" }`}>
              <ShiftIcon />
              <select defaultValue={""} className="w-full bg-transparent py-2 focus:outline-none text-[#B8B6B6] " name="operator" id="">
                <option value="" disabled>Select Machine</option>
              </select>
            </div>
          </div>
          {
            login.error? (
              <span className="text-[#F04438] opacity-1">
                Your password is not correct
              </span>
            ) : ""
          }
          <button className="w-full h-[44px] bg-[#20519F] rounded-md text-white text-base font-bold">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
