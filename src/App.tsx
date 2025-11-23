
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
      <h1>The Todo App</h1>

      {/* Input field */}
      <input
        type="text"
        value={text}
        placeholder="Enter todo"
        onChange={(e) => setText(e.target.value)}
      />

      {/* Add button */}
      <Button variant={"outline"} className="" onClick={handleAddTodo}>Add Todo</Button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.text}<button className="bg-amber-600 " onClick={()=>handleDeleteTodo(t.id)}> Delete </button><div>
            
            {t.completed ? <button className="bg-green-500" onClick={()=>handleToggleTodo(t.id)}>Completed</button> :<button  onClick={()=>handleToggleTodo(t.id)} >Complete</button>}</div></li>
        ))}
      </ul>
      <div>
        
        
      </div>
    </>
  );
}

export default App;

