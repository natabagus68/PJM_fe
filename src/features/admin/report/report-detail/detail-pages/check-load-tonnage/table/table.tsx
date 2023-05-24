import { useTableTonnage } from "./table-model";

export const Table = () => {
  const model = useTableTonnage();
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th
              className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]"
              rowSpan={2}
            >
              Test
            </th>
            <th
              className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]"
              colSpan={5}
            >
              Actual Load
            </th>
            <th
              className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]"
              colSpan={5}
            >
              Load Monitor
            </th>
            <th
              className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]"
              rowSpan={2}
            >
              Die Height (mm)
            </th>
          </tr>
          <tr>
            <th className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]">
              LF
            </th>
            <th className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]">
              LR
            </th>
            <th className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]">
              RF
            </th>
            <th className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]">
              RR
            </th>
            <th className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]">
              Total
            </th>
            <th className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]">
              LF
            </th>
            <th className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]">
              LR
            </th>
            <th className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]">
              RF
            </th>
            <th className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]">
              RR
            </th>
            <th className="bg-neutral-300 py-4 px-4 border border-[#B8B6B6]">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="max-h-50% overflow-y-scroll">
          {model?.data?.loadTonnage?.map((item, index) => (
            <tr key={item?.id}>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {index + 1}
              </td>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {item?.lfActLoad}
              </td>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {item?.lrActLoad}
              </td>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {item?.rfActLoad}
              </td>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {item?.rrActLoad}
              </td>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {item?.totalActLoad}
              </td>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {item?.lfLoadMonitor}
              </td>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {item?.lrLoadMonitor}
              </td>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {item?.rfLoadMonitor}
              </td>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {item?.rrLoadMonitor}
              </td>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {item?.totalLoadMonitor}
              </td>
              <td className="py-4 px-4 border border-[#B8B6B6] text-center">
                {item?.dieHeight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

<td>1</td>;

