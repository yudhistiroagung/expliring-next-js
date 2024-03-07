import { TodoRepository } from '@/domain/todo/todo-repository';

export const DeleteTodoUseCase =
  (todoRepository: TodoRepository) => async (id: string) => {
    return todoRepository.delete(id);
  };
