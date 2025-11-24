import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
} from "./features/todos/todosSlice.js"; // <-- import correct path
import { useState } from "react";
import "./App.css";
import type { RootState } from "./app/store.js";
import { Button } from "./components/ui/button.js";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "./components/ui/datepicker.js";

function App() {
  const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch();
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
      dispatch(addTodo(text, date.toDateString())); // <-- send date as string
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
        <div className="w-full h-full flex flex-col gap-5 items-center">
          <h1 className="text-3xl font-medium m-5">The task coordinator</h1>
          <div className="w-full max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">

  <h1 className="text-3xl font-semibold text-center">Add a New Task</h1>

  {/* Task Input */}
  <div className="flex flex-col space-y-2">
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
              {!t.completed && <Card className="p-4 shadow-md border rounded-xl space-y-4 hover:shadow-lg transition">
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
</Card> } 
   

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
