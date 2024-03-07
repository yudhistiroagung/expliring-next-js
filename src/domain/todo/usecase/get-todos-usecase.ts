import { TodoRepository } from '@/domain/todo/todo-repository';
import { Todo } from '@/domain/todo/models/todo-models';

export const GetTodoUseCase = (todoRepository: TodoRepository) => async () => {
  return todoRepository.get();
};
