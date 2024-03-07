import { Todo } from './models/todo-models';

export interface TodoRepository {
  add: (todo: Todo) => Promise<Todo>;
  get: () => Promise<Todo[]>;
  delete: (id: string) => Promise<void>;
}
