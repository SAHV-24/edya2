import { TodoItem } from "./TodoItem";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
];

const TodoList = ({ todos = [] }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, key) => {
        return <TodoItem key={key} todo={todo} />;
      })}
    </ul>
  );
};
