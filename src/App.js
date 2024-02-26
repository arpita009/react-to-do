import './App.css';
import TodoList from './components/todolist/TodoList';
import AddTodo from './components/addtodo/AddTodo';
import {useState} from "react";
import TodoContext from './context/TodoContext';

function App() {
    const dos = [
        {id:1, text: 'todo 1', isFinished: true},
        {id:2, text: 'todo 2', isFinished: false},
        {id:3, text: 'todo 3', isFinished: true},
    ];
    const [todos, setTodos] = useState(dos);

    const setTodosArr =(arr) => {
        setTodos(arr);
    }


    return (
    <div className="App">
        <h1 className='center-align'>Nice To-do App</h1>
        <TodoContext.Provider value={{todos, setTodosArr}}>
            <AddTodo />
            <TodoList />
            {/*<AddTodo onAddTodo ={addNewTodo} />*/}
            {/*<TodoList todos={todos}*/}
            {/*          onDeleteTodo ={deleteTodo}*/}
            {/*          onStatusChange ={statusFinished}*/}
            {/*          onEditTodo={editTodo}*/}
            {/*/>*/}
        </TodoContext.Provider>
    </div>
  );
}

export default App;
