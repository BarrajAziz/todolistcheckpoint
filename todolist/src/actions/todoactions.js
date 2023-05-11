import { ADD, DELETE, COMPLETE, UPDATE } from "./types";
export const addTodo = (input) => {
  return {
    type: ADD,
    payload: input,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const completeTodo = (id) => {
  return {
    type: COMPLETE,
    payload: id,
  };
};
