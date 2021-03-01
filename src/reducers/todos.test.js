import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/todos";
import todosReducer from "./todos";

describe("Todos reducer", () => {
  it(`Should handle initial state`, () => {
    expect(todosReducer(undefined, {})).toEqual({
      todos: []
    });
  });

  it(`Should handle ${ADD_TODO} action`, () => {
    const actual = todosReducer(
      { todos: [] },
      {
        type: ADD_TODO,
        text: "Test todos reducer",
        id: 0
      }
    );
    const expected = {
      todos: [
        {
          id: 0,
          text: "Test todos reducer",
          completed: false
        }
      ]
    };

    expect(actual).toEqual(expected);
  });

  it(`Should handle ${TOGGLE_TODO} action`, () => {
    const actual = todosReducer(
      {
        todos: [
          {
            id: 0,
            text: "Test todos reducer",
            completed: false
          }
        ]
      },
      {
        type: TOGGLE_TODO,
        id: 0
      }
    );
    const expected = {
      todos: [
        {
          id: 0,
          text: "Test todos reducer",
          completed: true
        }
      ]
    };

    expect(actual).toEqual(expected);
  });

  it(`Should handle ${DELETE_TODO} action`, () => {
    const actual = todosReducer(
      {
        todos: [
          {
            id: 0,
            text: "Test todos reducer",
            completed: false
          }
        ]
      },
      {
        type: DELETE_TODO,
        id: 0
      }
    );
    const expected = {
      todos: []
    };

    expect(actual).toEqual(expected);
  });
});
