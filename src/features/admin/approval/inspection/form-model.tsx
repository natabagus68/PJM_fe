import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import aprovalContext from "../aprovalContex";
import { AprovalReport } from "@domain/models/aproval-report";
import { Aproval } from "@domain/models/aproval";
import { AprovalResult } from "@domain/models/aproval-result";
import { MachineCheck } from "@domain/models/machine-check";
import { Accuracy } from "@domain/models/Accuracy";
import { ResumeCheck } from "@domain/models/resume-check";
interface Review {
  detail: {
    status: string;
    inspectionId: string;
    inspectionDate: string;
    confirmationDate: string;
    customer: string;
  };
  result: {
    machineType: string;
    serialNo: string;
    mfgDate: string;
    capacity: string;
    slideStroke: string;
    strokePerMinutes: string;
    dieHeight: string;
    slideAdjustment: string;
    dimensiAreaBloster: string;
    dimensiAreaSlide: string;
  };
}

export default function useInspection() {
  const navigate = useNavigate();

  const [menu, setMenu] = useState([]);
  const [inspectform, setInspectForm] = useState([]);
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
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
        point:'',
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
  const datas = useContext(aprovalContext);

  useEffect(() => {
    setData(datas);
  }, [datas]);

  const handleConfirmation = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleSetNav = (e) => {
    setNav(true);
  };

  const pageBack = (): void => {
    navigate("../");
  };

  return {
    data,
    menu,
    inspectform,
    nav,
    setNav,
    open,
    setOpen,
    setInspectForm,
    pageBack,
    handleConfirmation,
    handleSetNav,
  };
}
