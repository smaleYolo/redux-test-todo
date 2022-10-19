import './App.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

import {addTodo, fetchTodos} from "./store/todoSlice";

function App() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const {status, error} = useSelector(state => state.todos)

    const handleAction = () => {
        if(title.trim().length){
            dispatch(addTodo({title}))
            setTitle('')
        }
    }

    useEffect(() => {
        dispatch(fetchTodos())
    },[dispatch])

    return (
        <div className="wrapper">
            <div className="header">
                <h1>Redux ToDo list</h1>
                <div className="menu">
                    <button>Completed</button>
                    <button>Main Page</button>
                </div>
            </div>

            <InputField title={title} updateText={setTitle} handleAction={handleAction}/>

            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>Some error happened: {error}</h2>}


            <TodoList/>

        </div>
    );
}

export default App;
//19.57
