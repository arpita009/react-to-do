import './Todo.css';
import {useState} from 'react';
import EditTodo from '../editTodo/EditTodo';


export default function Todo({id, text, isFinished, onDeleteTodo,onStatusChange,onEditTodo}) {
    const [isEdit, setIsEdit] = useState(false);
    const toggleEdit =() => {
        setIsEdit(!isEdit);
    }
    return(
        <>
            {!isEdit ? <span className={isFinished ? 'is-done': ''}>{text}</span> :
               <EditTodo id={id}
                         text={text}
                         onEditTodo={onEditTodo}
                         onToggleEdit={toggleEdit}
               />
            }
            <input type='checkbox' checked={isFinished}
                onChange={() => onStatusChange(id)}
            /> &nbsp;
            {!isEdit && <button onClick={toggleEdit}>Edit</button>} &nbsp;
            <button onClick={() =>onDeleteTodo(id)}>Delete</button>
        </>
    )
}