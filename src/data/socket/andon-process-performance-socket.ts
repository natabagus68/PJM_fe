import { ProcessPerformance } from "@domain/models/process";
import { Socket } from "./_socket";
import { HourlyPerformance } from "@domain/models/perfomance-company";

export class AndonProcessPerformanceSocket {
  constructor(private server: Socket) {}
  ProcessSocketListener(event: string, callback: any) {
    this.server.io.on(event, (data) => {
      const [key] = Object.keys(data);
      callback(
        ProcessPerformance.create({
          availability: data[key].availability,
          performance: data[key].performance,
          quality: data[key].quality,
          oeeRealtime: data[key].oeeRealtime,
          achievement: data[key].achievement,
          notGood: data[key].notGood,
          target: data[key].target,
          totalQuantity: data[key].totalQuantity,
          avgRuntime: data[key].avgRuntime,
          avgDowntime: data[key].avgDowntime,
          oeeLastMonth: data[key].oeeLastMonth,
          totalSubProcess: data[key].totalSubProcess,
          running: data[key].running,
          stop: data[key].stop,
          hourlyPerformances: data[key].hourlyPerformances.map(
            (item: HourlyPerformance) => item
          ),
        })
      );
    });
  }
}
