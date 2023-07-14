import ModalResponse from "@common/components/modals/ModalResponse";
import useProductionPlanTable from "./MaintenanceHandlingTableModel";
import ModalHandling from "@common/components/modals/ModalHandling";
import useMaintanceHandling from "./MaintenanceHandlingTableModel";

export default function MaintenanceHandling() {
  const table = useMaintanceHandling();
  return (
    <>
      <ModalResponse
        open={table.modalResponse}
        onCancel={table.onCancelResponse}
        onSave={table.onResponseOk}
        remark={table.temp.problem}
      />
      <ModalHandling
        open={table.modalHandling}
        onCancel={table.onCancleHandling}
        onSave={table.onHandlingConfirm}
        remark={table.temp.problem}
        onChange={table.onChangeHandling}
      />
      <main className="w-full flex flex-col relative">
        <div className="block max-h-[97vh] border border-white overflow-y-auto">
          <table className="w-full border-4 border-white">
            <thead className="text-4xl font-bold text-[#FAB005] bg-[#212121] border-4 border-white sticky top-0">
              <th className="border-4 border-white p-5">Time</th>
              <th className="border-4 border-white p-5">Location</th>
              <th className="border-4 border-white p-5">Remark Problem</th>
              <th className="border-4 border-white p-5">Time Handling</th>
              <th className="border-4 border-white p-5">Handling</th>
              <th className="border-4 border-white p-5">Option</th>
            </thead>
            <tbody className="">
              {table.data.map((item) => {
                return (
                  <>
                    <tr>
                      <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">
                        {item.time}
                      </td>
                      <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">
                        {item.location}
                      </td>
                      <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">
                        {item.problem}
                      </td>
                      <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">
                        {item.timeHandling}
                      </td>
                      <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">
                        {item.handling}
                      </td>
                      <td className="border-4 border-white font-bold text-4xl text-center text-white">
                        {!item.isHandle ? (
                          <button
                            onClick={() => table.onResponse(item.id)}
                            className="bg-[#229BD8] py-5 px-16  text-xl font-bold"
                          >
                            Response
                          </button>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
