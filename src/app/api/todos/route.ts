import { NextResponse } from 'next/server';

import di from '@/di';

const {
  usecases: {
    addTodoUseCase,
    getTodosUseCase,
    updateTodoUseCase,
    deleteTodoUseCase,
  },
} = di;

export const GET = async (req: Request, res: Response) => {
  try {
    const data = await getTodosUseCase();

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: 'error', error }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    const { name } = await req.json();
    if (!name) {
      return NextResponse.json(
        { message: 'name is required' },
        { status: 400 }
      );
    }

    const todo = {
      id: Date.now().toString(),
      name,
      isFinished: false,
    };
    const data = await addTodoUseCase(todo);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'error', error }, { status: 500 });
  }
};

export const PATCH = async (req: Request, res: Response) => {
  try {
    const payload = await req.json();
    if (!payload) {
      return NextResponse.json(
        { message: 'payload is required' },
        { status: 400 }
      );
    }

    const data = await updateTodoUseCase(payload);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'error', error }, { status: 500 });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ message: 'id is required' }, { status: 400 });
    }

    await deleteTodoUseCase(id);

    return NextResponse.json({ message: 'OK' });
  } catch (error) {
    return NextResponse.json({ message: 'error', error }, { status: 500 });
  }
};
