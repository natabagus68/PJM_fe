import { Breadcrumbs } from "@common/components";
import { ButtonDetail } from "@common/components/buttons/detail";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import Pagination from "@common/components/pagination/Pagination";
import { useReport } from "./report-view-model";

export const Report = () => {
  const model = useReport();
  return (
    <>
      <div>
        <Breadcrumbs items={["Report Document"]} />
      </div>
      <div className="w-full border border-gray-300 rounded-xl mt-12 bg-white pb-4">
        <div className="w-full py-6 px-4 border-b border-gray-300 flex justify-between">
          <h1 className="font-semibold text-3xl">Report Document</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-300 absolute top-2.5 left-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search"
                value={model.params.q}
                onChange={model.handleSearch}
                className="border border-gray-300 bg-white outline-none rounded-md py-2.5 px-9 "
              />
            </div>
            <button className="px-5 py-2.5 rounded-md bg-teal-500 text-white flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download Report
            </button>
          </div>
        </div>
        <section>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-start py-3 px-5 bg-neutral-50 text-natural-300 font-semibold border-b border-gray-300 ">
                  Inspection ID
                </th>
                <th className="text-start py-3 px-5 bg-neutral-50 text-natural-300 font-semibold border-b border-gray-300 ">
                  Inspection Date
                </th>
                <th className="text-start py-3 px-5 bg-neutral-50 text-natural-300 font-semibold border-b border-gray-300 ">
                  Customer
                </th>
                <th className="text-start py-3 px-5 bg-neutral-50 text-natural-300 font-semibold border-b border-gray-300 ">
                  Machine Name
                </th>
                <th className="text-start py-3 px-5 bg-neutral-50 text-natural-300 font-semibold border-b border-gray-300 ">
                  Inspector
                </th>
                <th className="text-start py-3 px-5 bg-neutral-50 text-natural-300 font-semibold border-b border-gray-300 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {model.data?.map((item) => {
                return (
                  <tr>
                    <td className="text-start py-3 px-5  text-natural-300  border-b border-gray-300 ">
                      {item.inspectionID}
                    </td>
                    <td className="text-start py-3 px-5  text-natural-300  border-b border-gray-300 ">
                      {item.inspectionDate}
                    </td>
                    <td className="text-start py-3 px-5  text-natural-300  border-b border-gray-300 ">
                      {item.customer}
                    </td>
                    <td className="text-start py-3 px-5  text-natural-300  border-b border-gray-300 ">
                      {item.machineName}
                    </td>
                    <td className="text-start py-3 px-5  text-natural-300  border-b border-gray-300 ">
                      {item.inspector}
                    </td>
                    <td className="text-start py-3 px-5  text-natural-300 cursor-pointer border-b border-gray-300 flex items-center gap-10">
                      <div onClick={() => model.toDetail(item.id)}>
                        <ButtonDetail />
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <div className="flex justify-end px-4 mt-5">
          <Pagination row={0} limit={0} page={0} onClick={null} />
        </div>
      </div>
    </>
  );
};

