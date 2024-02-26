import './App.css';
import TodoList from './components/todolist/TodoList';
import AddTodo from './components/addtodo/AddTodo';
import {useState} from "react";

function App() {
    const dos = [
        {id:1, text: 'todo 1', isFinished: true},
        {id:2, text: 'todo 2', isFinished: false},
        {id:3, text: 'todo 3', isFinished: true},
    ];
    const [todos, setTodos] = useState(dos);

    const addNewTodo =(text) => {
        const nextId = todos.length +1;
        setTodos([...todos, {id: nextId, text: text, isFinished: false}]);
    }

    const deleteTodo =(id) => {
        const remainingTodos = todos.filter(todo => todo.id !== id);
        setTodos(remainingTodos);
    }

    const statusFinished = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isFinished: !todo.isFinished };
            }
            return todo; // Return unchanged todo if id doesn't match
        });
        setTodos(updatedTodos);
    }

    const editTodo = (id, newText) => {
        const editedTodos = todos.map(todo => {
            if (todo.id ===id) {
                return {...todo, text: newText}
            }
            return todo;
        })
        setTodos(editedTodos);
    }


    return (
    <div className="App">
        <h1 className='center-align'>Nice To-do App</h1>
        <AddTodo onAddTodo ={addNewTodo} />
        <TodoList todos={todos}
                  onDeleteTodo ={deleteTodo}
                  onStatusChange ={statusFinished}
                  onEditTodo={editTodo}
        />
    </div>
  );
}

export default App;
