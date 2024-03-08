function delay() {
  return new Promise((res) => setTimeout(res, 800));
}

export class InMemoryDb<Data> {
  private _data: Record<string, Data> = {};
  constructor(private readonly identifierFn: (item: Data) => string) {}

  async addOrUpdate(data: Data): Promise<Data> {
    await delay();
    const id = this.identifierFn(data);
    this._data[id] = data;

    return data;
  }

  async get(): Promise<Data[]> {
    await delay();
    return Object.values(this._data);
  }

  async delete(id: string): Promise<void> {
    await delay();
    delete this._data[id];
  }
}
