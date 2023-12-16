
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Reducers/toDoSlider'

const store = configureStore({
 reducer: {
 todos: todoReducer,
 },
});

export default store;