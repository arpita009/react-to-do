import {useState, useContext} from 'react';
import TodoContext from '../../context/TodoContext';

export default function EditTodo({id, text, onToggleEdit}) {
    const {todos, dispatch} = useContext(TodoContext);
    const [editText, setEditText] = useState(text);
    const handleSave = () => {
        dispatch({type: 'edit_todo', payload: {id, editText}})
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