import React from 'react';
import styles from './TodoItem.module.scss';
import {useDispatch} from "react-redux";
import {deleteTodo, toggleStatus} from "../../store/todoSlice";

const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.root}>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleStatus(id))}/>
            <p>{title}</p>
            <button onClick={() => dispatch(deleteTodo(id))} className={styles.delete}>
                Delete
            </button>
        </div>
    );
};

export default TodoItem;