import { Aproval } from "@domain/models/aproval";
import { TableParams } from "@domain/models/table-params";
import { AprovalRepository } from "@domain/repositories/aproval-repository";
import { api } from "./_api";
import { AprovalReport } from "@domain/models/aproval-report";
import { AprovalResult } from "@domain/models/aproval-result";
// import InspectionForm from "@features/admin/approval/inspection/form-view";
import { InspectionForm } from "@domain/models/inspection";
import { Items } from "@domain/models/inspection";
import { Machine } from "@domain/models/machine";
import { MachineCheck } from "@domain/models/machine-check";
import { Accuracy } from "@domain/models/Accuracy";
import { LoadTonnage } from "@domain/models/load-tonnage";
import { ResumeCheck } from "@domain/models/resume-check";
export class AprovalApiRepository implements AprovalRepository {
  async get(params: TableParams): Promise<Aproval[]> {
    const { data } = await api.get(`web-admin/approval`, {
      params: {
        search: params.q,
        page: params.page,
        limit: params.limit,
        status: params.status.toUpperCase(),
      },
    });

    console.log(data.data.data);
    return data.data.data.map((item) => {
      return Aproval.create({
        id: item.id,
        inspectionID: item.inspectionId,
        inspectionDate: item.inspectionDate,
        customer: item.customerName,
        machineName: item.customerName,
        inspector: item.inspectorName,
        status: item.status,
      });
    });
  }

