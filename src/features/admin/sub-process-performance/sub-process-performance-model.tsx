import { SubProcessPerformance } from "@domain/models/sub-process";
import { useContext } from "react";
import { SubProcessContex } from "../andon-layout-sub-process/sub-process-contex";

export const useSubProcessPerformance = () => {
  const data: SubProcessPerformance = useContext(SubProcessContex);

  return {
    data,
  };
};
