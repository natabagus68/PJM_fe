import useAccuracy from "@features/admin/approval/checkaccuracy/accuracy-model";
import { config } from "@common/utils";

export default function AccuracyCheck() {
  const accuracy = useAccuracy();
  return (
    <>
      <div className="grid grid-cols-10 text-center border-b">
        <h1 className="font-[700] p-2 col-span-4">Point Inspection</h1>
        <h1 className="border-l border-r font-[700] p-2 col-span-3">
          Ketetapan
        </h1>
        <h1 className="font-[700] p-2 col-span-3">Notes</h1>
      </div>
      <div className="border-b px-4 py-1">
        <div className="flex gap-x-1 text-[#313030] font-semibold mb-1">
          <span>1.</span>
          <h2>Parallelism</h2>
        </div>
        <div className="grid text-[#514E4E] grid-cols-10 gap-x-5">
          <div className="col-span-4">
            <h3 className=" ml-3">
              Parallelism between slide and bolster Slide adjustment middle
            </h3>
          </div>
          <div className="col-span-3">
            <div className="flex w-full mb-3">
              <div className="w-2/3 text-end">
                <h3 className=" text-[#6F6C6C]">Unit</h3>
              </div>
              <div className="w-1/3 text-end pl-5">
                <h3 className="text-[#393737]">
                  {accuracy.data.accuracyCheck.unit}
                  <span className="text-[#6F6C6C] ml-1">mm</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-span-3 col-start-5">
            <div className="flex w-full mb-3">
              <div className="w-2/3 text-end">
                <h3 className=" text-[#6F6C6C]">Balancer Air Pressure</h3>
              </div>
              <div className="w-1/3 text-end">
                <h3 className="text-[#393737] pl-5">
                  {accuracy.data.accuracyCheck.balancerAirPsr}
                  <span className="text-[#6F6C6C] ml-1">kgf</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b px-4 py-2 grid text-[#514E4E] grid-cols-10 gap-x-5">
        <div className="col-span-4">
          <img
            src={
              accuracy.data.customer?.parallelism1Path
                ? `${config.assetsUrl}${accuracy.data.customer?.parallelism1Path}`
                : ""
            }
            alt="diagram-paralel-1"
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-3">
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className=" text-[#6F6C6C]">Adjustment Value</h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">A</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.prlAdj_0A}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">B</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.prlAdj_0B}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">C</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.prlAdj_0C}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">D</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.prlAdj_0D}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="w-full px-5">
            <img
              src={accuracy?.rumus}
              className="w-full"
              alt="calculate-paralel"
            />
          </div>
        </div>
      </div>
      <div className="border-b px-4 py-2 grid text-[#514E4E] grid-cols-10 gap-x-5">
        <div className="col-span-4">
          <img
            src={
              accuracy.data.customer?.parallelism2Path
                ? `${config.assetsUrl}${accuracy.data.customer?.parallelism2Path}`
                : ""
            }
            alt="diagram-paralel-2"
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-3">
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className=" text-[#6F6C6C]">Adjustment Value</h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">A</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.prlAdj_0A}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">B</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.prlAdj_0B}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">C</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.prlAdj_0C}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">D</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.prlAdj_0D}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="w-full px-5">
            <img
              src={accuracy?.rumus}
              className="w-full"
              alt="calculate-paralel"
            />
          </div>
        </div>
      </div>
      <div className="border-b px-4 py-1 grid grid-cols-10">
        <div className="col-span-3 col-start-5">
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Actual Velve</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy?.data?.accuracyCheck.prlActVlv}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Allowance</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy?.data?.accuracyCheck.prlAllowance}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Judgement</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3
                className={`${
                  accuracy?.data?.accuracyCheck.ttlClrJudgement === "OK"
                    ? "text-[#12B76A]"
                    : "text-[#F04438]"
                }  font-bold`}
              >
                {accuracy?.data?.accuracyCheck.ttlClrJudgement}
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b px-4 py-1">
        <div className="flex gap-x-1 text-[#313030] font-semibold mb-1">
          <span>2.</span>
          <h2>GIB Clearance</h2>
        </div>
        <div className="grid text-[#514E4E] grid-cols-10 gap-x-5">
          <div className="col-span-4">
            <h3 className=" ml-3">
              Clearance between the gib & slide liner Dimension of ( ) shows
              upper gib clearance
            </h3>
          </div>
        </div>
      </div>

      <div className="border-b px-4 py-2 grid text-[#514E4E] grid-cols-10 gap-x-5">
        <div className="col-span-4">
          <img
            src={
              accuracy.data.customer?.gibClearance1Path
                ? `${config.assetsUrl}${accuracy.data.customer?.gibClearance1Path}`
                : ""
            }
            alt="diagram-paralel-1"
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-3">
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className=" text-[#6F6C6C]">Adjustment Value</h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">A</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.gibAdj_0A}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">B</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.gibAdj_0B}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">C</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.gibAdj_0C}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">D</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.gibAdj_0D}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="w-full px-5">
            <img
              src={accuracy?.rumus}
              className="w-full"
              alt="calculate-paralel"
            />
          </div>
        </div>
      </div>

      <div className="border-b px-4 py-2 grid text-[#514E4E] grid-cols-10 gap-x-5">
        <div className="col-span-4">
          <img
            src={
              accuracy.data.customer?.gibClearance2Path
                ? `${config.assetsUrl}${accuracy.data.customer?.gibClearance2Path}`
                : ""
            }
            alt="diagram-paralel-1"
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-3">
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className=" text-[#6F6C6C]">Adjustment Value</h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">A</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.gibAdj_180A}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">B</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.gibAdj_180B}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">C</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.gibAdj_180C}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">D</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.gibAdj_180D}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="w-full px-5">
            <img
              src={accuracy?.rumus}
              className="w-full"
              alt="calculate-paralel"
            />
          </div>
        </div>
      </div>
      <div className="border-b px-4 py-1 grid grid-cols-10">
        <div className="col-span-3 col-start-5">
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Actual Velve</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy?.data?.accuracyCheck.gibActVlv}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Allowance</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy?.data?.accuracyCheck.gibAllowance}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Judgement</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3
                className={`${
                  accuracy?.data?.accuracyCheck.gibJudgement === "OK"
                    ? "text-[#12B76A]"
                    : "text-[#F04438]"
                }  font-bold`}
              >
                {accuracy?.data?.accuracyCheck.gibJudgement}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b px-4 py-1">
        <div className="flex gap-x-1 text-[#313030] font-semibold mb-1">
          <span>3.</span>
          <h2>Perpendicularity</h2>
        </div>
        <div className="grid text-[#514E4E] grid-cols-10 gap-x-5">
          <div className="col-span-4">
            <h3 className=" ml-3">
              Perpendicularity of vericul movement of slide to the bolster upper
              face slide adjustment middle
            </h3>
          </div>
          <div className="col-span-3">
            <div className="flex w-full mb-3">
              <div className="w-2/3 text-end">
                <h3 className=" text-[#6F6C6C]">Slide Stroke (L3) </h3>
              </div>
              <div className="w-1/3 text-end pl-5">
                <h3 className="text-[#393737]">
                  <span className="text-[#6F6C6C] ml-1">
                    {accuracy.data.accuracyCheck.ppdcltSlideStroke} {" mm"}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b px-4 py-2 grid text-[#514E4E] grid-cols-10 gap-x-5">
        <div className="col-span-4 flex justify-center">
          <img
            src={
              accuracy.data.customer?.perpendicularity1Path
                ? `${config.assetsUrl}${accuracy.data.customer?.perpendicularity1Path}`
                : ""
            }
            className=" object-contain w-[238px] h-auto"
          />
        </div>
        <div className="col-span-3">
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className=" text-[#6F6C6C]">Adjustment Value</h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">A</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ppdcltAdjFrA}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">B</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ppdcltAdjFrB}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">C</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ppdcltAdjFrC}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">D</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ppdcltAdjFrD}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Actual Velve</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ttlClrActValve}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Allowance</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ttlClrAllowance}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Judgement</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3
                className={`${
                  accuracy.data.accuracyCheck.ttlClrJudgement === "OK"
                    ? "text-[#12B76A]"
                    : "text-[#F04438]"
                }  font-bold`}
              >
                {accuracy.data.accuracyCheck.ttlClrJudgement}
              </h3>
            </div>
          </div>

          <div className="w-full px-5">
            <img
              src={accuracy?.rumus}
              className="w-full"
              alt="calculate-paralel"
            />
          </div>
        </div>
      </div>
      <div className="border-b px-4 py-2 grid text-[#514E4E] grid-cols-10 gap-x-5">
        <div className="col-span-4 flex justify-center">
          <img
            src={
              accuracy.data.customer?.perpendicularity1Path
                ? `${config.assetsUrl}${accuracy.data.customer?.parallelism2Path}`
                : ""
            }
            className=" object-contain w-[238px] h-auto"
          />
        </div>
        <div className="col-span-3">
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className=" text-[#6F6C6C]">Adjustment Value</h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">A</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ppdcltAdjFrA}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">B</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ppdcltAdjFrB}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">C</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ppdcltAdjFrC}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">D</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ppdcltAdjFrD}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Actual Velve</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ttlClrActValve}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Allowance</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3 className="text-[#393737] font-medium">
                {accuracy.data.accuracyCheck.ttlClrAllowance}
              </h3>
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-2/3 text-end">
              <h3 className="text-[#14988B] font-bold">Judgement</h3>
            </div>
            <div className="w-1/3 text-end pl-5">
              <h3
                className={`${
                  accuracy.data.accuracyCheck.ttlClrJudgement === "OK"
                    ? "text-[#12B76A]"
                    : "text-[#F04438]"
                }  font-bold`}
              >
                {accuracy.data.accuracyCheck.ttlClrJudgement}
              </h3>
            </div>
          </div>

          <div className="w-full px-5">
            <img
              src={accuracy?.rumus}
              className="w-full"
              alt="calculate-paralel"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-1">
        <div className=" grid grid-cols-10 gap-x-5 ">
          <div className="flex col-span-4 gap-x-1 text-[#313030] font-semibold mb-1">
            <span>4.</span>
            <h2>Total Clearance</h2>
          </div>
          <div className="col-span-3 col-start-8 px-5">
            <img
              src={accuracy?.rumus}
              alt="calculate-total"
              className="w-full"
            />
          </div>
        </div>
        <table className="w-full table-fixed my-2 ">
          <thead className="bg-[#E8F5F3] border h-[40px] text-[#0B544C] font-semibold">
            <tr>
              <th className="border-r">Actual Value (L)</th>
              <th className="border-r">Actual Valve</th>
              <th className="border-r">Allowance</th>
              <th>Judgment</th>
            </tr>
          </thead>
          <tbody className="text-[#514E4E] text-center h-[40px] border">
            <tr>
              <td className="border-r">
                {accuracy.data.accuracyCheck.ttlClrActValue}
              </td>
              <td className="border-r font-semibold">
                {accuracy.data.accuracyCheck.ttlClrActValve}
              </td>
              <td className="border-r">
                {accuracy.data.accuracyCheck.ttlClrAllowance}
              </td>
              <td
                className={`font-bold ${
                  accuracy.data.accuracyCheck.ttlClrJudgement === "OK"
                    ? "text-[#12B76A]"
                    : "text-[#F04438]"
                }`}
              >
                {accuracy.data.accuracyCheck.ttlClrJudgement}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
