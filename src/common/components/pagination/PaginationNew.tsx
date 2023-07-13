import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Filter } from "../Filter";

export default function PaginationNew({
  form,
  handleChange = null,
  page,
  rows,
  lastPage,
  handleLimit = null,
}) {
  return (
    <div className="w-full flex items-center justify-between">
      <span>0 of {rows} row(s) selected.</span>
      <div className="flex items-center gap-[32px]">
        <div className="flex items-center gap-3">
          <span>Limit</span>
          <select
            name="limit"
            value={form.paginate.limit}
            onChange={handleLimit}
            className="border bg-white h-[42px] px-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
        <span>
          Page {page} of {lastPage}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleChange(1)}
            className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center"
          >
            <ChevronsLeft width={18} height={18} />
          </button>
          <button
            onClick={() => handleChange(page > 1 ? page - 1 : page)}
            className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center"
          >
            <ChevronLeft width={18} height={18} />
          </button>
          <button
            onClick={() => handleChange(page < lastPage ? page + 1 : page)}
            className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center"
          >
            <ChevronRight width={18} height={18} />
          </button>
          <button
            onClick={() => handleChange(lastPage)}
            className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center"
          >
            <ChevronsRight width={18} height={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
