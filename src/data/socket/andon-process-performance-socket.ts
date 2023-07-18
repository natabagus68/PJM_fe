import { ProcessPerformance } from "@domain/models/process";
import { Socket } from "./_socket";
import { HourlyPerformance } from "@domain/models/perfomance-company";

export class AndonProcessPerformanceSocket {
  constructor(private server: Socket) {}
  ProcessSocketListener(event: string, callback: any, param?: string) {
    this.server.io.on(event, (data) => {
      const [key] = Object.keys(data);
      let response = null;
      if (param === "one") {
        response = data[key].current;
      } else if (param === "two") {
        response = data[key].thisMonth;
      }
      console.log(response);
      callback(
        ProcessPerformance.create({
          availability: response.availability,
          performance: response.performance,
          quality: response.quality,
          oeeRealtime: response.oeeRealtime,
          achievement: response.achievement,
          notGood: response.notGood,
          target: response.target,
          totalQuantity: response.totalQuantity,
          avgRuntime: response.avgRuntime,
          avgDowntime: response.avgDowntime,
          oeeLastMonth: response.oeeLastMonth,
          totalSubProcess: response.totalSubProcess,
          running: response.running,
          stop: response.stop,
          hourlyPerformances: response.hourlyPerformance.map(
            (item: HourlyPerformance) => item
          ),
        })
      );
    });
  }
}
