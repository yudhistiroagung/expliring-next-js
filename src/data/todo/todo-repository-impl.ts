import { TodoRepository } from '@/domain/todo/todo-repository';
import { Todo } from '@/domain/todo/models/todo-models';
import { TodoDB } from '@/data/todo/datasource/db/todo-db';

export class TodoRepositoryImpl implements TodoRepository {
  constructor(private readonly db: TodoDB) {}

  async add(input: Todo) {
    return this.db.addOrUpdate(input);
  }

  async get(): Promise<Todo[]> {
    return this.db.get();
  }
}
