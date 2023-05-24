import { Auth } from "@domain/models/auth";
import { User } from "@domain/models/user";
import { UserRepository } from "@domain/repositories/user-repository";
import { getParam } from "@domain/repositories/_repository";
import { api } from "./_api";

export class UserApiRepository implements UserRepository {
  constructor(private _api = api) {}
  async login(
    email: string,
    password: string,
    lineShiftId: string
  ): Promise<Auth> {
    const { data } = await this._api.post("hmi/auth/login", {
      email,
      password,
      lineShiftId,
    });
    return Auth.create({
      token: data.token,
      user: {
        id: data.data?.user?.id,
        name: data.data?.user?.name,
        email: data.data?.user?.email,
        password: data.data?.user?.password,
        role: data.data?.user?.role_id,
        isActive: data.data?.user?.is_active,
        photo: data.data?.user?.photo,
        email_verified_at: data.data?.user?.email_verified_at,
        fcm_token: data.data?.user?.fcm_token,
        created_at: data.data?.user?.created_at,
        updated_at: data.data?.user?.updated_at,
        deleted_at: data.data?.user?.deleted_at,
      },
      lineShift: {
        id: data.data?.lineShift?.id,
        line_id: data.data?.lineShift?.line_id,
        shift: data.data?.lineShift?.shift,
        start_day: data.data?.lineShift?.start_day,
        end_day: data.data?.lineShift?.end_day,
        start_time: data.data?.lineShift?.start_time,
        end_time: data.data?.lineShift?.end_time,
        break_start: data.data?.lineShift?.break_start,
        break_end: data.data?.lineShift?.break_end,
        allocated_time: data.data?.lineShift?.allocated_time,
        createdAt: data.data?.lineShift?.createdAt,
        updatedAt: data.data?.lineShift?.updatedAt,
        deletedAt: data.data?.lineShift?.deletedAt,
        line: {
          id: data.data?.lineShift?.line.id,
          no: data.data?.lineShift?.line.no,
        },
      },
    });
  }
  async check(): Promise<Auth> {
    const { data } = await this._api.get("hmi/auth/me");
    return Auth.create({
      token: data.token,
      user: {
        id: data.data?.user?.id,
        name: data.data?.user?.name,
        email: data.data?.user?.email,
        password: data.data?.user?.password,
        role: data.data?.user?.role_id,
        isActive: data.data?.user?.is_active,
        photo: data.data?.user?.photo,
        email_verified_at: data.data?.user?.email_verified_at,
        fcm_token: data.data?.user?.fcm_token,
        created_at: data.data?.user?.created_at,
        updated_at: data.data?.user?.updated_at,
        deleted_at: data.data?.user?.deleted_at,
      },
      lineShift: {
        id: data.data?.lineShift?.id,
        line_id: data.data?.lineShift?.line_id,
        shift: data.data?.lineShift?.shift,
        start_day: data.data?.lineShift?.start_day,
        end_day: data.data?.lineShift?.end_day,
        start_time: data.data?.lineShift?.start_time,
        end_time: data.data?.lineShift?.end_time,
        break_start: data.data?.lineShift?.break_start,
        break_end: data.data?.lineShift?.break_end,
        allocated_time: data.data?.lineShift?.allocated_time,
        createdAt: data.data?.lineShift?.createdAt,
        updatedAt: data.data?.lineShift?.updatedAt,
        deletedAt: data.data?.lineShift?.deletedAt,
        line: {
          id: data.data?.lineShift?.line.id,
          no: data.data?.lineShift?.line.no,
        },
      },
    });
  }
  async logout(): Promise<void> {
    await this._api.delete("hmi/auth/logout");
  }
  create(props: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  update(id: string, data: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async getAllData(param?: getParam): Promise<User[]> {
    const { data } = await api.get("admin/user?page=1&limit=10&search");
    return data?.data?.data?.map((item: any) => {
      return User.create({
        id: item.id,
        name: item.fullname,
        email: item.email,
        isActive: item.isActive,
        role: item.role,
        password: "",
        photo: item.photo,
        email_verified_at: item.email_verified_at,
        fcm_token: item.fcm_token,
        created_at: item.created_at,
        updated_at: item.updated_at,
        deleted_at: item.deleted_at,
      });
    });
  }
  async getUserById(id: string): Promise<User> {
    const { data } = await api.get(`admin/user/${id}`);
    return User.create({
      id: data.data.id,
      name: data.data.fullname,
      email: data.data.email,
      photo: data.data.avatarPath,
      role: data.data.role,
      isActive: data.data.isActive,
    });
  }
}