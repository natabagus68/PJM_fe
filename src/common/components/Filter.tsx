import { SearchIcon } from "lucide-react";

export const Filter = ({ children, handleChange = null }) => {
  return (
    <>
      <div className="w-full p-3 flex items-center justify-between bg-[#F0F1F3] rounded-md">
        <div className="w-[425px] h-[40px] bg-white border border-[#D0D3D9] rounded-md relative">
          <SearchIcon
            className={"absolute w-5 h-5 text-[#D0D3D9] top-2 left-2"}
          />
          <input
            type="text"
            name="q"
            placeholder="Search location..."
            onChange={handleChange}
            className="w-full h-full outline-none py-2 px-9  rounded-md"
          />
        </div>
        {children}
      </div>
    </>
  );
};
