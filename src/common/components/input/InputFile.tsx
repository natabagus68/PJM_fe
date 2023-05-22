export default function InputFile({
  label   = "",
  htmlFor = "",
  value   = "",
  bgColor = "",
  ftColor = "",
  width   = "",
  isReset = false,
  children,
  handleReset = null,
  ...props
}) {
  return (
    <>
      <div className="flex items-center">
        <label
          htmlFor={htmlFor}
          className={`
          w-[${width}] my-3 px-3 py-2
          bg-[${bgColor}] text-[${ftColor}]
          flex justify-center
          rounded-tl rounded-bl
          font-[400] text-sm
          cursor-pointer`}
          {...props}
        >
          {label}
        </label>
        <input
          type="text"
          className="border inline px-3 py-[5px] w-[78%] rounded-tr rounded-br mr-2 text-[#B8B6B6]"
          value={value}
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
              onClick={handleReset}
            >
              {children}
              <span className="text-[#FFFFFF]">Reset</span>
            </button>
          ) : (
            null
          )
        }
      </div>
    </>
  )
}