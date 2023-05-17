import { Switch } from '@headlessui/react';
import TonnageTable from "@features/admin/approval/checkloadtonnage/table-view";
import TonnageChart from "@features/admin/approval/checkloadtonnage/chart-view";
import useCheckLoadTonnage from "@features/admin/approval/checkloadtonnage/tonnage-model";

export default function TonnageView() {
  const tonnage = useCheckLoadTonnage()
  return (
    <>
      <div className="flex justify-end gap-3 my-4 mx-6">
        <h1 className="font-[600]">View Mode:</h1>
        <div className="flex gap-2 items-center">
          <span className={`${tonnage.view ? 'text-[#19ACC1]' : 'text-[#B8B6B6]'}`}>Table</span>
          <Switch
            checked={tonnage.view}
            onChange={tonnage.setView}
            onClick={() => tonnage.handleViewChart()}
            className={`${tonnage.view ? 'bg-[#19ACC1]' : 'bg-[#12B569]'}
              relative inline-flex h-[20px] w-[32px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${tonnage.view ? 'translate-x-0' : 'translate-x-3'}
                pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <span className={`${!tonnage.view ? 'text-[#12B569]' : 'text-[#B8B6B6]'}`}>Chart</span>
        </div>
      </div>
      {!!tonnage.view ? (<TonnageTable />) : <TonnageChart />}
    </>
  )
}