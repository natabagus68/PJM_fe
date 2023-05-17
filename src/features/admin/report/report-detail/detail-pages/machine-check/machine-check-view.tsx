export const MachineCheck = () => {
  return (
    <>
      <div className="w-full rounded-xl border border-gray-300 pb-3">
        {/* header */}
        <div className="flex w-full">
          <div className="w-full py-2 text-center font-semibold border-b border-gray-300">
            Point Inspection
          </div>
          <div className="w-full py-2 text-center font-semibold border-b border-gray-300">
            Ketetapan
          </div>
          <div className="w-full py-2 text-center font-semibold border-b border-gray-300">
            Notes
          </div>
        </div>
        {/* body */}

        <div className="flex w-full border-b border-gray-300">
          <div className="w-full py-2 text-start pl-5  ">
            1.Ampere motor fly wheel berputar (slide diam)
          </div>
          <div className="w-full py-2 text-start pl-5 flex justify-around ">
            Total
            <p className="text-end">
              <span className="font-bold">10,1</span> A
            </p>
          </div>
          <div className="w-full py-2 text-start pl-5  "></div>
        </div>
        <div className="flex w-full border-b border-gray-300">
          <div className="w-full py-2 text-start pl-5  ">
            2.Ampere motor (slide bergerak)
          </div>
          <div className="w-full py-2 text-start pl-48 flex justify-around">
            <p className="text-end">
              <span className="font-bold">35,8</span> A{" "}
            </p>
          </div>
          <div className="w-full py-2 text-start pl-5  "></div>
        </div>
        <div className="flex w-full border-b border-gray-300">
          <div className="w-full py-2 text-start pl-5  ">
            3.Flywheel berputar (tanpa main motor)
          </div>
          <div className="w-full py-2 text-startt pl-48 flex justify-around ">
            <p>
              {" "}
              <span className="font-bold">410</span> sec{" "}
            </p>
          </div>
          <div className="w-full py-2 text-start pl-5  "></div>
        </div>
        <div className="flex w-full border-b border-gray-300">
          <div className="w-full py-2 text-start pl-5  ">
            4.Siklus Slide free running
          </div>
          <div className="w-full py-2 text-start  pl-48 flex justify-around">
            <p>- times</p>
          </div>
          <div className="w-full py-2 text-start pl-5  "></div>
        </div>

        <div className="flex w-full ">
          <div className="w-full py-2 text-start pl-5 ">
            5.Press total clearance
          </div>
          <div className="w-full py-2 text-center flex justify-around">
            - Total <p>- mm</p>{" "}
          </div>
          <div className="w-full py-2 text-center "></div>
        </div>
        <div className="flex w-full ">
          <div className="w-full py-2 text-center "></div>
          <div className="w-full py-2 text-center flex justify-around">
            - Total <p> - mm</p>{" "}
          </div>
          <div className="w-full py-2 text-center "></div>
        </div>
        <div className="flex w-full py-2 justify-center ">
          <table className="w-[80%]">
            <thead>
              <th className="py-2 bg-gray-200 ">Standar</th>
              <th className="py-2 bg-gray-200 ">P = Kapasitas Press</th>
              <th className="py-2 bg-gray-200 ">Nilai Maksimum</th>
              <th className="py-2 bg-gray-200 ">Actual</th>
            </thead>
            <tbody>
              <td className="py-2 border border-gray-300 text-center ">
                Standar
              </td>
              <td className="py-2 border border-gray-300 text-center ">
                P = Kapasitas Press
              </td>
              <td className="py-2 border border-gray-300 text-center ">
                Nilai Maksimum
              </td>
              <td className="py-2 border border-gray-300 text-center ">
                Actual
              </td>
            </tbody>
          </table>
        </div>
        <div className="flex w-full py-2 justify-end pr-32 border-b border-gray-300">
          <table>
            <tr>
              <td className="py-2 bg-gray-200  px-5">Hasil Ketetapan</td>
              <td className="py-2 border border-gray-300 text-center px-5 text-yellow-400">
                R = Perlu Perbaikan
              </td>
            </tr>
          </table>
        </div>
        <div className="flex w-full ">
          <div className="w-full py-2 text-start pl-5  ">
            6.Amphere Motor slide adjust
          </div>
          <div className="w-full py-2 text-start pl-5 flex justify-around ">
            Up
            <p className="text-end">
              <span className="font-bold">77</span> A
            </p>
          </div>
          <div className="w-full py-2 text-start pl-5  "></div>
        </div>
        <div className="flex w-full border-b border-gray-300">
          <div className="w-full py-2 text-start pl-5  ">{""}</div>
          <div className="w-full py-2 text-start pl-5 flex justify-around ">
            Down
            <p className="text-end">
              <span className="font-bold">81</span> A
            </p>
          </div>
          <div className="w-full py-2 text-start pl-5  "></div>
        </div>
        <div className="flex w-full border-b border-gray-300">
          <div className="w-full py-2 text-start pl-5  ">
            7.Pararelism antara bolster dan slide pada titik TMB
          </div>
          <div className="w-full py-2 text-start pl-5 flex justify-center items-center ">
            ok
          </div>
          <div className="w-full py-2 text-center pl-5">
            <p>{"180°"}</p>
            <p>{"(std= 0,03+0,08/500xL2)"}</p>
            <p>{`L2 0 mm Standard 0,03 mm`}</p>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-300">
          <div className="w-full py-12 text-start pl-5  ">
            8.Pararelism antara bolster dan slide pada titik TMB
          </div>

          <div className="w-full py-12 text-center pl-5 flex flex-wrap ">
            <div className="w-52 flex h-8 rounded-md border border-gray-300">
              <div className="w-1/3 h-full rounded-l-md text-center text-neutral-600 border-r border-gray-300 bg-neutral-200">
                1
              </div>
              <div className="w-full h-full px-1 text-xl text-neutral-400">
                0:00,00
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

