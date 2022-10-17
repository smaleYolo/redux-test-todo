import React from 'react';
import styles from './TodoItem.module.scss';

const TodoItem = ({title, onDelete}) => {
    return (
        <div className={styles.root}>
            <input type="checkbox"/>
            <p>{title}</p>
            <button onClick={onDelete}>
                Delete
            </button>
        </div>
    );
};

export default TodoItem;