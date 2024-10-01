const TodoReducer = (initialState, action) => {
    switch (action.type) {
        default:
            return initialState;

        case 'ABC':
            throw new Error('action not yet implemented');
            break;

    }
};

export default TodoReducer