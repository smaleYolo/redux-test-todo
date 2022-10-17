import './App.css';
import { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/todoSlice";

function App() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodo({text}))
        setText('')
    }

    return (
        <div className="wrapper">
            <div className="header">
                <h1>Redux ToDo list</h1>
                <div className="menu">
                    <button>Completed</button>
                    <button>Main Page</button>
                </div>
            </div>

            <InputField text={text} handleInput={setText} handleSubmit={addTask}/>

            <TodoList/>

        </div>
    );
}

export default App;
