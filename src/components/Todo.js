import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions/todos";

function Todo(props) {
  const onToggleTodo = () => {
    props.toggleTodo(props.todo.id);
  };

  const onCloseTodo = () => {
    props.deleteTodo(props.todo.id);
  };

  return (
    <li>
      <span onClick={onToggleTodo}>
        {!props.todo.completed ? "📌" : "✔️"} - {props.todo.text}
      </span>
      <button onClick={onCloseTodo}>X</button>
    </li>
  );
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo
};

export default connect(null, mapDispatchToProps)(Todo);
