import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(_,{rejectWithValue}){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

            if(!response.ok){
                throw new Error('Server Error!')
            }

            const data = await response.json()

            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function(id , {rejectWithValue, dispatch}){
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
                method: 'DELETE',
            })

            if(!response.ok){
                throw new Error('Cant delete task... Server Error!')
            }

            dispatch(removeTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function(id, {rejectWithValue, dispatch, getState}) {
        const todo = getState().todos.todos.find(todo => todo.id === id)

        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })

            if(!response.ok) {
                throw new Error('Cant toggle Todo... Server Error!')
            }

            dispatch(toggleTodoComplete({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function(title, {rejectWithValue, dispatch}){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    userId: 1,
                    title,
                    completed: false,
                }),
            })

            if(!response.ok){
                throw new Error('Cant create new Task... Server Error!')
            }

            const data = await response.json();

            dispatch(addTodo(data))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed;
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
        [toggleStatus.rejected]: setError,
        [addNewTodo.rejected]: setError,
    }
})

const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;

