import { useRef } from "react";

export const TodoAdd = ({ onNewTodo }) => {
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault(); // Page doesn't reload

    console.log(inputRef.current);

    const newTodo = {
      id: new Date().getTime(),
      description: event.target[0].value,
      done: false,
    };
    onNewTodo(newTodo);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Tarea"
        className="form-control"
      />
      <button type="submit" className="btn btn-putline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
