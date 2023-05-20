import { useState } from "react";
import { Switch } from "@headlessui/react";
import useUserModal from "@features/admin/user/user-model";

export default function CheckBox({
  bgTrueColor,
  bgFalseColor,
  handleActive,
}) {
  const user = useUserModal()
  return (
    <div className="px-10 h-[64px] flex justify-center items-center">
      <Switch
        checked={user.active}
        onChange={user.setActive}
        onClick={handleActive}
        className={`${user.active ? `${bgTrueColor}` : `${bgFalseColor}`}
          relative inline-flex
          h-[20px] w-[32px]
          shrink-0 cursor-pointer rounded-full
          border-2 border-transparent
          transition-colors duration-200 ease-in-out
          focus:outline-none focus-visible:ring-2  focus-visible:ring-white
          focus-visible:ring-opacity-75`}
        >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`
            ${user.active ? 'translate-x-0' : 'translate-x-3'}
            pointer-events-none inline-block
            h-[16px] w-[16px]
            transform rounded-full
            bg-[#FFFFFF] shadow-lg
            ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}