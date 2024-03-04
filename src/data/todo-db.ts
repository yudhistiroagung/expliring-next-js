import { Todo } from '@/models/todo-models';

import { InMemoryDb } from './in-memory-db';

class TodoDB extends InMemoryDb<Todo> {}

const db = new TodoDB((item) => item.id);

export default db;
