import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/todos";

export const todosReducer = (state = { todos: [] }, action) => {
  console.log("dispatched", action);
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((item) =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        )
      };

    case DELETE_TODO:
      return {
        todos: state.todos.filter((item) => item.id !== action.id)
      };

    default:
      return state;
  }
};

export default todosReducer;
