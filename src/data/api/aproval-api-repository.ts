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
import { CustomerReport } from "@domain/models/customer-report";
import { InspectionResult } from "@domain/models/inspection-result";
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
    const result = AprovalReport.create({
      id: data.data.id,
      aproval: Aproval.create({
        inspectionID: data.data.inspectionId,
        inspectionDate: data.data.inspectionDate,
        customer: data.data.customer.customerName,
        status: data.data.approvedAt,
        confirmation: data.data.approvedAt,
        inspector: data.data.inspectorName,
        machineName: "",
      }),
      customer: CustomerReport.create({
        id: data.data.customer?.id,
        customerId: data.data.customer?.customerId,
        customerName: data.data.customer?.customerName,
        address: data.data.customer?.address,
        phone: data.data.customer?.phone,
        parallelism1Path: data.data.customer?.parallelism1Path,
        parallelism2Path: data.data.customer?.parallelism2Path,
        gibClearance1Path: data.data.customer?.gibClearance1Path,
        gibClearance2Path: data.data.customer?.gibClearance2Path,
        perpendicularity1Path: data.data.customer?.perpendicularity1Path,
        perpendicularity2Path: data.data.customer?.perpendicularity2Path,
      }),
      aprovalResult: AprovalResult.create({
        machineType: data.data.machineDatum?.machineType,
        serial: data.data.machineDatum?.serialNo,
        MFGDate: data.data.machineDatum?.manufactureDate,
        capasity: data.data.machineDatum?.capacity,
        st: data.data.machineDatum?.slideStroke,
        stPerminutes: data.data.machineDatum?.strokePerMinute,
        dHeightt: data.data.machineDatum?.dieHeight,
        adjustment: data.data.machineDatum?.slideAdjustment,
        bloasterX: data.data.machineDatum?.areaBlosterDimentionX,
        bloasterY: data.data.machineDatum?.areaBlosterDimentionY,
        areaSlideX: data.data.machineDatum?.areaSlideDimentionX,
        areaSlideY: data.data.machineDatum?.areaSlideDimentionY,
      }),
      inspectionForm: data.data.inspectionDatum?.map((item) => {
        return InspectionForm.create({
          id: item.id,
          name: item.name,
          data: item.items?.map((e): Items => {
            return {
              id: e.id,
              name: e.name,
              ketetapan: e.determination,
              note: e.notes,
            };
          }),
        });
      }),
      machineCheck: MachineCheck.create({
        id: data.data.machineCheck?.id,
        slideDiam: data.data.machineCheck?.idleAmp,
        slideBergerak: data.data.machineCheck?.runningAmp,
        noMainMotor: data.data.machineCheck?.runningDuration,
        running: data.data.machineCheck?.runningTimes,
        clearence: data.data.machineCheck?.clearanceTotal,
        actual: data.data.machineCheck?.actual,
        result: data.data.machineCheck?.determinationResult,
        adjustUp: data.data.machineCheck?.slideUpAmp,
        adjustDown: data.data.machineCheck?.slideDownAmp,
        tmb: data.data.machineCheck?.tmb,
        point: data.data.machineCheck?.clearancePoint,
        test1: data.data.machineCheck?.test1,
        test2: data.data.machineCheck?.test2,
        test3: data.data.machineCheck?.test3,
        test4: data.data.machineCheck?.test4,
        test5: data.data.machineCheck?.test5,
        test6: data.data.machineCheck?.test6,
        test7: data.data.machineCheck?.test7,
        test8: data.data.machineCheck?.test8,
        test9: data.data.machineCheck?.test9,
        test10: data.data.machineCheck?.test10,
      }),
      accuracyCheck: Accuracy.create({
        id: data.data.accuracyCheck?.id,
        generalDataId: data.data.accuracyCheck?.generalDataId,
        unit: data.data.accuracyCheck?.unit,
        balancerAirPsr: data.data.accuracyCheck?.balancerAirPsr,
        prlAdj_0A: data.data.accuracyCheck?.prlAdj_0A,
        prlAdj_0B: data.data.accuracyCheck?.prlAdj_0B,
        prlAdj_0C: data.data.accuracyCheck?.prlAdj_0C,
        prlAdj_0D: data.data.accuracyCheck?.prlAdj_0D,
        prlAdj_180A: data.data.accuracyCheck?.prlAdj_180A,
        prlAdj_180B: data.data.accuracyCheck?.prlAdj_180B,
        prlAdj_180C: data.data.accuracyCheck?.prlAdj_180C,
        prlAdj_180D: data.data.accuracyCheck?.prlAdj_180D,
        prlActVlv: data.data.accuracyCheck?.prlActVlv,
        prlAllowance: data.data.accuracyCheck?.prlAllowance,
        prlJudgement: data.data.accuracyCheck?.prlJudgement,
        gibAdj_0A: data.data.accuracyCheck?.gibAdj_0A,
        gibAdj_0B: data.data.accuracyCheck?.gibAdj_0B,
        gibAdj_0C: data.data.accuracyCheck?.gibAdj_0C,
        gibAdj_0D: data.data.accuracyCheck?.gibAdj_0D,
        gibAdj_180A: data.data.accuracyCheck?.gibAdj_180A,
        gibAdj_180B: data.data.accuracyCheck?.gibAdj_180B,
        gibAdj_180C: data.data.accuracyCheck?.gibAdj_180C,
        gibAdj_180D: data.data.accuracyCheck?.gibAdj_180D,
        gibActVlv: data.data.accuracyCheck?.gibActVlv,
        gibAllowance: data.data.accuracyCheck?.gibAllowance,
        gibJudgement: data.data.accuracyCheck?.gibJudgement,
        ppdcltSlideStroke: data.data.accuracyCheck?.ppdcltSlideStroke,
        ppdcltAdjLrA: data.data.accuracyCheck?.ppdcltAdjLrA,
        ppdcltAdjLrB: data.data.accuracyCheck?.ppdcltAdjLrB,
        ppdcltAdjLrC: data.data.accuracyCheck?.ppdcltAdjLrC,
        ppdcltAdjLrD: data.data.accuracyCheck?.ppdcltAdjLrD,
        ppdcltAdjFrA: data.data.accuracyCheck?.ppdcltAdjFrA,
        ppdcltAdjFrB: data.data.accuracyCheck?.ppdcltAdjFrB,
        ppdcltAdjFrC: data.data.accuracyCheck?.ppdcltAdjFrC,
        ppdcltAdjFrD: data.data.accuracyCheck?.ppdcltAdjFrD,
        ppdcltLrActValue: data.data.accuracyCheck?.ppdcltLrActValue,
        ppdcltLrAllowance: data.data.accuracyCheck?.ppdcltLrAllowance,
        ppdcltLrJudgement: data.data.accuracyCheck?.ppdcltLrJudgement,
        ppdcltFrActValue: data.data.accuracyCheck?.ppdcltFrActValue,
        ppdcltFrAllowance: data.data.accuracyCheck?.ppdcltFrAllowance,
        ppdcltFrJudgement: data.data.accuracyCheck?.ppdcltFrJudgement,
        ttlClrActValue: data.data.accuracyCheck?.ttlClrActValue,
        ttlClrActValve: data.data.accuracyCheck?.ttlClrActValve,
        ttlClrAllowance: data.data.accuracyCheck?.ttlClrAllowance,
        ttlClrJudgement: data.data.accuracyCheck?.ttlClrJudgement,
      }),
      loadTonnage: data.data.loadTonnages?.map((item) => {
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
        id: data.data.resumeCheck?.id,
        notes: data.data.resumeCheck?.notes,
        recommendation: data.data.resumeCheck?.recommendation,
      }),
      inspection: InspectionResult.create({
        id: data.data.inspectionResult?.id,
        color: data.data.inspectionResult?.color,
        desc: data.data.inspectionResult?.description,
        opt: data.data.inspectionResult?.option,
      }),
    });
    return result;
  }

  async putconfirm(id: string): Promise<void> {
    await api.put(`web-admin/approval/${id}/approve`);
  }
}

