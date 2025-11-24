
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./features/todos/todosSlice.js"; // <-- import correct path
import { useState } from "react";
import "./App.css";
import type { RootState } from "./app/store.js";
import { Button } from "./components/ui/button.js";
import { Calendar } from "./components/ui/calendar.js";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



function App() {
  const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleAddTodo = () => {
    if (!text.trim()) return;

    dispatch(addTodo(text));   // <-- send todo text to slice
    setText("");               // clear input
  };

  const handleDeleteTodo=(id:string)=>{
      dispatch(deleteTodo(id))
  }
  const handleToggleTodo=(id:string)=>{
      dispatch(toggleTodo(id))
  }
  
  return (
    <>
    <div className="max-w-7xl mx-auto h-screen flex flex-col justify-center items-center">
       <h1 className="text-3xl font-medium m-5">The work day coordinator</h1>
      <div className="flex gap-5">
       

      {/* Input field */}
      <input
        type="text"
        value={text}
        placeholder="Enter todo"
        onChange={(e) => setText(e.target.value)}
      />

      {/* Add button */}
      <Button variant={"outline"} className="" onClick={handleAddTodo}>Add Todo</Button>

      </div>
      
     
      
     
      

      <div className="grid grid-cols-2 m-5">
        {todos.map((t) => (
          <div className="m-5" key={t.id}>
            <Card>
  <CardHeader>
    <CardTitle>{t.text}</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction><Button className="bg-amber-400 m-5" onClick={()=>handleDeleteTodo(t.id)}> Delete </Button>
      {t.completed ? <Button className="bg-green-500" onClick={()=>handleToggleTodo(t.id)}>Completed</Button> :<Button className="bg-blue-500" onClick={()=>handleToggleTodo(t.id)} >Complete</Button>}
    </CardAction>
  </CardHeader>
  <CardContent>
     {t.completed ? null: <div className="w-1/2 h-20">
          <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />


       </div>}
  </CardContent>
  <CardFooter>
   
  </CardFooter>
</Card>    
          </div>
          
        ))}
      </div>

       
       {date && <p className="mt-2">Selected date: {date.toDateString()}</p>}

    </div>
      
     
    </>
  );
}

export default App;

