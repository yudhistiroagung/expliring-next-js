import { Todo } from '@/domain/todo/models/todo-models';

import { InMemoryDb } from '../../../../core/db/in-memory-db';

export class TodoDB extends InMemoryDb<Todo> {}
