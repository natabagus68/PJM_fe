import useProductionPlanTable from "./MaintenanceCallingTableModel"


export default function MaintenanceCalling() {
  // const table = useProductionPlanTable()
  return(
    <main className="w-full flex flex-col relative">
      <div className="block max-h-[97vh] border border-white overflow-y-auto">
        <table className="w-full border-4 border-white">
          <thead className="text-4xl font-bold text-[#FAB005] bg-[#212121] border-4 border-white sticky top-0">
            <th className="border-4 border-white p-5">Time</th>
            <th className="border-4 border-white p-5">Location</th>
            <th className="border-4 border-white p-5">Remark</th>
            <th className="border-4 border-white p-5">Action</th>
          </thead>
          <tbody className="">
            <tr>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">12:21:12</td>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">Part A</td>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">Machine rusak tiba-tiba</td>
              <td className="border-4 border-white font-bold text-4xl text-center text-white">
                <button className="bg-[#229BD8] py-5 px-16  text-xl font-bold">
                  Action
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">12:21:12</td>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">Part A</td>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">Machine rusak tiba-tiba</td>
              <td className="border-4 border-white font-bold text-4xl text-center text-white">
                <button className="bg-[#229BD8] py-5 px-16  text-xl font-bold">
                  Action
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">12:21:12</td>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">Part A</td>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">Machine rusak tiba-tiba</td>
              <td className="border-4 border-white font-bold text-4xl text-center text-white">
                <button className="bg-[#229BD8] py-5 px-16  text-xl font-bold">
                  Action
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">12:21:12</td>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">Part A</td>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">Machine rusak tiba-tiba</td>
              <td className="border-4 border-white font-bold text-4xl text-center text-white">
                <button className="bg-[#229BD8] py-5 px-16  text-xl font-bold">
                  Action
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">12:21:12</td>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">Part A</td>
              <td className="border-4 border-white p-5 font-bold text-4xl text-center text-white">Machine rusak tiba-tiba</td>
              <td className="border-4 border-white font-bold text-4xl text-center text-white">
                <button className="bg-[#229BD8] py-5 px-16  text-xl font-bold">
                  Action
                </button>
              </td>
            </tr>
            
           
          </tbody>
        </table>
      </div>
    </main>
  )
}