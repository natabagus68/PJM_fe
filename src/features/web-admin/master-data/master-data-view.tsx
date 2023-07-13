import { Breadcrumbs } from "@common/components";
import { Box } from "@common/components/Box";
import { Filter } from "@common/components/Filter";
import PaginationNew from "@common/components/pagination/PaginationNew";
import { Loader, PlusIcon } from "lucide-react";
import { useMasterData } from "./master-data-view-model";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import { Spinner } from "@material-tailwind/react";
export const MasterData = () => {
  const model = useMasterData();
  return (
    <>
      <Breadcrumbs items={["Master Data"]} />
      <div className="mt-4">
        <Box>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[24px] font-bold text-[#313030]">
                Master Data
              </h1>
              <p className="text-[16px] font-[400] text-[#667085] mt-2">
                Management area data.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <Filter form={model.filter} handleChange={model.handleFilter}>
              <div className="flex items-center gap-2 relative">
                <h1 className="text-[#313030] text-[14px] font-[600]">
                  Short by
                </h1>
                <select
                  name="sortby"
                  value={model.filter.sortby}
                  onChange={model.handleFilter}
                  className="py-3 pr-4 pl-5 border bg-white rounded-md text-[#667085]"
                >
                  <option value="asc">Name (A-Z)</option>
                  <option value="dsc">Name (Z-A)</option>
                  <option value="line">Last Update</option>
                  <option value="machine">First Update</option>
                </select>
              </div>
            </Filter>
            {/* table */}
            <table className="w-full overflow-hidden">
              <thead>
                <tr>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">Line</p>
                    </div>
                  </th>
                  <th>
                    <div className="h-[52px]  flex items-center p-2 border-y border-[#D0D3D9] bg-[#FAFAFB]">
                      <p className="font-[600] text-[#667085]">Plant</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {!model.loading &&
                  model.data.data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <div className="h-[66px]  bg-white flex items-center py-4 px-2 border-b border-[#D0D3D9]">
                            <p className="font-[400] text-[16px] text-[#514E4E]">
                              {item.id}
                            </p>
                          </div>
                        </td>
                        <td className="">
                          <div className="h-[66px]  bg-white flex items-center py-4 px-2 border-b border-[#D0D3D9]">
                            <p className="font-[400] text-[16px] text-[#514E4E]">
                              {item.plant}
                            </p>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {model.loading && (
              <div className="flex justify-center w-full ">
                <Spinner />
              </div>
            )}
            <PaginationNew
              form={model.filter}
              handleChange={model.handlePageination}
              page={model.filter.paginate.page}
              rows={model.data.rows}
              lastPage={model.data.lastPage}
              handleLimit={model.handleLimit}
            />
          </div>
        </Box>
      </div>
    </>
  );
};
