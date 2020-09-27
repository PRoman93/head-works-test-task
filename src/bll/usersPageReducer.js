import {ADD_USER, GET_DATA_FOR_REGISTER_PAGE, GET_USERS} from "../common/Constants";
import {api} from "../dal/api";

const initialState = {
    users: []
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case ADD_USER: {
            debugger
            return {
                ...state, users: [...state.users, action.user]
            }
        }
        case GET_DATA_FOR_REGISTER_PAGE: {
            return {
                ...state, data:action.data
            }
        }
        default: return state
    }
}
const getUsersSuccess = (users) => ({type: GET_USERS, users})
const addUserSuccess = (user) => ({type: ADD_USER, user})
const addDataSuccess = (data) => ({type: GET_DATA_FOR_REGISTER_PAGE, data})

export const getUsers = () => async (dispatch) => {
    let response = await api.getUsers()
    dispatch(getUsersSuccess(response))
}
export const addUser = (user) => async (dispatch) => {
    let response = await api.addUser(user)
    debugger
    dispatch(addUserSuccess(response.data))
}
export const getData = () => async (dispatch) => {
    let data = await api.getData()
    dispatch(addDataSuccess(data.data))
}
export default usersPageReducer
