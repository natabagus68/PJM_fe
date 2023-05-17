import useCheckLoadTonnage from "@features/admin/approval/checkloadtonnage/tonnage-model";

export default function TonnageChart() {
  const tonnage = useCheckLoadTonnage()
  return (
    <>
      <div>
        <h1>Total Tonnage</h1>
      </div>
      <div>
        <h1>Channel 1 - Left Front (LF)</h1>
      </div>
      <div>
        <h1>Channel 2 - Left Rear (LR)</h1>
      </div>
      <div>
        <h1>Channel 3 - Right Front (FR)</h1>
      </div>
      <div>
        <h1>Channel 3 - Right Rear (RR)</h1>
      </div>
    </>
  )
}