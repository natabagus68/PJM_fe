import { Auth } from "@domain/models/auth";
import { User } from "@domain/models/user";
import { IRepository } from "./_repository";
import { TableParams } from "@domain/models/table-params";

export interface UserRepository extends IRepository<User> {
  login(email: string, password: string, lineId: string): Promise<Auth>;
  check(): Promise<Auth>;
  logout(): Promise<void>;
}

