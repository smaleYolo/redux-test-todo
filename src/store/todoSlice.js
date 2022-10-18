import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 0, title: 'Create first slice', completed: false}]
}

const todoSlice = createSlice({
    name: 'todos',
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
            state.todos = state.todos.filter((item) => item.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find((item) => item.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed
        },
    }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;