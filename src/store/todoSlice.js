import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 0, title: 'Create own redux store etc', completed: false}]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: state.todos.length,
                title: action.payload.text,
                completed: false
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed;
        },
    }
})

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;