import {useState} from 'react';

export default function AddTodo({onAddTodo}) {
    const [newTodo, setNewTodo] = useState('');
    const submitTodo =() => {
        onAddTodo(newTodo);
        setNewTodo('');
    }
    return (
        <>
            <input placeholder='add to-do'
                onChange={(e) => setNewTodo(e.target.value)}
                   value={newTodo}
            /> &nbsp;
            <button onClick={submitTodo}>Submit</button>
        </>
    )
}