import { CompanyPerformance } from "@domain/models/company";
import { Socket } from "./_socket";
import { HourlyPerformance } from "@domain/models/perfomance-company";
export class AndonCompanyPerformanceListener {
  constructor(private server: Socket) {}
  onAndonListener(event: string, callback: any) {
    this.server.io.on(event, (data) => {
      callback(data);
    });
  }
}
