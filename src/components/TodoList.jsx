import React from 'react';
import TodoItem from "./TodoItem/TodoItem";
import {useSelector} from "react-redux";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)

    return (
        <div className="todo_list">
            {
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                    />
                ))
            }
        </div>
    );
};

export default TodoList;