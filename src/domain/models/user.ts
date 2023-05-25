import { Entity } from "./_entity";

export interface IUserProps {
  id?: string;
  name: string;
  email?: string | undefined;
  isActive?: boolean | undefined | number;
  password?: string | undefined;
  role?: string | undefined;
  photo?: File | null | string;
  email_verified_at?: Date | undefined;
  fcm_token?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  deleted_at?: Date | undefined;
}

export class User extends Entity<IUserProps> {
  unmarshall() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role,
      isActive: this.isActive,
      photo: this.photo,
      email_verified_at: this.email_verified_at,
      fcm_token: this.fcm_token,
      created_at: this.created_at,
      updated_at: this.updated_at,
      deleted_at: this.deleted_at,
    };
  }
  static create(props: IUserProps): User {
    return new User(props);
  }

  get name(): string {
    return this._props.name;
  }
  get email(): string | undefined {
    return this._props.email;
  }
  get password(): string | undefined {
    return this._props.password;
  }
  get role(): string | undefined {
    return this._props.role;
  }
  get isActive(): boolean | undefined | number {
    return this._props.isActive;
  }
  get photo(): File | undefined | string {
    return this._props.photo;
  }
  get email_verified_at(): Date | undefined {
    return this._props.email_verified_at;
  }
  get fcm_token(): string | undefined {
    return this._props.fcm_token;
  }
  get created_at(): string | undefined {
    return this._props.created_at;
  }
  get updated_at(): string | undefined {
    return this._props.updated_at;
  }
  get deleted_at(): Date | undefined {
    return this._props.deleted_at;
  }
}

