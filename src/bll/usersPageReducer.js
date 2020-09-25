import {ADD_USER, GET_USERS} from "../common/Constants";
import {api} from "../dal/api";

const initialState = {
    users:[
        {name:'yo'},
        {name:'yo'},
        {name:'yo'},
        {name:'yo'},
        {name:'yo'},
    ]
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            debugger
            return {
                ...state, data: action.data
            }
        }
        case ADD_USER: {
            debugger
            return {
                ...state, users:[...state.users, {name:action.user}]
            }
        }
    }
}
const getUsersSuccess = (data) => ({type: GET_USERS, data})
const addUserSuccess = (user) => ({type: ADD_USER, user})

export const getUsers = () => (dispatch) => {
    debugger
    api.getUsers().then(res=>{
        dispatch(getUsersSuccess(res.data))
    })
}
export const addUser = (user) => (dispatch) => {
    debugger
    api.addUser(user).then(res=>{
        dispatch(addUserSuccess(user))
    })
}
export default usersPageReducer
