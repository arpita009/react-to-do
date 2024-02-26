import {useState} from 'react';

export default function EditTodo({id, text, onEditTodo,onToggleEdit}) {
    const [editText, setEditText] = useState(text);
    const handleSave = () => {
        onEditTodo(id, editText);
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