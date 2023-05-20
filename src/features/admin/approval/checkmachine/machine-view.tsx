export default function MachineCheck() {
  return (
    <>
      <div className="grid grid-cols-10 text-center border-b">
        <h1 className="font-[700] p-2 col-span-4">Point Inspection</h1>
        <h1 className="border-l border-r font-[700] p-2 col-span-3">
          Ketetapan
        </h1>
        <h1 className="font-[700] p-2 col-span-3">Notes</h1>
      </div>
      <div className=" text-[#514E4E] border-b px-2 grid grid-cols-10 py-1">
        <div className="col-span-4">
          <div className="flex gap-x-2">
            <span>1.</span>
            <h2>Ampere motor fly wheel berputar (slide diam)</h2>
          </div>
        </div>
        <div className="col-span-3 px-4">
          <div className="flex w-full">
            <div className="w-2/3 text-end">
              <h3 className=" text-[#6F6C6C]">Total</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737]">
                10.1
                <span className="text-[#6F6C6C] ml-1">A</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-[#514E4E] border-b px-2 grid grid-cols-10 py-1">
        <div className="col-span-4">
          <div className="flex gap-x-2">
            <span>2.</span>
            <h2>Ampere motor (slide bergerak)</h2>
          </div>
        </div>
        <div className="col-span-3 px-4">
          <div className="flex justify-end w-full">
            <div className="w-1/3  text-end pl-5">
              <h3 className="text-[#393737]">
                35.8
                <span className="text-[#6F6C6C] ml-1">A</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-[#514E4E] border-b px-2 grid grid-cols-10 py-1">
        <div className="col-span-4">
          <div className="flex gap-x-2">
            <span>3.</span>
            <h2>Flywheel berputar (tanpa main motor)</h2>
          </div>
        </div>
        <div className="col-span-3 px-4">
          <div className="flex justify-end w-full">
            <div className="w-1/3  text-end pl-5">
              <h3 className="text-[#393737]">
                410
                <span className="text-[#6F6C6C] ml-1">sec</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-[#514E4E] border-b px-2 grid grid-cols-10 py-1">
        <div className="col-span-4">
          <div className="flex gap-x-2">
            <span>4.</span>
            <h2>Siklus Slide free running</h2>
          </div>
        </div>
        <div className="col-span-3 px-4">
          <div className="flex justify-end w-full">
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737]">
                -<span className="text-[#6F6C6C] ml-1">times</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-[#514E4E] border-b px-2 grid grid-cols-10 py-1">
        <div className="col-span-4">
          <div className="flex gap-x-2">
            <span>5.</span>
            <h2>Press total clearance</h2>
          </div>
        </div>
        <div className="col-span-3 px-4">
          <div className="flex w-full">
            <div className="w-2/3 text-end">
              <h3 className=" text-[#6F6C6C]">Total</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737]">
                -<span className="text-[#6F6C6C] ml-1">mm</span>
              </h3>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-2/3 text-end">
              <h3 className=" text-[#6F6C6C]">Point</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737]">
                -<span className="text-[#6F6C6C] ml-1">mm</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-10 mb-2">
          <table className="w-full table-fixed my-2">
            <thead className="bg-[#F5F5F5] border h-[40px] text-[#514E4E] font-semibold">
              <tr>
                <th className="border-r">Standar</th>
                <th className="border-r">P = Kapasitas Press</th>
                <th className="border-r">Nilai Maksimum</th>
                <th className="">Actual</th>
              </tr>
            </thead>
            <tbody className="text-[#514E4E] text-center h-[40px] border">
              <tr>
                <td className="border-r">0,2+3√P/10/100</td>
                <td className="border-r font-semibold">0</td>
                <td className="border-r">1,2</td>
                <td className="font-medium">123</td>
              </tr>
            </tbody>
          </table>
          <div className="flex w-1/2 border ml-auto h-[40px] rounded">
            <div className="border-r h-full flex items-center justify-center bg-[#F5F5F5] w-1/2">
              <h2 className="text-[#514E4E] font-semibold leading-4 text-base">
                Hasil Ketetapan
              </h2>
            </div>
            <div className="border-r h-full flex items-center justify-center w-1/2">
              <h2 className="text-[#FFA52F] font-medium leading-4 text-base">
                R = Perlu Perbaikan
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-[#514E4E] border-b px-2 grid grid-cols-10 py-1">
        <div className="col-span-4">
          <div className="flex gap-x-2">
            <span>6.</span>
            <h2>Amphere Motor slide adjust</h2>
          </div>
        </div>
        <div className="col-span-3 px-4">
          <div className="flex w-full">
            <div className="w-2/3 text-end">
              <h3 className=" text-[#6F6C6C]">Up</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737]">
                7.7<span className="text-[#6F6C6C] ml-1">A</span>
              </h3>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-2/3 text-end">
              <h3 className=" text-[#6F6C6C]">Down</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737]">
                8.1<span className="text-[#6F6C6C] ml-1">A</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-[#514E4E] border-b px-2 grid grid-cols-10 py-1">
        <div className="col-span-4">
          <div className="flex gap-x-2">
            <span>7.</span>
            <h2>Pararelism antara bolster dan slide pada titik TMB</h2>
          </div>
        </div>
        <div className="col-span-3 px-4 flex items-center">
          <div className="flex justify-end w-full">
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#12B76A] text-center font-bold">OK</h3>
            </div>
          </div>
        </div>
        <div className="col-span-3 text-center">
          <h3>180°</h3>
          <h3>(std= 0,03+0,08/500xL2)</h3>
          <h3>L2 0 mm Standard 0,03 mm</h3>
        </div>
      </div>
      <div className=" text-[#514E4E] border-b px-2 grid grid-cols-10 py-1">
        <div className="col-span-4">
          <div className="flex gap-x-2">
            <span>8.</span>
            <h2>Pengukuran dengan Stopping Time</h2>
          </div>
        </div>
        <div className="col-span-10">
          <div className="flex w-1/2 ml-auto">
            <div className="w-1/2 px-3">
              <div className="flex w-full justify-between mb-2">
                <h3>Tes</h3>
                <h3>Stopping Time (mS)</h3>
              </div>
              <div className="flex w-full border mb-3 rounded">
                <div className="min-w-[40px] flex justify-center items-center bg-[#F5F5F5] border-r">
                  1
                </div>
                <input
                  className="w-full py-2 px-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="00:00,00"
                />
              </div>
              <div className="flex w-full border mb-3 rounded">
                <div className="min-w-[40px] flex justify-center items-center bg-[#F5F5F5] border-r">
                  2
                </div>
                <input
                  className="w-full py-2 px-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="00:00,00"
                />
              </div>
              <div className="flex w-full border mb-3 rounded">
                <div className="min-w-[40px] flex justify-center items-center bg-[#F5F5F5] border-r">
                  3
                </div>
                <input
                  className="w-full py-2 px-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="00:00,00"
                />
              </div>
              <div className="flex w-full border mb-3 rounded">
                <div className="min-w-[40px] flex justify-center items-center bg-[#F5F5F5] border-r">
                  4
                </div>
                <input
                  className="w-full py-2 px-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="00:00,00"
                />
              </div>
              <div className="flex w-full border mb-3 rounded">
                <div className="min-w-[40px] flex justify-center items-center bg-[#F5F5F5] border-r">
                  5
                </div>
                <input
                  className="w-full py-2 px-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="00:00,00"
                />
              </div>
            </div>
            <div className="w-1/2 px-3">
              <div className="flex w-full justify-between mb-2">
                <h3>Tes</h3>
                <h3>Stopping Time (mS)</h3>
              </div>
              <div className="flex w-full border mb-3 rounded">
                <div className="min-w-[40px] flex justify-center items-center bg-[#F5F5F5] border-r">
                  6
                </div>
                <input
                  className="w-full py-2 px-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="00:00,00"
                />
              </div>
              <div className="flex w-full border mb-3 rounded">
                <div className="min-w-[40px] flex justify-center items-center bg-[#F5F5F5] border-r">
                  7
                </div>
                <input
                  className="w-full py-2 px-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="00:00,00"
                />
              </div>
              <div className="flex w-full border mb-3 rounded">
                <div className="min-w-[40px] flex justify-center items-center bg-[#F5F5F5] border-r">
                  8
                </div>
                <input
                  className="w-full py-2 px-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="00:00,00"
                />
              </div>
              <div className="flex w-full border mb-3 rounded">
                <div className="min-w-[40px] flex justify-center items-center bg-[#F5F5F5] border-r">
                  9
                </div>
                <input
                  className="w-full py-2 px-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="00:00,00"
                />
              </div>
              <div className="flex w-full border mb-3 rounded">
                <div className="min-w-[40px] flex justify-center items-center bg-[#F5F5F5] border-r">
                  10
                </div>
                <input
                  className="w-full py-2 px-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="00:00,00"
                />
              </div>
            </div>
          </div>
          <div className="flex w-1/2 ml-auto">
            <h3 className=" px-3">Maksimum Stopping Time = 0 mS</h3>
          </div>
        </div>
      </div>
    </>
  );
}