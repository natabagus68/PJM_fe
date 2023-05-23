import { useContext, useEffect, useState } from "react";
import aprovalContext from "../aprovalContex";
import { AprovalReport } from "@domain/models/aproval-report";
import { Aproval } from "@domain/models/aproval";
import { AprovalResult } from "@domain/models/aproval-result";
import { MachineCheck } from "@domain/models/machine-check";
import { Accuracy } from "@domain/models/Accuracy";
import { ResumeCheck } from "@domain/models/resume-check";
import paralel1 from "../../../../assets/paralel-1.png";
import paralel2 from "../../../../assets/paralel-2.png";
import gib1 from "../../../../assets/gib-1.png";
import gib2 from "../../../../assets/gib-2.png";
import prepen1 from "../../../../assets/prepen-1.png";
import prepen2 from "../../../../assets/prepen-2.png";
import rumus from "../../../../assets/calculate.png";

interface Item {
  parallel: {
    unit: number;
    balancer: number;
    diagram: Array<{
      img_url: string;
      a: number;
      b: number;
      c: number;
      d: number;
      calculate: boolean;
    }>;
    actual: number;
    allowance: number;
    judgement: string;
  };
  gib: {
    diagram: Array<{
      img_url: string;
      a: number;
      b: number;
      c: number;
      d: number;
      calculate: boolean;
    }>;
    actual: number;
    allowance: number;
    judgement: string;
  };
  prependicularity: {
    slideStroke: number;
    diagram: Array<{
      img_url: string;
      a: number;
      b: number;
      c: number;
      d: number;
      calculate: boolean;
      actual: number;
      allowance: number;
      judgement: string;
    }>;
  };
  total: {
    actualL: number;
    actual: number;
    allowance: number;
    judgement: string;
    calculate: boolean;
  };
}

export default function useAccuracy() {
  const [data, setData] = useState<AprovalReport>(
    AprovalReport.create({
      id: "",
      aproval: Aproval.create({
        inspectionID: "",
        inspectionDate: "",
        customer: "",
        status: "",
        confirmation: "",
        inspector: "",
        machineName: "",
      }),
      aprovalResult: AprovalResult.create({
        machineType: "",
        serial: "",
        MFGDate: "",
        capasity: "",
        st: "",
        stPerminutes: "",
        dHeightt: "",
        adjustment: "",
        bloasterX: "",
        bloasterY: "",
        areaSlideX: "",
        areaSlideY: "",
      }),
      inspectionForm: [],
      machineCheck: MachineCheck.create({
        id: "",
        slideDiam: 0,
        slideBergerak: 0,
        noMainMotor: 0,
        running: "",
        clearence: "",
        actual: "",
        result: "",
        adjustUp: "",
        adjustDown: "",
        tmb: "",
        point: "",
        test1: "",
        test2: "",
        test3: "",
        test4: "",
        test5: "",
        test6: "",
        test7: "",
        test8: "",
        test9: "",
        test10: "",
      }),
      accuracyCheck: Accuracy.create({
        id: "",
        generalDataId: "",
        unit: 0,
        balancerAirPsr: 0,
        prlAdj_0A: 0,
        prlAdj_0B: 0,
        prlAdj_0C: 0,
        prlAdj_0D: 0,
        prlAdj_180A: 0,
        prlAdj_180B: 0,
        prlAdj_180C: 0,
        prlAdj_180D: 0,
        prlActVlv: 0,
        prlAllowance: 0,
        prlJudgement: "",
        gibAdj_0A: 0,
        gibAdj_0B: 0,
        gibAdj_0C: 0,
        gibAdj_0D: 0,
        gibAdj_180A: 0,
        gibAdj_180B: 0,
        gibAdj_180C: 0,
        gibAdj_180D: 0,
        gibActVlv: 0,
        gibAllowance: 0,
        gibJudgement: "",
        ppdcltSlideStroke: 0,
        ppdcltAdjLrA: 0,
        ppdcltAdjLrB: 0,
        ppdcltAdjLrC: 0,
        ppdcltAdjLrD: 0,
        ppdcltAdjFrA: 0,
        ppdcltAdjFrB: 0,
        ppdcltAdjFrC: 0,
        ppdcltAdjFrD: 0,
        ppdcltLrActValue: 0,
        ppdcltLrAllowance: 0,
        ppdcltLrJudgement: "",
        ppdcltFrActValue: 0,
        ppdcltFrAllowance: 0,
        ppdcltFrJudgement: "",
        ttlClrActValue: 0,
        ttlClrActValve: 0,
        ttlClrAllowance: 0,
        ttlClrJudgement: "",
      }),
      loadTonnage: [],
      resume: ResumeCheck.create({
        id: "",
        notes: "",
        recommendation: "",
      }),
    })
  );

  const result = useContext(aprovalContext);
  useEffect(() => {
    setData(result);
  }, [result]);

  return {
    data,
    rumus,
  };
}
