import Link from 'next/link';

interface Todo {
  id: string;
  name: string;
  isFinished: boolean;
}

export default function Home() {
  const todos: Todo[] = [
    { id: 'asd1', name: 'Learn NextJS', isFinished: false },
    { id: 'asd2', name: 'Learn Daisy UI', isFinished: false },
    { id: 'asd3', name: 'Create API using NExtJS', isFinished: false },
  ];

  const todoItems = () => (
    <table className="table table-sm">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(({ id, name, isFinished }, index) => (
          <tr key={id}>
            <th>{index + 1}</th>
            <th>{name}</th>
            <th className="flex justify-end">
              <input
                type="checkbox"
                className="toggle toggle-success"
                checked={isFinished}
              />
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <main className="container flex flex-col items-center p-4 gap-4">
      <h1>My Todo List</h1>
      {todoItems()}
      <button className="btn btn-primary btn-sm self-end">
        <Link href="/add-todo">Add Todo</Link>
      </button>
    </main>
  );
}
