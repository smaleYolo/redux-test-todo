import React from 'react';
import styles from './TodoItem.module.scss';
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodoComplete} from "../../store/todoSlice";

const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.root}>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete({id}))}/>
            <p>{title}</p>
            <button onClick={() => dispatch(removeTodo({id}))} className={styles.delete}>
                Delete
            </button>
        </div>
    );
};

export default TodoItem;