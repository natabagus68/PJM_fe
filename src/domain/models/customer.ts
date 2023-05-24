import { Entity } from "./_entity";

export interface ICustomerProps {
  id?: string | undefined;
  customerId?: string | undefined;
  name?: string | undefined;
  address?: string | undefined;
  phone?: string | undefined;
  parallel1?: string | undefined;
  parallel2?: string | undefined;
  gib1?: string | undefined;
  gib2?: string | undefined;
  prep1?: string | undefined;
  prep2?: string| undefined
  checked?: boolean | undefined;
}

export class Customer extends Entity<ICustomerProps> {
  unmarshall() {
    return {
      id: this.id,
      customerId: this.customerId,
      name: this.name,
      address: this.address,
      phone: this.phone,
      parallel1: this.parallel1,
      parallel2: this.parallel2,
      gib1: this.gib1,
      gib2: this.gib2,
      prep1: this.prep1,
      prep2: this.prep2,
      checked: this.checked,
    };
  }

  static create(props: ICustomerProps): Customer {
    return new Customer(props);
  }
  check(): Customer {
    this._props.checked = true
    return this
  }
  uncheck(): Customer {
    this._props.checked = false
    return this
  }
  get id(): string | undefined {
    return this._props.id;
  }
  get customerId(): string | undefined {
    return this._props.customerId;
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
  get parallel1(): string | undefined {
    return this._props.parallel1;
  }
  get parallel2(): string | undefined {
    return this._props.parallel2;
  }
  get gib1(): string | undefined {
    return this._props.gib1;
  }
  get gib2(): string | undefined {
    return this._props.gib2;
  }
  get prep1(): string | undefined {
    return this._props.prep1;
  }
  get prep2(): string | undefined {
    return this._props.prep2;
  }
  get checked(): boolean | undefined {
    return this._props.checked;
  }
}