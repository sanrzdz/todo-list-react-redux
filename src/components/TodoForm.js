import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todos";

// function TodoForm({ dispatch }) {
function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState();

  const handleSubmit = () => {
    // console.log("dispatch", dispatch);
    // dispatch(addTodo(inputValue));
    addTodo(inputValue);
    setInputValue("");
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="todos__form">
      <input
        type="text"
        placeholder="what need to do?"
        value={inputValue}
        onChange={onInputChange}
      />
      <button onClick={handleSubmit}>Add todo</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (t) => dispatch(addTodo(t))
});

// export default connect()(TodoForm);
export default connect(null, mapDispatchToProps)(TodoForm);
