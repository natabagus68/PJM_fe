export default function InputFile({
  isReset = false,
  label = "",
  htmlFor = "",
  defaultValue = "",
  bgColor = "",
  ftColor = "",
  width = "",
  btnIcon = null,
  btnReset = null,
  changeHandle = null,
  ...props
}) {
  return (
    <>
      <div className="flex items-center relative gap-2">
        <label
          htmlFor={htmlFor}
          className={`
          w-[${width}] my-3 px-3 py-2
          ${bgColor} ${ftColor}
          flex justify-center
          rounded-tl rounded-bl
          font-[400] text-sm
          cursor-pointer absolute text-white `}
        >
          {label}
        </label>
        <input
          id={htmlFor}
          onChange={changeHandle}
          type="file"
          className="file:hidden border border-gray-300 rounded-md w-full  py-[5px] px-20"
          {...props}
        />
        {isReset ? (
          <button
            type="button"
            role="button"
            className="bg-[#F79009] rounded-md flex items-center p-2 gap-1 text-sm"
            onClick={btnReset}
          >
            <div className="text-[#FFFFFF] flex items-center gap-1">
              <span>{btnIcon}</span>
              <span>Reset</span>
            </div>
          </button>
        ) : null}
      </div>
    </>
  );
}
