import { Auth, IAuth } from "@domain/models/caller/auth";
import { IUser, User } from "@domain/models/caller/user";
import { IUserRepository } from "@domain/repositories/caller/user-repository";
import { api } from "../_api";

export class UserApiRepository implements IUserRepository {
  async login(props: IUser): Promise<IAuth> {
    const { data } = await api.post(`hmi/auth/login`, {
      email: props.email,
      password: props.password,
      areaId: props.lineId,
      shift: props.shift,
    });

    return Auth.create({
      token: data.data.token,
      user: User.create({
        email: data.data.user.email,
        role: data.data.user.role,
        fullName: data.data.user.fullname,
      }),
    });
  }
  async me(): Promise<IAuth> {
    const { data } = await api.get(`hmi/auth/me`);
    return Auth.create({
      token: data.data.token,
      user: User.create({
        email: data.data.user.email,
        role: data.data.user.role,
        fullName: data.data.user.fullname,
        lineId: data.data.area.line,
      }),
    });
  }
}
