'use client';

import { useRef, ElementRef } from 'react';

import { Todo } from '@/models/todo-models';
import TodoService from '@/services/todos-services';

interface TodoToggleProps {
  todo: Todo;
}

export const TodoToggle = ({ todo }: TodoToggleProps) => {
  const tRef = useRef<any>(null);

  const onToggle = async () => {
    const isChecked = tRef.current?.checked;

    try {
      await TodoService.updateTodo({
        ...todo,
        isFinished: isChecked,
      });
    } catch (error) {
      // tRef.current?.checked = !isChecked;
    }
  };

  return (
    <input
      ref={tRef}
      type="checkbox"
      className="toggle toggle-success toggle-sm"
      onChange={onToggle}
      defaultChecked={todo.isFinished}
    />
  );
};
