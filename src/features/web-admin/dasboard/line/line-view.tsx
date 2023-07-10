import { Breadcrumbs } from "@common/components";
import { Treacibilty } from "@common/components/Atreasibility";
import { Box } from "@common/components/Box";
import { ChartLine } from "@common/components/charts/ChartLine";
// import { Box } from "lucide-react";

export const DashboardLine = () => {
  return (
    <>
      <div>
        <Breadcrumbs items={["General"]} />
      </div>
      <div className="flex items-center justify-between gap-6 my-4">
        <Treacibilty color={"rgba(77, 116, 178, 1)"} title={"OEE"} />
        <Treacibilty color={"rgba(249, 166, 58, 1)"} title={"Availability"} />
        <Treacibilty color={"rgba(73, 202, 221, 1)"} title={"Performance"} />
        <Treacibilty color={"rgba(65, 196, 135, 1)"} title={"Quality Ratio"} />
      </div>
      <Box padding={false}>
        <div className="p-3">
          <h1 className="text-[16px] font-[600] text-[#313030]">
            Hourly Performance
          </h1>
          {/* char bar */}
          <div className="h-[400px] w-full mt-4 flex items-center">
            <ChartLine
              datas={[
                { name: "telek", value: 21 },
                { name: "telek2", value: 12 },
                { name: "telek3", value: 10 },
              ]}
            />
          </div>
        </div>
      </Box>
      <div className="mt-4">
        <Box>
          <h1 className="text-[16px] font-[600] text-[#313030]">
            Production Info
          </h1>
          <div className="px-2 flex items-center gap-4 mt-3">
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">
                  Average Run Time
                </p>
                <h1 className="text-end text-[32px] text-[#12B569] font-[800]">
                  00:02:00
                </h1>
              </div>
            </Box>
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">Cycle</p>
                <h1 className="text-end text-[32px] text-[#514E4E] font-[800]">
                  28 sec
                </h1>
              </div>
            </Box>
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">
                  Achievement
                </p>
                <h1 className="text-end text-[32px] text-[#F04438]] font-[800]">
                  2.333%
                </h1>
              </div>
            </Box>
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">Target</p>
                <h1 className="text-end text-[32px] text-[#514E4E]]] font-[800]">
                  23500 pcs
                </h1>
              </div>
            </Box>
          </div>
          <div className="px-2 flex items-center gap-4 mt-3">
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">
                  Downtime
                </p>
                <h1 className="text-end text-[32px] text-[#F04438] font-[800]">
                  00:05:00
                </h1>
              </div>
            </Box>
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">
                  Real Cycle
                </p>
                <h1 className="text-end text-[32px] text-[#514E4E] font-[800]">
                  25.7 sec
                </h1>
              </div>
            </Box>
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">
                  Not Good
                </p>
                <h1 className="text-end text-[32px] text-[#F04438] font-[800]">
                  3 pcs
                </h1>
              </div>
            </Box>
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">
                  Total Quantity
                </p>
                <h1 className="text-end text-[32px] text-[#F04438] font-[800]">
                  175 pcs
                </h1>
              </div>
            </Box>
          </div>
        </Box>
      </div>
    </>
  );
};
