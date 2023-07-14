import { Calling } from "@domain/models/caller/calling";

export interface ICallingRepository {
  create(props: Calling): Promise<Calling>;
  update(id: string, value: string): Promise<boolean>;
}
