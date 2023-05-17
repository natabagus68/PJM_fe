export const Table = () => {
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
          <tr>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
            <td className="py-4 px-4 border border-[#B8B6B6] text-center">1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

