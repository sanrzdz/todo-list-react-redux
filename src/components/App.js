import * as React from "react";
import TodoForm from "./TodoForm";
import TodosList from "./TodosList";

function App() {
  return (
    <div className="todos">
      <h1>
        <span role="img" aria-label="emoji">
          📅
        </span>{" "}
        Todo App
      </h1>
      <TodoForm />
      <TodosList />
    </div>
  );
}

export default App;
