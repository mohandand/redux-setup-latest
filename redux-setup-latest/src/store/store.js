import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './Reducers/toDoReducer'

const store = configureStore(
   {
    reducer: {
        toDo: toDoReducer
    }
   }
)   
export default store;