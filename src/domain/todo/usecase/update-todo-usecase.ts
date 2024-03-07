import { TodoRepository } from '@/domain/todo/todo-repository';
import { Todo } from '@/domain/todo/models/todo-models';

export const UpdateTodoUseCase =
  (todoRepository: TodoRepository) => async (input: Todo) => {
    return todoRepository.add(input);
  };
