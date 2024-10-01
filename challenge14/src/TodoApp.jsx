import { useReducer } from "react";
import TodoReducer from "./TodoReducer";
import { Row } from "./Row";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  return (
    <>
      <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>
      <hr />
      <Row/>

    </>
  );
};
