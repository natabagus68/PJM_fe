import { CompanyPerformance } from "@domain/models/company";
import { server } from "./_socket";
import { HourlyPerformance } from "@domain/models/perfomance-company";
export class AndonListener {
  onAndonListener(callback: any) {
    server.on("andon-company-performance", (data) => {
      callback(
        CompanyPerformance.create({
          availability: Number(data.availability),
          performance: Number(data.performance),
          quality: Number(data.quality),
          oeeRealtime: Number(data.oeeRealtime),
          achievement: Number(data.achievement),
          notGood: Number(data.notGood),
          target: Number(data.target),
          totalQuantity: Number(data.totalQuantity),
          avgRuntime: data.avgRuntime,
          avgDowntime: data.avgDowntime,
          oeeLastMonth: Number(data.oeeLastMonth),
          totalProcess: Number(data.totalProcess),
          running: Number(data.running),
          stop: Number(data.stop),
          hourlyPerformances: data.hourlyPerformances.map(
            (item: HourlyPerformance) => item
          ),
        })
      );
    });
  }
}
