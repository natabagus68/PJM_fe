import useInspection from "@features/admin/approval/inspectionform-model";

export default function InspectionForm() {
  const inspection = useInspection()
  return (
    <>
      {inspection?.inspectform.map((item, index) => (
      <div key={item?.id} className="text-sm border-b px-4">
          <div className="flex my-2 gap-1">
            <span className="font-bold">{index+1}.</span>
            <h1 className="font-[600] max-w-[260px]">{item?.title}</h1>
          </div>
          {item?.information.map((item, num) => (
            <div key={item?.id} className="grid grid-cols-5 mb-2">
              <h1 className="ml-2 col-span-2">{num+1}. {item?.name}</h1>
              <span className={`
                ${item?.ketepatan === "Normal"
                ? "text-[#12B76A]"
                : item?.ketepatan === "Perlu Perhatian"
                ? "text-[#9E77ED]"
                : item?.ketepatan === "Perlu Perbaikan"
                ? "text-[#FFA52F]"
                : item?.ketepatan === "Perlu Adjust"
                ? "text-[#469FFF]"
                : "text-[#F04438]"} font-bold text-center`}
              >
                {item?.ketepatan}
              </span>
              <h1 className="ml-2 col-span-2">{item?.notes}</h1>
            </div>
          ))}
      </div>
      ))}
    </>
  )
}