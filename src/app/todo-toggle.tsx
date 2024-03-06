'use client';

import { useRef, useState } from 'react';

import { Todo } from '@/models/todo-models';
import TodoService from '@/services/todos-services';

interface TodoToggleProps {
  todo: Todo;
}

export const TodoToggle = ({ todo }: TodoToggleProps) => {
  const [checked, setChecked] = useState(todo.isFinished);
  const tRef = useRef<any>(null);

  const onToggle = async () => {
    setChecked(!checked);
    try {
      await TodoService.updateTodo({
        ...todo,
        isFinished: !checked,
      });
    } catch (error) {
      setTimeout(() => setChecked(checked), 500);
    }
  };

  return (
    <input
      ref={tRef}
      type="checkbox"
      className="toggle toggle-success toggle-sm"
      checked={checked}
      onChange={onToggle}
    />
  );
};
