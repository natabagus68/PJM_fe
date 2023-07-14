import { MaintenaceCalling } from "@domain/models/caller/maintenance-calling";

export interface IMaintenaceCallingRepository {
  findAll(): Promise<MaintenaceCalling[]>;
}
