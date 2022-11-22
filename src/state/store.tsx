import {tasksReducer} from './tasks-reducer';
import {todolistsReducer} from './todolists-reducer';
import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

export const store = configureStore({ reducer: rootReducer  });

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
