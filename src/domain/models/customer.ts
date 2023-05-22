import { Entity } from "./_entity";

export interface ICustomerProps {
  id?: string | undefined;
  name: string | undefined;
  address?: string | undefined;
  phone?: string | undefined;
  checked?: boolean | undefined;
}

export class Customer extends Entity<ICustomerProps> {
  unmarshall() {
    return {
      id: this.id,
      name: this.name,
      address: this.address,
      phone: this.address,
      checked: this.checked
    };
  };
  static create(props: ICustomerProps): Customer {
    return new Customer(props);
  }
  get id(): string | undefined {
    return this._props.id;
  }
  get name(): string | undefined {
    return this._props.name;
  }
  get address(): string | undefined {
    return this._props.address;
  }
  get phone(): string | undefined {
    return this._props.phone;
  }
  get checked(): boolean | undefined {
    return this._props.checked;
  };
}