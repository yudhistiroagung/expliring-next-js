export class InMemoryDb<Data> {
  private _data: Record<string, Data> = {};
  constructor(private readonly identifierFn: (item: Data) => string) {}

  async addOrUpdate(data: Data): Promise<Data> {
    const id = this.identifierFn(data);
    this._data[id] = data;

    return data;
  }

  async get(): Promise<Data[]> {
    return Object.values(this._data);
  }
}
