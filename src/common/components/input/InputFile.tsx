export default function InputFile({ icon, label, name, isReset, bgColor, ftColor, ...props }) {
  return (
    <>
      <label
        className="block mb-2 text-sm font-[400] text-gray-900 dark:text-black"
        htmlFor="file_input"
      >
      {label}
      </label>
      <div className="flex gap-3">
       <input
          type="file"
          name={name}
          className={`
          block w-full border border-[#D0D3D9] shadow-sm rounded-md text-sm
          focus:z-10 focus:border-gray-500 focus:ring-blue-500
          dark:bg-[#FFFFFF] dark:border-gray-300 dark:text-gray-400
          file:bg-transparent file:border-0
          file:bg-gray-100 file:mr-4
          file:py-2 file:px-4
          dark:file:bg-[${bgColor}] dark:file:text-[${ftColor}]
         `}
          {...props}
        />
        {
          isReset ? (
            <button className="bg-[#F79009] py-1 rounded-md px-4 flex items-center gap-2">
              {icon}
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