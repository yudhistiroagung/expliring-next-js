'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState, useCallback } from 'react';

import { Todo } from '@/domain/todo/models/todo-models';
import TodoService from '@/services/todos-services';

interface TodoToggleProps {
  todo: Todo;
}

export const TodoToggle = ({ todo }: TodoToggleProps) => {
  const { refresh } = useRouter();
  const [checked, setChecked] = useState(todo.isFinished);
  const tRef = useRef<any>(null);

  const onToggle = useCallback(async () => {
    setChecked(!checked);
    try {
      await TodoService.updateTodo({
        ...todo,
        isFinished: !checked,
      });
    } catch (error) {
      setTimeout(() => setChecked(checked), 500);
    }
  }, [checked, todo]);

  const onDelete = useCallback(async () => {
    const id = todo.id;
    try {
      await TodoService.deleteTodo(id);
      refresh();
    } catch (error) {
      //
    }
  }, [refresh, todo.id]);

  return (
    <div className="form-control flex-row items-center gap-1">
      <label className="label cursor-pointer">
        <input
          ref={tRef}
          type="checkbox"
          className="toggle toggle-success toggle-sm"
          checked={checked}
          onChange={onToggle}
        />
      </label>
      <span className="label-text text-red-500" onClick={onDelete}>
        {checked ? 'Delete' : ''}
      </span>
    </div>
  );
};
