import Todo from '../todo/Todo';

export default function TodoList({todos, onDeleteTodo, onStatusChange, onEditTodo}) {
    return(
        <ul>
            {todos.map(todo =>
                (<li key={todo.id}>
                    <Todo
                        id={todo.id}
                        text={todo.text}
                        isFinished={todo.isFinished}
                        onDeleteTodo={onDeleteTodo}
                        onStatusChange={onStatusChange}
                        onEditTodo={onEditTodo}
                    />
                </li>)
            )}
        </ul>
    )
}