import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "./features/todos/todosSlice.js"; // <-- import correct path
import { useState } from "react";
import "./App.css";
import type { RootState } from "./app/store.js";
import { Button } from "./components/ui/button.js";

import { DatePicker } from "./components/ui/datepicker.js";
import TaskCard from "./components/shared/taskCard.js";
import EditModal from "./components/shared/EditModal.js";

interface Todo {
  id: string;
  text: string;
  category: string;
  targetDate?: string | undefined;
  completed: boolean;
}

function App() {
  const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
const [category, setCategory] = useState<string>("");
  const pastTasks = todos.filter((t) => t.completed);
  const [text, setText] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const datenow = new Date();
  const handleAddTodo = () => {
    if (!text.trim()) return;

    if (!date) {
      alert("Please select a date");
      return;
    }
    if (date < datenow) {
      alert("Please select a future date for the todo item.");
      return;
    } else {
      dispatch(addTodo(text, date.toDateString(),category)); // <-- send date as string
      setText("");
      setDate(undefined);
    }

    // <-- send todo text to slice
    // clear input
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };
  

  return (
    <>
      <div className="max-w-7xl mx-auto h-screen grid grid-cols-3 justify-center items-center">
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
          <h1 className="text-3xl font-medium ">The task coordinator</h1>
          <div className="w-full max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
            <h1 className="text-3xl font-semibold text-center">
              Add a New Task
            </h1>

            

            {/* Task Input */}
            <div className="flex flex-col space-y-2">
              <select
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                value={text}
                onChange={(e) => setText(e.target.value)}
              >
                <option value="">-- Select a past task --</option>
                {pastTasks.map((task) => (
                  <option key={task.id} value={task.text}>
                    {task.text}
                  </option>
                ))}
              </select>

              {/* Category select */}
  <label className="text-lg font-medium">Category</label>
  <select
    className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="">-- Select a category --</option>
    <option value="Work">Work</option>
    <option value="Personal">Personal</option>
    <option value="Urgent">Urgent</option>
    <option value="Others">Others</option>
  </select>
              <label className="text-lg font-medium">Task Name</label>
              <input
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                type="text"
                value={text}
                placeholder="Enter task"
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            {/* Date Picker */}
            <div className="flex flex-col space-y-2">
              <label className="text-lg font-medium">Target Date</label>
              <DatePicker value={date} onChange={setDate} />
            </div>

            {/* Add Task Button */}
            <Button
              onClick={handleAddTodo}
              className="w-full h-12 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Add Task
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 col-span-2 m-5">
          {todos
  .filter((t) => !t.completed) // optional: only show incomplete tasks
  .sort((a, b) => {
    const remainingA = a.targetDate
      ? new Date(a.targetDate).getTime() - new Date().getTime()
      : Infinity; // tasks without date go last
    const remainingB = b.targetDate
      ? new Date(b.targetDate).getTime() - new Date().getTime()
      : Infinity;
    return remainingA - remainingB; // closest deadline first
  })
  .map((t) => (
    <div className="m-1 col-span-3" key={t.id}>
      <TaskCard
        id={t.id}
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

      />
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
  newDate ,
  
  
}));
    }
  }}
/>
    </div>
  ))}

        </div>
      </div>
    </>
  );
}

export default App;
