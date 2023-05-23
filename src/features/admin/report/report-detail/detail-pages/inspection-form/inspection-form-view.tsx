import { useInspectionForm } from "./inspection-form-model";

export const InspectionForm = () => {
  const inspection = useInspectionForm();
  return (
    <>
      <div className="grid grid-cols-5 text-center border-b">
        <h1 className="font-[700] p-2 col-span-2">Point Inspection</h1>
        <h1 className="border-l border-r font-[700] p-2 col-span-1">
          Ketetapan
        </h1>
        <h1 className="font-[700] p-2 col-span-2">Notes</h1>
      </div>
      {inspection.data?.inspectionForm.map((item, index) => (
        <div key={item?.id} className="text-sm border-b px-4">
          <div className="flex my-2 gap-1">
            <span className="font-bold">{index + 1}.</span>
            <h1 className="font-[600] max-w-[260px]">{item?.name}</h1>
          </div>
          {item?.data.map((item, num) => (
            <div key={item?.id} className="grid grid-cols-5 mb-2">
              <h1 className="ml-2 col-span-2">
                {num + 1}. {item?.name}
              </h1>
              <span
                className={`
            ${
              item?.ketetapan === "Normal"
                ? "text-[#12B76A]"
                : item?.ketetapan === "Perlu Perhatian"
                ? "text-[#9E77ED]"
                : item?.ketetapan === "Perlu Perbaikan"
                ? "text-[#FFA52F]"
                : item?.ketetapan === "Perlu Adjust"
                ? "text-[#469FFF]"
                : "text-[#F04438]"
            } font-bold text-center`}
              >
                {item?.ketetapan}
              </span>
              <h1 className="ml-2 col-span-2 text-center">{item?.note}</h1>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

