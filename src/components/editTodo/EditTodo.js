import {useState, useContext} from 'react';
import TodoContext from '../../context/TodoContext';

export default function EditTodo({id, text, onToggleEdit}) {
    const {todos, setTodosArr} = useContext(TodoContext);
    const [editText, setEditText] = useState(text);
    const handleSave = () => {
        const editedTodos = todos.map(todo => {
            if (todo.id ===id) {
                return {...todo, text: editText}
            }
            return todo;
        })
        setTodosArr(editedTodos);
        onToggleEdit();
    }
    return (
        <>
            <input placeholder='edit to-do'
                value={editText} onChange={(e) => setEditText(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
        </>
    )
}