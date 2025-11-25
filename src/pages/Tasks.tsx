import type { RootState } from '@/app/store';
import EditModal from '@/components/shared/EditModal';
import TaskCard from '@/components/shared/taskCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { deleteTodo, toggleTodo, updateTodo } from '@/features/todos/todosSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Todo {
  id: string;
  text: string;
  category: string;
  targetDate?: string | undefined;
  completed: boolean;
}
const Tasks = () => {
    const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

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

            return (
              <div className="m-1  " key={t.id}>
               <TaskCard id={t.id}
                       text={t.text}
                       category={t.category}
                       targetDate={t.targetDate}
                       completed={t.completed}
                       handleDeleteTodo={handleDeleteTodo}
                       handleToggleTodo={handleToggleTodo}
                       onEdit={() => {
    setSelectedTodo(t);
    setIsModalOpen(true);
  }}
                       
                       >
                        
                        </TaskCard> 

                        <EditModal
                          isOpen={isModalOpen}
                          onClose={() => setIsModalOpen(false)}
                          initialText={selectedTodo?.text || ""}
                          initialCategory={selectedTodo?.category || ""}
                          initialDate={selectedTodo?.targetDate ? new Date(selectedTodo.targetDate) : undefined}
                          onSave={(newText,category, newDate) => {
                            // dispatch updateTodo here
                            if (selectedTodo) {
                             dispatch(updateTodo({ 
                          id: selectedTodo.id, 
                          newText,
                          category,
                          newDate 
                        }));
                            }
                          }}
                        />
              </div>
            );
          })}
        </div>
        </div>
    );
};

export default Tasks;