export default function InputFile({
  label        = "",
  htmlFor      = "",
  defaultValue = "",
  bgColor      = "",
  ftColor      = "",
  width        = "",
  isReset      = false,
  btnName      = "",
  btnIcon      = null,
  btnHandle    = null,
  ...props
}) {
  return (
    <>
      <div className="flex items-center">
        <label
          htmlFor={htmlFor}
          className={`
          w-[${width}] my-3 px-3 py-2
          ${bgColor} ${ftColor}
          flex justify-center
          rounded-tl rounded-bl
          font-[400] text-sm
          cursor-pointer`}
          {...props}
        >
          {label}
        </label>
        <input
          defaultValue={defaultValue}
          type="text"
          className="border inline px-3 py-[5px] w-[78%] rounded-tr rounded-br mr-2 text-[#B8B6B6]"
          onClick={() => alert("you clicked me!")}
          disabled
        />
        <input
          id={htmlFor}
          type="file"
          className="hidden"
        />
        {
          isReset ? (
            <button
              className="bg-[#F79009] rounded-md flex items-center p-2 gap-1 text-sm"
              onClick={btnHandle}
            >
              <div className="text-[#FFFFFF] flex items-center gap-1">
                <span>{btnIcon}</span>
                <span>{btnName}</span>
              </div>
            </button>
          ) : (
            null
          )
        }
      </div>
    </>
  )
}