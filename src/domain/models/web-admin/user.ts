import { Entity } from "../_entity";
import { Paginate } from "./paginate";

export interface IFilterUser {
  q: string;
  role: string;
  shortby: string;
  paginate: Paginate;
}

export interface IUserAdmin {
  id?: string;
  email?: string;
  password?: string;
  role?: string;
  fullname?: string;
  isActive?: boolean;
  avatar?: string;
}

export class UserAdmin extends Entity<IUserAdmin> {
  static create(props: IUserAdmin): UserAdmin {
    return new UserAdmin(props);
  }
  unmarshall() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      role: this.role,
      fullname: this.fullname,
      isActive: this.isActive,
      avatar: this.avatar,
    };
  }

  get email(): string {
    return this._props.email;
  }
  get password(): string {
    return this._props.password;
  }
  get role(): string {
    return this._props.role;
  }
  get fullname(): string {
    return this._props.fullname;
  }
  get isActive(): boolean {
    return this._props.isActive;
  }
  get avatar(): string {
    return this._props.avatar;
  }
}

export class FilterUser {
  private _props: IFilterUser;
  constructor(props: IFilterUser) {
    this._props = props;
  }

  static create(props: IFilterUser): FilterUser {
    return new FilterUser(props);
  }

  unmarshall() {
    return {
      q: this.q,
      role: this.role,
      shortby: this.shortby,
      paginate: this.paginate,
    };
  }

  get q(): string {
    return this._props.q;
  }
  get role(): string {
    return this._props.role;
  }
  get shortby(): string {
    return this._props.shortby;
  }
  get paginate(): Paginate {
    return this._props.paginate;
  }
}
