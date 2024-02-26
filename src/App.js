import './App.css';
import TodoList from './components/todolist/TodoList';
import AddTodo from './components/addtodo/AddTodo';
import {useState, useReducer} from "react";
import TodoContext from './context/TodoContext';
import TodoReducer from './reducers/TodoReducer';


function App() {
    const dos = [
        {id:1, text: 'todo 1', isFinished: true},
        {id:2, text: 'todo 2', isFinished: false},
        {id:3, text: 'todo 3', isFinished: true},
    ];
    // const [todos, setTodos] = useState(dos);
    const [todos, dispatch] = useReducer(TodoReducer, dos);

    const setTodosArr =(arr) => {
        // setTodos(arr);
    }


    return (
    <div className="App">
        <h1 className='center-align'>Nice To-do App</h1>
        <TodoContext.Provider value={{todos, dispatch}}>
            <AddTodo />
            <TodoList />
        </TodoContext.Provider>
    </div>
  );
}

export default App;
