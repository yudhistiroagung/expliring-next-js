import { TodoDB } from '@/data/todo/datasource/db/todo-db';
import { TodoRepositoryImpl } from '@/data/todo/todo-repository-impl';

import {
  AddTodoUseCase,
  GetTodosUseCase,
  UpdateTodoUseCase,
  DeleteTodoUseCase,
} from '@/domain/todo/usecase';

const todoDB = new TodoDB((item) => item.id);
const todoRepository = new TodoRepositoryImpl(todoDB);

const addTodoUseCase = AddTodoUseCase(todoRepository);
const getTodosUseCase = GetTodosUseCase(todoRepository);
const updateTodoUseCase = UpdateTodoUseCase(todoRepository);
const deleteTodoUseCase = DeleteTodoUseCase(todoRepository);

const di = {
  repository: {
    todoRepository,
  },
  usecases: {
    addTodoUseCase,
    getTodosUseCase,
    updateTodoUseCase,
    deleteTodoUseCase,
  },
};

export default di;
