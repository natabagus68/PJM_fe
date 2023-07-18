import ModalConfirm from "@common/components/modals/ModalConfirm";
import useProductionPlanTable from "./MaintenanceCallingTableModel";

export default function MaintenanceCalling() {
  const model = useProductionPlanTable();
  return (
    <>
      <ModalConfirm
        open={model.open}
        onCancel={model.handleClose}
        remark={model.remark.remark}
        handlerChange={model.handleChangeREmark}
        onSave={model.onSubmit}
      />
      <table className="w-full ">
        <thead>
          <tr>
            <th>
              <div className="py-[25px] border-r-4 border-b-4 border-white flex justify-center items-center">
                <p className="text-[#FAB005] text-[42px] font-bold">Time</p>
              </div>
            </th>
            <th>
              <div className="py-[25px] border-r-4 border-b-4 border-white flex justify-center items-center">
                <p className="text-[#FAB005] text-[42px] font-bold">Line</p>
              </div>
            </th>
            <th>
              <div className="py-[25px] border-r-4 border-b-4 border-white flex justify-center items-center">
                <p className="text-[#FAB005] text-[42px] font-bold">
                  Calling Type
                </p>
              </div>
            </th>
            <th>
              <div className="py-[25px] border-r-4 border-b-4 border-white flex justify-center items-center">
                <p className="text-[#FAB005] text-[42px] font-bold">Remark</p>
              </div>
            </th>
            <th>
              <div className="py-[25px] border-r-4 border-b-4 border-white flex justify-center items-center">
                <p className="text-[#FAB005] text-[42px] font-bold">Option</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {model.data.map((item) => (
            <tr>
              <td>
                <div className="py-[25px] border-r-4 border-b-4 border-white flex justify-center items-center">
                  <p className="text-white text-[32px] font-bold">
                    {item.time}
                  </p>
                </div>
              </td>
              <td>
                <div className="py-[25px] border-r-4 border-b-4 border-white flex justify-center items-center">
                  <p className="text-white text-[32px] font-bold">
                    {item.line}
                  </p>
                </div>
              </td>
              <td>
                <div className="py-[25px] border-r-4 border-b-4 border-white flex justify-center items-center">
                  <p className="text-white text-[32px] font-bold">
                    {item.type}
                  </p>
                </div>
              </td>
              <td>
                <div className="py-[25px] border-r-4 border-b-4 border-white flex justify-center items-center">
                  <p className="text-white text-[32px] font-bold">
                    {item.remark}
                  </p>
                </div>
              </td>
              <td>
                <div className="py-[20px] border-r-4 border-b-4 border-white flex justify-center items-center box-border">
                  <button
                    onClick={() => model.handleOpen(item.id)}
                    className="bg-[#2D8DF4] py-[18px] px-[31px] text-white font-bold text-[16px] "
                  >
                    Edit Calling
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
