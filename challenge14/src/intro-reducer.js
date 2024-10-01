const initialState = [
  {
    id: 1,
    todo: "Hacer todos los challenges",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "avanzamos en estructura de datos",
  done: false,
};

const newTodo2 = {
  id: 3,
  todo: "No hemos terminado pero ahí vamos",
  done: false,
};

todos = todoReducer(todos, {
  type: "[TODO] add todo",
  payload: newTodo,
});

console.log(todos);
