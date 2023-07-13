import { Auth } from "@domain/models/web-admin/auth";
import { RowsData } from "@domain/models/web-admin/rows-data";
import {
  FilterUser,
  IUserAdmin,
  UserAdmin,
} from "@domain/models/web-admin/user";

export interface IUserAdminRepository {
  login(props: IUserAdmin): Promise<Auth>;
  me(): Promise<Auth>;
  getAll(props: FilterUser): Promise<RowsData<UserAdmin>>;
  updateToggle(id: UserAdmin["id"]): Promise<boolean>;
  findByid(id: UserAdmin["id"]): Promise<UserAdmin>;
  update(props: any, id: string): Promise<boolean>;
  create(props: any): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
