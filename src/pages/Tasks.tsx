import type { RootState } from '@/app/store';
import TaskCard from '@/components/shared/taskCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { deleteTodo, toggleTodo } from '@/features/todos/todosSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Tasks = () => {
    const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id: string) => {
      dispatch(deleteTodo(id));
    };
    const handleToggleTodo = (id: string) => {
      dispatch(toggleTodo(id));
    };
    return (
        <div>
            <div className="grid grid-cols-3 col-span-2 m-5">
          {todos.map((t) => {
            // Calculate remaining days for this todo
            const remainingDays = t.targetDate
              ? Math.ceil(
                  (new Date(t.targetDate).getTime() - new Date().getTime()) /
                    (1000 * 60 * 60 * 24)
                )
              : null; // or 0, or 'N/A'

            return (
              <div className="m-1  " key={t.id}>
               <TaskCard id={t.id}
                       text={t.text}
                       targetDate={t.targetDate}
                       completed={t.completed}
                       handleDeleteTodo={handleDeleteTodo}
                       handleToggleTodo={handleToggleTodo}></TaskCard> 
              </div>
            );
          })}
        </div>
        </div>
    );
};

export default Tasks;