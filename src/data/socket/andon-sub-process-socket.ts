import { SubProcessPerformance } from "@domain/models/sub-process";

import { HourlyPerformance } from "@domain/models/perfomance-company";
import { Socket } from "./_socket";

export class SubProcessPerformanceListener {
  constructor(private server: Socket) {}
  subProcessPerformanceListener(event: string, callback: any) {
    this.server.io.on(event, (data) => {
      const [key] = Object.keys(data);
      callback(
        SubProcessPerformance.create({
          availability: data[key].availability,
          performance: data[key].performance,
          quality: data[key].quality,
          oee: data[key].oee,
          cycle: data[key].cycle,
          realCycle: data[key].realCycle,
          target: data[key].target,
          totalQuantity: data[key].totalQuantity,
          achievement: data[key].achievement,
          notGood: data[key].notGood,
          runtime: data[key].runtime,
          downtime: data[key].downtime,
          hourlyPerformances: data[key].hourlyPerformances.map((item) => {
            return item;
          }),
        })
      );
    });
  }
}
