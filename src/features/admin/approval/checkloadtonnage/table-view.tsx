import useCheckLoadTonnage from "@features/admin/approval/checkloadtonnage/tonnage-model";
import { Switch } from '@headlessui/react';

export default function TonnageTable() {
  const tonnage = useCheckLoadTonnage()
  return (
    <>
      {
        !!tonnage.view ? (
          <table className="w-full border border-[#000000] bg-[#E0E0E0] text-center font-[600]">
            <tr className="border">
              <td className="border border-[#D0D3D9] p-2" rowspan={2}>Test</td>
              <td className="border border-[#D0D3D9] p-2" colspan={5}>Acctual Load</td>
              <td className="border border-[#D0D3D9] p-2" colspan={5}>Load Monitor</td>
              <td className="border border-[#D0D3D9] p-2" rowspan={2}>Die Height (mm)</td>
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
            {tonnage.data?.map((item, index) => (
              <tr key={item?.id} className="bg-[#FFFFFF] font-[300]">
                <td className="border border-[#D0D3D9] p-2">{index+1}</td>
                <td className="border border-[#D0D3D9] p-2">{item?.lf_a}</td>
                <td className="border border-[#D0D3D9] p-2">{item?.lr_a}</td>
                <td className="border border-[#D0D3D9] p-2">{item?.rf_a}</td>
                <td className="border border-[#D0D3D9] p-2">{item?.rr_a}</td>
                <td className="border border-[#D0D3D9] p-2">{item?.total_a}</td>
                <td className="border border-[#D0D3D9] p-2">{item?.lf_b}</td>
                <td className="border border-[#D0D3D9] p-2">{item?.lr_b}</td>
                <td className="border border-[#D0D3D9] p-2">{item?.rf_b}</td>
                <td className="border border-[#D0D3D9] p-2">{item?.rr_b}</td>
                <td className="border border-[#D0D3D9] p-2">{item?.total_b}</td>
                <td className="border border-[#D0D3D9] p-2">{item?.die}</td>
              </tr>
            ))}
          </table>
        ) : (
          <TonnageChart />
        )
      }
    </>
  )
}