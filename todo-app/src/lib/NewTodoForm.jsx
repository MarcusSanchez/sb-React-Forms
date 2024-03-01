import { useState } from "react";
import { TodoList } from "./TodoList.jsx";

let id = 0;

export function NewTodoForm() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = {
      id: id++,
      text: e.target.todo.value,
    };
    setTodos([...todos, todo])
    e.target.reset()
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">New Todo</label>
        <input type="text" id="todo" name="todo" />
        <button>Add Todo</button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
