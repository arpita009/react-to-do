import {useState, useContext} from 'react';
import TodoContext from '../../context/TodoContext';

export default function AddTodo() {
    const {todos,setTodosArr} = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState('');
    const submitTodo =() => {
        // onAddTodo(newTodo);
        const nextId = todos.length +1;
        setTodosArr([...todos, {id: nextId, text: newTodo, isFinished: false}]);
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