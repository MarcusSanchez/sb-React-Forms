import { Todo } from "./Todo.jsx";

export function TodoList({ todos, setTodos }) {
  const handleDelete = (id) => setTodos(t => t.filter(todo => todo.id !== id));
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, i) => (<>
          <Todo key={i} text={todo.text} />
          <button onClick={() => handleDelete(todo.id)}>X</button>
        </>))}
      </ul>
    </div>
  );


}