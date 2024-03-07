import { NextResponse } from 'next/server';

import di from '@/di';

const {
  usecases: { addTodoUseCase, getTodoUseCase, updateTodoUseCase },
} = di;

export const GET = async (req: Request, res: Response) => {
  console.log('[GET] api/todos/');
  try {
    const data = await getTodoUseCase();

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: 'error', error }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  console.log('[POST] api/todos/');
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
  console.log('[POST] api/todos/');
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
