import { useReducer } from "react";
import TodoReducer from "./TodoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

    const handleTodo = (todo)=>{

        const action = {
            type:'[TODO] add todo' ,
            payload:todo
        }

        dispatch(action)
    }


  return (
    <>
      <TodoAdd onNewTodo={handleTodo}></TodoAdd>
      <TodoList todos={todos}></TodoList>
    </>
  );
};
