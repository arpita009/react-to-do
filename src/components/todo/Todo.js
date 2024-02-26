import './Todo.css';
import {useState, memo, useContext} from 'react';
import EditTodo from '../editTodo/EditTodo';
import TodoContext from '../../context/TodoContext';


export default function Todo({id, text, isFinished}) {
    const {dispatch} = useContext(TodoContext);
    const [isEdit, setIsEdit] = useState(false);
    const toggleEdit =() => {
        setIsEdit(!isEdit);
    }
    return(
        <>
            {!isEdit ? <span className={isFinished ? 'is-done': ''}>{text}</span> :
               <EditTodo id={id}
                         text={text}
                         onToggleEdit={toggleEdit}
               />
            }
            <input type='checkbox' checked={isFinished}
                onChange={() => {
                    dispatch({type: 'finish_todo', payload: {id}})
                }}
            /> &nbsp;
            {!isEdit && <button onClick={toggleEdit}>Edit</button>} &nbsp;
            <button onClick={() =>{
                dispatch({type: 'delete_todo', payload: {id}});
            }}>Delete</button>
        </>
    )
}