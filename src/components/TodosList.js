import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../selectors/todos";

function TodoList({ todos }) {
  return <ul>{todos && todos.map((t) => <Todo key={t.id} todo={t} />)}</ul>;
}

const mapStateToProps = (state) => {
  // const todos = state.todos
  const todos = getTodos(state);
  console.log("todos", todos);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
