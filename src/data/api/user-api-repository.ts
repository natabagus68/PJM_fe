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
    });
  }
  async logout(): Promise<void> {
    await this._api.delete("hmi/auth/logout");
  }
  async create(props: User): Promise<User> {
    const formData = new FormData();
    formData.append("fullname", props.name);
    formData.append("email", props.email);
    formData.append("password", props.password);
    formData.append("role", props.role);
    formData.append("avatarPath", props.photo);
    formData.append("isActive", "1");
    const { data } = await api.post(`admin/user`, formData);

    return User.create({
      id: data.data.id,
      name: data.data.fullname,
      email: data.data.email,
      photo: data.data.avatarPath,
      role: data.data.role,
      isActive: data.data.isActive,
    });
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
  async updateUser(id: string, data: User): Promise<boolean> {
    const resultData = {
      email: data.email,
      fullname: data.name,
      isActive: data.isActive.toString(),
      password: data.password,
      role: data.role || "Inspector",
      avatarPath: data.photo,
    };

    if (!data.password) {
      delete resultData.password;
    }
    await api.put(`admin/user/${id}`, resultData);

    return true;
  }
}
