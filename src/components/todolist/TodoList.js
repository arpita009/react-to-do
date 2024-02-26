import Todo from '../todo/Todo';
import {useContext} from 'react';
import TodoContext from '../../context/TodoContext';

export default function TodoList() {
    const {todos, setTodosArr} = useContext(TodoContext);
    return(
        <ul>
            { todos && todos.map(todo =>
                (<li key={todo.id}>
                    <Todo
                        id={todo.id}
                        text={todo.text}
                        isFinished={todo.isFinished}
                    />
                </li>)
            )}
        </ul>
    )
}