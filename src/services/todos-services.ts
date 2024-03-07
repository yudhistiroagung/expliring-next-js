import axios from 'axios';

import { Todo } from '@/domain/todo/models/todo-models';

const getTodos = async (): Promise<Todo[]> => {
  return axios.get('api/todos');
};

const addTodo = async (name: string): Promise<Todo> => {
  return axios.post('api/todos', { name });
};

const updateTodo = async (todo: Todo): Promise<Todo> => {
  return axios.patch('api/todos', todo);
};

const todosService = {
  getTodos,
  addTodo,
  updateTodo,
};

export default todosService;
