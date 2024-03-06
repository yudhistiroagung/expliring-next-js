import Link from 'next/link';

import TodoDB from '@/data/todo-db';

import { TodoToggle } from './todo-toggle';

export default async function Home() {
  const todos = await TodoDB.get();

  const todoItems = () => (
    <table className="table table-sm ">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={todo.id}>
            <th>{index + 1}</th>
            <th>{todo.name}</th>
            <th className="flex justify-end">
              <TodoToggle todo={todo} />
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <main className="container m-auto flex flex-1 flex-col items-center p-4 gap-4">
      <h1>My Todo List</h1>
      {todoItems()}
      <button className="btn btn-primary btn-sm self-end">
        <Link href="/add-todo">Add Todo</Link>
      </button>
    </main>
  );
}
