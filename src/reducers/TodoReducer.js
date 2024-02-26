export default function TodoReducer(state, action){
    if (action.type === 'add_todo') {
        const nextId = state.length +1;
        return [...state, {id: nextId, text: action.payload.newTodo, isFinished: false}];
    } else if (action.type === 'delete_todo') {
        const remainingTodos = state.filter(todo => todo.id !== action.payload.id);
        return remainingTodos;
    } else if (action.type === 'edit_todo') {
        const editedTodos = state.map(todo => {
            if (todo.id === action.payload.id) {
                return {...todo, text: action.payload.editText}
            }
            return todo;
        });
        return editedTodos;
    } else if (action.type === 'finish_todo') {
        const updatedTodos = state.map(todo => {
            if (todo.id === action.payload.id) {
                return { ...todo, isFinished: !todo.isFinished };
            }
            return todo; // Return unchanged todo if id doesn't match
        });
        return updatedTodos;
    }
    return state;

}