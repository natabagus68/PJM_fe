export const Box = ({ children, padding = true, card = false }) => {
  return (
    <div
      className={`w-full ${card ? "h-[795px]" : ""} border border-[#D0D3D9] ${
        padding ? "p-[24px] px-[32px]" : ""
      }  rounded-md `}
    >
      {children}
    </div>
  );
};
