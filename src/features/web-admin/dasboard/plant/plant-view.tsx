import { Breadcrumbs } from "@common/components";
import { Box } from "@common/components/Box";
import { Chartbar } from "@common/components/charts/ChartBar";
import { ChartHalfDoughnut } from "@common/components/charts/ChartHalfDoughnut";

export const DashboardPlant = () => {
  return (
    <>
      <div className="mb-4">
        <Breadcrumbs items={["General"]} />
      </div>
      <Box padding={false}>
        <div className="p-3">
          <h1 className="text-[16px] font-[600] text-[#313030]">
            Hourly Performance
          </h1>
          {/* char bar */}
          <div className="h-[400px] w-full mt-4 flex items-center">
            <Chartbar
              colors={"rgba(32, 81, 159, 1)"}
              data={[
                { name: "telek", value: 21 },
                { name: "telek2", value: 12 },
                { name: "telek3", value: 10 },
              ]}
            />
          </div>
        </div>
      </Box>

      <div className="flex  justify-between gap-4 mt-4">
        {/* Production Info */}
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
                  00:05:00
                </h1>
              </div>
            </Box>
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">
                  Average Run Time
                </p>
                <h1 className="text-end text-[32px] text-[#F04438] font-[800]">
                  00:05:00
                </h1>
              </div>
            </Box>
          </div>
          <div className="px-2 flex items-center gap-4 mt-3">
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">Target</p>
                <h1 className="text-end text-[32px] text-[#514E4E] font-[800]">
                  2500 pcs
                </h1>
              </div>
            </Box>
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">
                  Achievement
                </p>
                <h1 className="text-end text-[32px] text-[#514E4E] font-[800]">
                  4.32%
                </h1>
              </div>
            </Box>
          </div>
          <div className="px-2 flex items-center gap-4 mt-3">
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">
                  Total Quantity
                </p>
                <h1 className="text-end text-[32px] text-[#514E4E] font-[800]">
                  150 pcs
                </h1>
              </div>
            </Box>
            <Box padding={false}>
              <div className="p-3">
                <p className="text-[#514E4E] font-[400] text-[14px]">
                  Not Good
                </p>
                <h1 className="text-end text-[32px] text-[#F04438] font-[800]">
                  4 pcs
                </h1>
              </div>
            </Box>
          </div>
        </Box>
        {/* OEE Performance */}
        <Box>
          <h1 className="text-[16px] font-[600] text-[#313030]">
            OEE Performance
          </h1>
          {/* line 1 */}
          <div className="flex justify-between items-center gap-4 mt-5">
            <div className=" flex items-center justify-end w-1/2 px-6">
              <div className="w-[162px] h-[119px]">
                <ChartHalfDoughnut colors="rgba(32, 81, 159, 1)" />
              </div>
            </div>
            <div className=" flex items-center justify-start w-1/2 px-6">
              <div className="w-[162px] h-[119px]">
                <ChartHalfDoughnut colors="rgba(247, 144, 9, 1)" />
              </div>
            </div>
          </div>
          {/* line 2 */}
          <div className="flex justify-between items-center gap-4 mt-5 ">
            <div className=" flex items-center justify-end w-1/2 px-6">
              <div className="w-[162px] h-[119px]">
                <ChartHalfDoughnut colors="rgba(18, 181, 105, 1)" />
              </div>
            </div>
            <div className=" flex items-center justify-start w-1/2 px-6">
              <div className="w-[162px] h-[119px]">
                <ChartHalfDoughnut colors="rgba(27, 189, 212, 1)" />
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
