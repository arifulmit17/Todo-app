import type { RootState } from '@/app/store';
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
                <Card className="p-4 shadow-md border rounded-xl space-y-4 hover:shadow-lg transition">
  <CardHeader className="pb-2">
    <CardTitle className="text-xl font-semibold">{t.text}</CardTitle>
    <CardDescription>
      <div className="space-y-1 mt-2">
        <p>
          <span className="font-medium text-blue-600">Target Date: </span>
          {t.targetDate}
        </p>

        <p
          className={`font-semibold ${
            remainingDays !== null && remainingDays < 10
              ? "text-red-600"
              : "text-green-600"
          }`}
        >
          Remaining Days:{" "}
          {remainingDays !== null ? remainingDays : "N/A"}
        </p>
      </div>
    </CardDescription>
  </CardHeader>

  <CardContent className="flex gap-3">
    <Button
      variant="destructive"
      className="px-4 bg-red-600"
      onClick={() => handleDeleteTodo(t.id)}
    >
      Delete
    </Button>

    {t.completed ? (
      <Button
        className="bg-green-600 hover:bg-green-700 text-white px-4"
        onClick={() => handleToggleTodo(t.id)}
      >
        Completed
      </Button>
    ) : (
      <Button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4"
        onClick={() => handleToggleTodo(t.id)}
      >
        Complete
      </Button>
    )}
  </CardContent>

  <CardFooter />
</Card>

              </div>
            );
          })}
        </div>
        </div>
    );
};

export default Tasks;