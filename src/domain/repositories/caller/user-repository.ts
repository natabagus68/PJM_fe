import { IAuth } from "@domain/models/caller/auth";
import { IUser } from "@domain/models/caller/user";

export interface IUserRepository {
  login(props: IUser): Promise<IAuth>;
  me(): Promise<IAuth>;
}
