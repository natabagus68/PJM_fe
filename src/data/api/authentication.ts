import { api } from "./_api";

export class Authentication {
  static async me() {
    const { data } = await api.get(`web-admin/auth/me`);
    return data.data;
  }
  static async login({ email, password }): Promise<string> {
    const { data } = await api.post(`web-admin/auth/login`, {
      email,
      password,
    });
    return data.data.token;
  }
}

