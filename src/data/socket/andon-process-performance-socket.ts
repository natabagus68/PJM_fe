import { ProcessPerformance } from "@domain/models/process";
import { Socket } from "./_socket";
import { HourlyPerformance } from "@domain/models/perfomance-company";

export class AndonProcessPerformanceSocket {
  constructor(private server: Socket) {}
  ProcessSocketListener(event: string, callback: any, param?: string) {
    this.server.io.on(event, (data) => {
      const [key] = Object.keys(data);
      callback(data);
    });
  }
}
