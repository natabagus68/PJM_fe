export type getParam = {
  q: string | undefined;
  limit: number | undefined;
  page: number | undefined;
};
export interface IRepository<T> {
  create(props: T): Promise<T>;
  update(id: string, data: T): Promise<T>;
  delete(id: string): Promise<boolean>;
  getAllData(param?: getParam): Promise<T[]>;
  getUserById(id: string): Promise<T>;
}