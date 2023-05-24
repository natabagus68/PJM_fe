import useCheckLoadTonnage from "@features/admin/approval/checkloadtonnage/tonnage-model";
import { Switch } from "@headlessui/react";
import TonnageChart from "../chart/chart-view";
import { AprovalReport } from "@domain/models/aproval-report";

export default function TonnageTable({ data = null }) {
  const tonnage = useCheckLoadTonnage();
  return (
    <>
      {!!tonnage.view ? (
        <table className="w-full border border-[#000000] bg-[#E0E0E0] text-center font-[600]">
          <tr className="border">
            <td className="border border-[#D0D3D9] p-2" rowSpan={2}>
              Test
            </td>
            <td className="border border-[#D0D3D9] p-2" colSpan={5}>
              Acctual Load
            </td>
            <td className="border border-[#D0D3D9] p-2" colSpan={5}>
              Load Monitor
            </td>
            <td className="border border-[#D0D3D9] p-2" rowSpan={2}>
              Die Height (mm)
            </td>
          </tr>
          <tr>
            <td className="border border-[#D0D3D9] p-2">LF</td>
            <td className="border border-[#D0D3D9] p-2">LR</td>
            <td className="border border-[#D0D3D9] p-2">RF</td>
            <td className="border border-[#D0D3D9] p-2">RR</td>
            <td className="border border-[#D0D3D9] p-2">Total</td>
            <td className="border border-[#D0D3D9] p-2">LF</td>
            <td className="border border-[#D0D3D9] p-2">LR</td>
            <td className="border border-[#D0D3D9] p-2">RF</td>
            <td className="border border-[#D0D3D9] p-2">RR</td>
            <td className="border border-[#D0D3D9] p-2">Total</td>
          </tr>
          {data?.loadTonnage?.map((item, index) => (
            <tr key={item?.id} className="bg-[#FFFFFF] font-[300]">
              <td className="border border-[#D0D3D9] p-2">{index + 1}</td>
              <td className="border border-[#D0D3D9] p-2">{item?.lfActLoad}</td>
              <td className="border border-[#D0D3D9] p-2">{item?.lrActLoad}</td>
              <td className="border border-[#D0D3D9] p-2">{item?.rfActLoad}</td>
              <td className="border border-[#D0D3D9] p-2">{item?.rrActLoad}</td>
              <td className="border border-[#D0D3D9] p-2">
                {item?.totalActLoad}
              </td>
              <td className="border border-[#D0D3D9] p-2">
                {item?.lfLoadMonitor}
              </td>
              <td className="border border-[#D0D3D9] p-2">
                {item?.lrLoadMonitor}
              </td>
              <td className="border border-[#D0D3D9] p-2">
                {item?.rfLoadMonitor}
              </td>
              <td className="border border-[#D0D3D9] p-2">
                {item?.rrLoadMonitor}
              </td>
              <td className="border border-[#D0D3D9] p-2">
                {item?.totalLoadMonitor}
              </td>
              <td className="border border-[#D0D3D9] p-2">{item?.dieHeight}</td>
            </tr>
          ))}
        </table>
      ) : (
        <TonnageChart />
      )}
    </>
  );
}
