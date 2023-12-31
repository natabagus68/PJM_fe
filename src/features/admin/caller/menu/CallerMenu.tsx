import useDateTime from "@common/components/DateTime";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import React from "react";
import useCallerMenuModel from "./CallerMenuModel";

export default function CallerMenu() {
  const date = useDateTime();
  const caller = useCallerMenuModel();
  return (
    <>
      <ModalConfirm
        open={caller.modalConfirm}
        onSave={caller.handleSubmit}
        onCancel={caller.onCancelRemark}
        time={date.getDateTime("time")}
        handlerChange={caller.handleChangeRemark}
        remark={caller.remark.remark}
      />
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-bold text-6xl text-center">
            Calling Menu
          </h1>
          <button
            onClick={() => caller.handleRemarkFor("maintenance")}
            className="py-8 px-80 bg-[#229BD8] rounded-lg text-4xl text-white font-bold"
          >
            Maintenance
          </button>
          <button
            onClick={() => caller.handleRemarkFor("quality")}
            className="py-8 px-80 bg-[#229BD8] rounded-lg text-4xl text-white font-bold"
          >
            Quality
          </button>
          <button
            onClick={() => caller.handleRemarkFor("leader")}
            className="py-8 px-80 bg-[#229BD8] rounded-lg text-4xl text-white font-bold"
          >
            Leader
          </button>
        </div>
      </div>
      <div
        className="flex items-center justify-between
       px-8 pb-8"
      >
        <button
          onClick={caller.toHistoryCalling}
          className="py-5 px-16 border-4 border-[#2D8DF4] text-[#2D8DF4] text-4xl font-bold"
        >
          History Calling
        </button>
        <button
          className="py-5 px-16 border-4 border-red-500 text-red-500 text-4xl font-bold"
          onClick={caller.onLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
}
