import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";
import { api } from "./_api";
import { CustomerRepository } from "@domain/repositories/customer-repository";
import { Customer } from "@domain/models/customer";

export class CustomerApiRepository implements CustomerRepository {
  async get(param: TableParam): Promise<PaginatedData<Customer>> {
    const { data } = await api.get(`customer`, { params: param });
    return PaginatedData.create<Customer>({
      data: (data?.data || []).map((item: any) =>
        Customer.create({
          id: item.id,
          name: item.name,
        })
      ),
      page: data.page,
      limit: data.limit,
      lastPage: data.totalPage,
    });
  }
  async show(id: string): Promise<Customer> {
    const {
        data: { data = {} },
    } = await api.get(`customer/${id}`);
    return Customer.create({
        id: data.id,
        name: data.name,
    });
  }
  async store(param: Customer): Promise<void> {
    await api.post(`admin/customer`, {
      customerId: param.id || " ",
      customerName: param.name,
      address: param.address,
      phone: param.phone,
      parallelism1Path: param.parallel1,
      parallelism2Path: param.parallel2,
      gibClearance1Path: param.gib1,
      gibClearance2Path: param.gib2,
      perpendicularity1Path: param.prep1,
      perpendicularity2Path: param.prep2,
    });
  }
  async update(param: Customer): Promise<Customer> {
    console.log(param)
    const {
        data: { data = {} },
    } = await api.put(`admin/customer/${param.id}`, {
        customerId: param.id || " ",
        customerName: param.name,
        address: param.address,
        phone: param.phone,
        parallelism1Path: param.parallel1,
        parallelism2Path: param.parallel2,
        gibClearance1Path: param.gib1,
        gibClearance2Path: param.gib2,
        perpendicularity1Path: param.prep1,
        perpendicularity2Path: param.prep2,
    });
  }
  async destroy(id: string): Promise<boolean> {
    await api.delete(`admin/customer/${id}`);
    return true;
  }
  async getCustomerData(): Promise<Customer[]> {
    const { data } = await api.get("admin/customer?page=1&limit=10&search");
    return data.data.data.map((item: any) => {
      return Customer.create({
        id: item.id,
        customerId: item.customerId,
        name: item.customerName,
        address: item.address,
        phone: item.phone,
      })
    })
  }
  async getCustomerById(id: string): Promise<Customer> {
    const { data } = await api.get(`admin/customer/${id}`);
    return Customer.create({
      id: data.data.id,
      customerId: data.data.customerId,
      name: data.data.customerName,
      address: data.data.address,
      phone: data.data.phone,
      parallel1: data.data.parallelism1Path,
      parallel2: data.data.parallelism2Path,
      gib1: data.data.gibClearance1Path,
      gib2: data.data.gibClearance2Path,
      prep1: data.data.perpendicularity1Path,
      prep2: data.data.perpendicularity2Path,
    })
  }
  async getDefaultImage(): Promise<Customer> {
    const { data } = await api.get('admin/customer?page=1&limit=10&search')
    return data.data.data.map((item: any) => {
      return Customer.create({
        parallel1: item.parallelism1Path,
        parallel2: item.parallelism2Path,
        gib1: item.gibClearance1Path,
        gib2: item.gibClearance2Path,
        prep1: item.perpendicularity1Path,
        prep2: item.perpendicularity2Path,
      })
    })
  }
  async uploadFoto(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file)
    const { data } = await api.post("admin/customer/upload", formData);
    return data.data
  }
}