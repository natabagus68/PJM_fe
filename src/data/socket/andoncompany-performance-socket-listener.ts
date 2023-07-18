import { CompanyPerformance } from "@domain/models/company";
import { Socket } from "./_socket";
import { HourlyPerformance } from "@domain/models/perfomance-company";
export class AndonCompanyPerformanceListener {
  constructor(private server: Socket) {}
  onAndonListener(event: string, callback: any, param?: string) {
    this.server.io.on(event, (data) => {
      console.log(data.current);
      let response = null;
      if (param === "one") {
        response = data.current;
      } else {
        response = data.thisMonth;
      }
      callback(
        CompanyPerformance.create({
          availability: Number(response.availability),
          performance: Number(response.performance),
          quality: Number(response.quality),
          oeeRealtime: Number(response.oeeRealtime),
          achievement: Number(response.achievement),
          notGood: Number(response.notGood),
          target: Number(response.target),
          totalQuantity: Number(response.totalQuantity),
          avgRuntime: response.avgRuntime,
          avgDowntime: response.avgDowntime,
          oeeLastMonth: Number(response.oeeLastMonth),
          totalProcess: Number(response.totalProcess),
          running: Number(response.running),
          stop: Number(response.stop),
          hourlyPerformances: response.hourlyPerformance.map(
            (item: HourlyPerformance) => item
          ),
        })
      );
    });
  }
}
