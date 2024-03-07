import { TodoRepository } from '@/domain/todo/todo-repository';
import { Todo } from '@/domain/todo/models/todo-models';

export const GetTodosUseCase = (todoRepository: TodoRepository) => async () => {
  return todoRepository.get();
};
