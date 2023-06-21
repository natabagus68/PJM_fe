import { CompanyPerformance } from "@domain/models/company";
import { server } from "./_socket";
import { HourlyPerformance } from "@domain/models/perfomance-company";
export class AndonListener {
  onAndonListener(callback: any) {
    server.on("andon-company-performance", (data) => {
      callback(
        CompanyPerformance.create({
          availability: Number(data.availability).toFixed(1),
          performance: Number(data.performance).toFixed(1),
          quality: Number(data.quality).toFixed(1),
          oeeRealtime: Number(data.oeeRealtime).toFixed(1),
          achievement: Number(data.achievement).toFixed(1),
          notGood: Number(data.notGood).toFixed(1),
          target: Number(data.target).toFixed(1),
          totalQuantity: Number(data.totalQuantity).toFixed(1),
          avgRuntime: data.avgRuntime,
          avgDowntime: data.avgDowntime,
          oeeLastMonth: Number(data.oeeLastMonth).toFixed(1),
          totalProcess: Number(data.totalProcess).toFixed(1),
          running: Number(data.running).toFixed(1),
          stop: Number(data.stop).toFixed(1),
          hourlyPerformances: data.hourlyPerformances.map(
            (item: HourlyPerformance) => item
          ),
        })
      );
    });
  }
}