  async getReport(id: string): Promise<AprovalReport> {
    const { data } = await api.get(`web-admin/approval/${id}`);
    return AprovalReport.create({
      id: data.id,
      aproval: Aproval.create({
        inspectionID: data.inspectionId,
        inspectionDate: data.inspectionDate,
        customer: data.customer.customerName,
        status: data.status,
        confirmation: data.lastStep,
        inspector: data.lastStep,
        machineName: "",
      }),
      aprovalResult: AprovalResult.create({
        machineType: data.machineDatum.machineType,
        serial: data.machineDatum.machineType,
        MFGDate: data.machineDatum.manufactureDate,
        capasity: data.machineDatum.capasity,
        st: data.machineDatum.slideStroke,
        stPerminutes: data.machineDatum.strokePerMinute,
        dHeightt: data.machineDatum.dieHeight,
        adjustment: data.machineDatum.slideAdjustment,
        bloasterX: data.machineDatum.areaBlosterDimentionX,
        bloasterY: data.machineDatum.areaBlosterDimentionY,
        areaSlideX: data.machineDatum.areaSlideX,
        areaSlideY: data.machineDatum.areaSlideY,
      }),
      inspectionForm: data.inspectionDatum.map((item) => {
        return InspectionForm.create({
          id: item.id,
          name: item.name,
          data: item.items.map((e): Items => {
            return {
              id: e.id,
              name: e.name,
              ketetapan: e.ketetapan,
              note: e.note,
            };
          }),
        });
      }),
      machineCheck: MachineCheck.create({
        id: data.machineDatum.id,
        slideDiam: data.machineDatum.slideDiam,
        slideBergerak: data.machineDatum.slideBergerak,
        noMainMotor: data.machineDatum.noMainMotor,
        running: data.machineDatum.running,
        clearence: data.machineDatum.clearence,
        actual: data.machineDatum.actual,
        result: data.machineDatum.result,
        adjustUp: data.machineDatum.adjustUp,
        adjustDown: data.machineDatum.adjustDown,
        tmb: data.machineDatum.tmb,
        test1: data.machineDatum.test1,
        test2: data.machineDatum.test2,
        test3: data.machineDatum.test3,
        test4: data.machineDatum.test4,
        test5: data.machineDatum.test5,
        test6: data.machineDatum.test6,
        test7: data.machineDatum.test7,
        test8: data.machineDatum.test8,
        test9: data.machineDatum.test9,
        test10: data.machineDatum.test10,
      }),
      accuracyCheck: Accuracy.create({
        id: data.accuracyCheck.id,
        generalDataId: data.accuracyCheck.generalDataId,
        unit: data.accuracyCheck.unit,
        balancerAirPsr: data.accuracyCheck.balancerAirPsr,
        prlAdj_0A: data.accuracyCheck.prlAdj_0A,
        prlAdj_0B: data.accuracyCheck.prlAdj_0B,
        prlAdj_0C: data.accuracyCheck.prlAdj_0C,
        prlAdj_0D: data.accuracyCheck.prlAdj_0D,
        prlAdj_180A: data.accuracyCheck.prlAdj_180A,
        prlAdj_180B: data.accuracyCheck.prlAdj_180B,
        prlAdj_180C: data.accuracyCheck.prlAdj_180C,
        prlAdj_180D: data.accuracyCheck.prlAdj_180D,
        prlActVlv: data.accuracyCheck.prlActVlv,
        prlAllowance: data.accuracyCheck.prlAllowance,
        prlJudgement: data.accuracyCheck.prlJudgement,
        gibAdj_0A: data.accuracyCheck.gibAdj_0A,
        gibAdj_0B: data.accuracyCheck.gibAdj_0B,
        gibAdj_0C: data.accuracyCheck.gibAdj_0C,
        gibAdj_0D: data.accuracyCheck.gibAdj_0D,
        gibAdj_180A: data.accuracyCheck.gibAdj_180A,
        gibAdj_180B: data.accuracyCheck.gibAdj_180B,
        gibAdj_180C: data.accuracyCheck.gibAdj_180C,
        gibAdj_180D: data.accuracyCheck.gibAdj_180D,
        gibActVlv: data.accuracyCheck.gibActVlv,
        gibAllowance: data.accuracyCheck.gibAllowance,
        gibJudgement: data.accuracyCheck.gibJudgement,
        ppdcltSlideStroke: data.accuracyCheck.ppdcltSlideStroke,
        ppdcltAdjLrA: data.accuracyCheck.ppdcltAdjLrA,
        ppdcltAdjLrB: data.accuracyCheck.ppdcltAdjLrB,
        ppdcltAdjLrC: data.accuracyCheck.ppdcltAdjLrC,
        ppdcltAdjLrD: data.accuracyCheck.ppdcltAdjLrD,
        ppdcltAdjFrA: data.accuracyCheck.ppdcltAdjFrA,
        ppdcltAdjFrB: data.accuracyCheck.ppdcltAdjFrB,
        ppdcltAdjFrC: data.accuracyCheck.ppdcltAdjFrC,
        ppdcltAdjFrD: data.accuracyCheck.ppdcltAdjFrD,
        ppdcltLrActValue: data.accuracyCheck.ppdcltLrActValue,
        ppdcltLrAllowance: data.accuracyCheck.ppdcltLrAllowance,
        ppdcltLrJudgement: data.accuracyCheck.ppdcltLrJudgement,
        ppdcltFrActValue: data.accuracyCheck.ppdcltFrActValue,
        ppdcltFrAllowance: data.accuracyCheck.ppdcltFrAllowance,
        ppdcltFrJudgement: data.accuracyCheck.ppdcltFrJudgement,
        ttlClrActValue: data.accuracyCheck.ttlClrActValue,
        ttlClrActValve: data.accuracyCheck.ttlClrActValve,
        ttlClrAllowance: data.accuracyCheck.ttlClrAllowance,
        ttlClrJudgement: data.accuracyCheck.ttlClrJudgement,
      }),
      loadTonnage: data.loadTonnages.map((item) => {
        return LoadTonnage.create({
          id: item.id,
          name: item.name,
          lfActLoad: item.lfActLoad,
          lfLoadMonitor: item.lfLoadMonitor,
          lrActLoad: item.lrActLoad,
          lrLoadMonitor: item.lrLoadMonitor,
          rfActLoad: item.rfActLoad,
          rfLoadMonitor: item.rfLoadMonitor,
          rrActLoad: item.rrActLoad,
          rrLoadMonitor: item.rrLoadMonitor,
          totalActLoad: item.totalActLoad,
          totalLoadMonitor: item.totalLoadMonitor,
          dieHeight: item.dieHeight,
          generalDataId: item.generalDataId,
        });
      }),
      resume: ResumeCheck.create({
        id: data.resumeCheck.id,
        notes: data.resumeCheck.notes,
        recommendation: data.resumeCheck.recommendation,
      }),
    });
  }
}

