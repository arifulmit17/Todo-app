
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./features/todos/todosSlice"; // <-- import correct path
import { useState } from "react";
import "./App.css";

function App() {
  const todo = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();
  console.log(todo);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (!text.trim()) return;

    dispatch(addTodo(text));   // <-- send todo text to slice
    setText("");               // clear input
  };

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
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todo.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

