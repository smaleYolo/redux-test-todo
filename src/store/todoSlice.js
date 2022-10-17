import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [{id: 0, title: 'new some', completed: false}]
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: state.todos.length + 1,
                title: action.payload.text,
                completed: false
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find(item => item.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed;
        },
    }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;