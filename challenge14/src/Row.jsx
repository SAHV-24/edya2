import { Controls } from "./Controls";
import { Todo } from "./Todo";

export const Row = () => {
  return (
    <div className="row">
      <Todo name="Item 1" />

      <Controls />
    </div>
  );
};
