import './Todo.css';
import {useState, memo, useContext} from 'react';
import EditTodo from '../editTodo/EditTodo';
import TodoContext from '../../context/TodoContext';


export default function Todo({id, text, isFinished}) {
    const {todos, setTodosArr} = useContext(TodoContext);
    const [isEdit, setIsEdit] = useState(false);
    const toggleEdit =() => {
        setIsEdit(!isEdit);
    }
    return(
        <>
            {!isEdit ? <span className={isFinished ? 'is-done': ''}>{text}</span> :
               <EditTodo id={id}
                         text={text}
                         onEditTodo={() => {
                             const editedTodos = todos.map(todo => {
                                 if (todo.id ===id) {
                                     return {...todo, text: text}
                                 }
                                 return todo;
                             });
                             setTodosArr(editedTodos);
                         }}
                         onToggleEdit={toggleEdit}
               />
            }
            <input type='checkbox' checked={isFinished}
                onChange={() => {
                    const updatedTodos = todos.map(todo => {
                        if (todo.id === id) {
                            return { ...todo, isFinished: !todo.isFinished };
                        }
                        return todo; // Return unchanged todo if id doesn't match
                    });
                    setTodosArr(updatedTodos);
                }}
            /> &nbsp;
            {!isEdit && <button onClick={toggleEdit}>Edit</button>} &nbsp;
            <button onClick={() =>{
                const remainingTodos = todos.filter(todo => todo.id !== id);
                setTodosArr(remainingTodos);
            }}>Delete</button>
        </>
    )
}