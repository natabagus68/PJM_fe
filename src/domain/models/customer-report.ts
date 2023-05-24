import { Entity } from "./_entity";

export interface ICustomerReport {
  id: string;
  customerId: string;
  customerName: string;
  address: string;
  phone: string;
  parallelism1Path: string;
  parallelism2Path: string;
  gibClearance1Path: string;
  gibClearance2Path: string;
  perpendicularity1Path: string;
  perpendicularity2Path: string;
}

export class CustomerReport extends Entity<ICustomerReport> {
  static create(props: ICustomerReport): CustomerReport {
    return new CustomerReport(props);
  }
  unmershall() {
    return {
      id: this.id,
      customerId: this.customerId,
      customerName: this.customerName,
      address: this.address,
      phone: this.phone,
      parallelism1Path: this.parallelism1Path,
      parallelism2Path: this.parallelism2Path,
      gibClearance1Path: this.gibClearance1Path,
      gibClearance2Path: this.gibClearance2Path,
      perpendicularity1Path: this.perpendicularity1Path,
      perpendicularity2Path: this.perpendicularity2Path,
    };
  }
  get customerId(): string {
    return this._props.customerId;
  }
  get customerName(): string {
    return this._props.customerName;
  }
  get address(): string {
    return this._props.address;
  }
  get phone(): string {
    return this._props.phone;
  }
  get parallelism1Path(): string {
    return this._props.parallelism1Path;
  }
  get parallelism2Path(): string {
    return this._props.parallelism2Path;
  }
  get gibClearance1Path(): string {
    return this._props.gibClearance1Path;
  }
  get gibClearance2Path(): string {
    return this._props.gibClearance2Path;
  }
  get perpendicularity1Path(): string {
    return this._props.perpendicularity1Path;
  }
  get perpendicularity2Path(): string {
    return this._props.perpendicularity2Path;
  }
}

