import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import TodoItem from "./components/TodoItem/TodoItem";

function App() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        const fetchTodos = async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=5')
            setTodos(data)
        }

        fetchTodos()
    },[])

    const onSubmitTodo = () => {
        setTodos((prev) => [...prev, {id: todos.length + 1, title: inputValue}])
        setInputValue('')
    }

    const onDeleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id))
    }

    return (
        <div className="wrapper">
            <div className="header">
                <h1>Redux ToDo list</h1>
            </div>

            <div className="header__menu">
                <div className="input">
                    <input type="text" placeholder="Add ToDo..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button
                        onClick={onSubmitTodo}
                    >
                        Submit
                    </button>
                </div>
            </div>

            <div className="todo_list">
                {
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            onDelete={() => onDeleteTodo(todo.id)}
                        />
                    ))
                }
            </div>

        </div>
    );
}

export default App;
