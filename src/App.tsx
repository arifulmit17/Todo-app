
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./features/todos/todosSlice.js"; // <-- import correct path
import { useState } from "react";
import "./App.css";
import type { RootState } from "./app/store.js";
import { Button } from "./components/ui/button.js";




function App() {
  const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

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
       <h1>The Todo App</h1>
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
      

      <ul>
        {todos.map((t) => (
          <div className="flex flex-row">
             <li key={t.id}><div>{t.text}<Button className="bg-amber-400 m-5" onClick={()=>handleDeleteTodo(t.id)}> Delete </Button>
            
            {t.completed ? <Button className="bg-green-500" onClick={()=>handleToggleTodo(t.id)}>Completed</Button> :<Button className="bg-blue-500" onClick={()=>handleToggleTodo(t.id)} >Complete</Button>}</div></li>
          </div>
          
        ))}
      </ul>

    </div>
      
     
    </>
  );
}

export default App;

