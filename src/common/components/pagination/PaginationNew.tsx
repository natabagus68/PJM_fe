import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function PaginationNew() {
  return (
    <div className="w-full flex items-center justify-between">
      <span>0 of 100 row(s) selected.</span>
      <div className="flex items-center gap-[32px]">
        <div className="flex items-center gap-3">
          <span>Limit</span>
          <select className="border bg-white h-[42px] px-1">
            <option>5</option>
            <option>10</option>
          </select>
        </div>
        <span>Page 1 of 10</span>
        <div className="flex items-center gap-2">
          <button className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center">
            <ChevronsLeft width={18} height={18} />
          </button>
          <button className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center">
            <ChevronLeft width={18} height={18} />
          </button>
          <button className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center">
            <ChevronRight width={18} height={18} />
          </button>
          <button className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center">
            <ChevronsRight width={18} height={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
