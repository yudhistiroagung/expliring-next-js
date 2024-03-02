import Link from 'next/link';

export default function Todos() {
  return (
    <main className="container flex-col flex p-4 gap-4">
      <h1>Add New Todo</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="New Todo ..."
          className="input input-bordered input-primary w-full"
          minLength={3}
          required
        />
        <div className="flex justify-end gap-2">
          <Link href="/">
            <button className="btn btn-error btn-sm">Cancel</button>
          </Link>
          <input type="submit" className="btn btn-primary btn-sm self-end" />
        </div>
      </form>
    </main>
  );
}
