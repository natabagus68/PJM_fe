import { Auth } from "@domain/models/web-admin/auth";
import {
  FilterUser,
  IUserAdmin,
  UserAdmin,
} from "@domain/models/web-admin/user";
import { IUserAdminRepository } from "@domain/repositories/web-admin/user-repository";
import { api } from "../_api";
import { RowsData } from "@domain/models/web-admin/rows-data";

export class UserApiRepository implements IUserAdminRepository {
  async delete(id: string): Promise<boolean> {
    await api.delete(`web-admin/user/${id}`);
    return true;
  }
  async create(props: any): Promise<boolean> {
    await api.post(`web-admin/user`, props);
    return true;
  }
  async update(props: any, id: string): Promise<boolean> {
    const { data } = await api.put(`web-admin/user/${id}`, props);

    return true;
  }
  async findByid(id: string): Promise<UserAdmin> {
    const { data } = await api.get(`web-admin/user/${id}`);
    return UserAdmin.create({
      email: data.data.email,
      role: data.data.role,
      fullname: data.data.fullname,
      isActive: data.data.isActive,
      avatar: data.data.avatarPath,
    });
  }
  async updateToggle(id: UserAdmin["id"]): Promise<boolean> {
    await api.put(`web-admin/user/${id}/toggle-active`);
    return true;
  }
  async getAll(props: FilterUser): Promise<RowsData<UserAdmin>> {
    const sortTemp = props.shortby.split("-");
    const { data } = await api.get(`web-admin/user`, {
      params: {
        search: props.q,
        "sort[column]": sortTemp[0],

        "sort[sort]": sortTemp[1],
        page: props.paginate.page,
        limit: props.paginate.limit,
        role: props.role,
      },
    });

    console.log(data.data);

    return RowsData.create({
      rows: data.data.totalRow,
      lastPage: data.data.lastPage,
      data: (data.data.data || []).map((item) => {
        return UserAdmin.create({
          id: item.id,
          fullname: item.fullname,
          email: item.email,
          isActive: item.isActive,
        });
      }),
    });
  }
  async login(props: IUserAdmin): Promise<Auth> {
    const { data } = await api.post(`web-admin/auth/login`, {
      email: props.email,
      password: props.password,
    });

    return Auth.create({
      token: data.data.token,
      user: UserAdmin.create({
        email: data.data.user.email,
        role: data.data.user.role,
        fullname: data.data.fullname,
      }),
    });
  }
  async me(): Promise<Auth> {
    const { data } = await api.get(`web-admin/auth/me`);
    return Auth.create({
      token: data.data.token,
      user: UserAdmin.create({
        email: data.data.user.email,
        role: data.data.user.role,
        fullname: data.data.fullname,
      }),
    });
  }
}
