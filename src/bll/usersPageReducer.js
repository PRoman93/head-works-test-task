import {ADD_USER, GET_DATA_FOR_REGISTER_PAGE, GET_USERS, SET_LOADING_STATUS} from "../common/Constants";
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
                ...state, data: action.data
            }
        }
        case SET_LOADING_STATUS: {
            return {
                ...state, loading: action.loading
            }
        }
        default:
            return state
    }
}
const getUsersSuccess = (users) => ({type: GET_USERS, users})
const addUserSuccess = (user) => ({type: ADD_USER, user})
const addDataSuccess = (data) => ({type: GET_DATA_FOR_REGISTER_PAGE, data})
export const setLoadingStatusSuccess = (loading) => ({type: SET_LOADING_STATUS, loading})

export const getUsers = () => async (dispatch) => {
    dispatch(setLoadingStatusSuccess(true))
    let response = await api.getUsers()
    dispatch(getUsersSuccess(response))
    dispatch(setLoadingStatusSuccess(false))
}
export const addUser = (user) => async (dispatch) => {
    dispatch(setLoadingStatusSuccess(true))
    let response = await api.addUser(user)
    dispatch(addUserSuccess(response.data))
    dispatch(setLoadingStatusSuccess(false))
}
export const getData = () => async (dispatch) => {
    dispatch(setLoadingStatusSuccess(true))
    let data = await api.getData()
    dispatch(addDataSuccess(data.data))
    dispatch(setLoadingStatusSuccess(false))
}
export default usersPageReducer
