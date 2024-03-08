'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';

import { Todo } from '@/domain/todo/models/todo-models';
import TodoService from '@/services/todos-services';

interface TodoToggleProps {
  todo: Todo;
}

export const TodoToggle = ({ todo }: TodoToggleProps) => {
  const { refresh } = useRouter();
  const [checked, setChecked] = useState(todo.isFinished);
  const [loading, setLoading] = useState(false);
  const tRef = useRef<any>(null);

  const showError = () => toast.error('Something went wrong, please try again');

  const onToggle = useCallback(async () => {
    setChecked(!checked);
    setLoading(true);
    try {
      await TodoService.updateTodo({
        ...todo,
        isFinished: !checked,
      });
    } catch (error) {
      setTimeout(() => setChecked(checked), 500);
      showError();
    }
    setLoading(false);
  }, [checked, todo]);

  const onDelete = useCallback(async () => {
    const id = todo.id;
    setLoading(true);
    try {
      await TodoService.deleteTodo(id);
      refresh();
    } catch (error) {
      setLoading(false);
      showError();
    }
  }, [refresh, todo.id]);

  return (
    <div className="form-control flex-row items-center justify-center gap-1">
      {loading && <span className="loading loading-spinner loading-xs"></span>}
      {!loading && (
        <>
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
        </>
      )}
    </div>
  );
};
