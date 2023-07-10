import { Box } from "./Box";
import { PieChart } from "./charts/PieChart";

export const Treacibilty = ({ title, color }) => {
  return (
    <>
      <Box padding={false}>
        <div className="flex items-center gap-3 py-4 px-6">
          <div className="w-[62px] h-[62px]">
            <PieChart color={color} />
          </div>
          <div>
            <h1 className="text-[32px] font-bold text-[#514E4E]">75%</h1>
            <p className="text-[16px] font-[600] text-[#514E4E]">{title}</p>
          </div>
        </div>
      </Box>
    </>
  );
};
