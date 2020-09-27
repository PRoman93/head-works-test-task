import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import usersPageReducer from "./usersPageReducer";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    reducer: usersPageReducer,
    form:formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store

window.store = store
