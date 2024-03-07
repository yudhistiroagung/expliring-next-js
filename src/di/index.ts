import { TodoDB } from '@/data/todo/datasource/db/todo-db';
import { TodoRepositoryImpl } from '@/data/todo/todo-repository-impl';

import {
  AddTodoUseCase,
  GetTodoUseCase,
  UpdateTodoUseCase,
} from '@/domain/todo/usecase';

const todoDB = new TodoDB((item) => item.id);
const todoRepository = new TodoRepositoryImpl(todoDB);

const addTodoUseCase = AddTodoUseCase(todoRepository);
const getTodoUseCase = GetTodoUseCase(todoRepository);
const updateTodoUseCase = UpdateTodoUseCase(todoRepository);

const di = {
  repository: {
    todoRepository,
  },
  usecases: {
    addTodoUseCase,
    getTodoUseCase,
    updateTodoUseCase,
  },
};

export default di;
