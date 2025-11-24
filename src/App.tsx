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
      <div className="max-w-7xl mx-auto h-screen grid grid-cols-2 justify-center items-center">
        <div className="w-full h-full flex flex-col gap-5 items-center">
          <h1 className="text-3xl font-medium m-5">The task coordinator</h1>
          <div className="text-3xl font-medium grid grid-cols-2 gap-5 m-5">

            {/* Input field */}
          <input
          className="h-10 col-start-1"
            type="text"
            value={text}
            placeholder="Enter task"
            onChange={(e) => setText(e.target.value)}
          />

          {/* Add button */}
          <Button variant={"outline"} className="col-start-1" onClick={handleAddTodo}>
            Add Task
          </Button>

          <div className="w-full gap-5 row-start-1 col-start-2">
            <label className="mb-5 font-medium">Select Target Date:</label>
            <DatePicker value={date} onChange={setDate}></DatePicker>
          </div>

          </div>
          
          
        </div>

        <div className="grid grid-cols-2 m-5">
         {todos.map((t) => {
  // Calculate remaining days for this todo
  const remainingDays = t.targetDate
    ? Math.ceil(
        (new Date(t.targetDate).getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      )
    : null; // or 0, or 'N/A'

  return (
    <div className="m-5" key={t.id}>
      <Card>
        <CardHeader>
          <CardTitle>{t.text}</CardTitle>
          <CardDescription>
            <div>
              <h1>
                <span className="text-blue-600">Target Date:</span>{" "}
                {t.targetDate}
              </h1>
              <h3
  className={remainingDays !== null && remainingDays < 10 ? "text-red-600" : "text-green-600"}
>
  <span>Remaining Days:</span> {remainingDays !== null ? remainingDays : "N/A"}
</h3>

            </div>
          </CardDescription>
          <CardAction></CardAction>
        </CardHeader>
        <CardContent>
          <Button
            className="bg-amber-400 m-5"
            onClick={() => handleDeleteTodo(t.id)}
          >
            Delete
          </Button>
          {t.completed ? (
            <Button
              className="bg-green-500"
              onClick={() => handleToggleTodo(t.id)}
            >
              Completed
            </Button>
          ) : (
            <Button
              className="bg-blue-500"
              onClick={() => handleToggleTodo(t.id)}
            >
              Complete
            </Button>
          )}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
})}

        </div>

      </div>
    </>
  );
}

export default App;
