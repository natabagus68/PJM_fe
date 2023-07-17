import Modal from "./Modal";
import LoadingIcon from "../icons-new/LoadingIcon";
import { useState, useEffect } from "react";
import AlertIcon from "../icons-new/AlertIcon";

export default function ModalConfirm({
  open = false,
  setOpen = null,
  setOpenSuccess = null,
  onSave = null,
  onCancel = null,
  time = null,
  handlerChange = null,
  remark = null,
}) {
  const [isLoading, setIsLoading] = useState({
    loading: false,
    exec: false,
  });

  useEffect(() => {
    if (!isLoading.loading && isLoading.exec) {
      setIsLoading({ loading: false, exec: false });
      setOpen(false);
      setTimeout(() => {
        setOpenSuccess(true);
      }, 300);
    }
  }, [isLoading.loading, isLoading.exec]);
  return (
    <Modal open={open}>
      <div className="w-[550px] flex flex-col gap-3 p-3 items-center">
        <AlertIcon />
        <div className="flex items-center flex-col">
          <span className="text-[#2D2A2A] text-[30px] font-bold">
            Confirm Maintenance Calling?
          </span>
          <span className="text-[#514E4E]">
            {"Line B"} | {time}
          </span>
        </div>

        <form onSubmit={onSave} className="w-full">
          <div className="flex flex-col gap-3 pb-8">
            <label
              htmlFor="remark"
              className="text-[#DE1B1B] font-bold text-xl"
            >
              Remark
            </label>
            <input
              type="text"
              className="p-3 w-full border"
              placeholder="Input remark"
              value={remark}
              onChange={handlerChange}
            />
          </div>
          <div className="flex w-full items-end gap-4">
            {isLoading.loading ? (
              <button className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] bg-[#229BD8] rounded text-white text-sm font-semibold">
                <LoadingIcon
                  color="white"
                  className="w-[24px] h-[24px] animate-spin"
                />
              </button>
            ) : (
              <button
                className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] bg-[#229BD8] rounded text-white text-xl font-semibold"
                role="button"
                type="submit"
                onClick={onSave}
              >
                <span>Confirm</span>
              </button>
            )}
            <button
              className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] border border-[#B8B6B6] rounded text-[#514E4E] text-xl font-semibold"
              type="button"
              role="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
