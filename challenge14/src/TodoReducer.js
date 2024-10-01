const initialState = [
  {
    id: 1,
    description: "Hacer todos los challenges",
    done: false,
  },
];

const TodoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

export default TodoReducer;