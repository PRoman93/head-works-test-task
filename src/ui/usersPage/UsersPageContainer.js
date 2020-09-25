import React, {useEffect} from "react";
import UsersPage from "./UsersPage";
import {useDispatch} from "react-redux";
import {getUsers, addUser} from "../../bll/usersPageReducer";

const UsersPageContainer = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const addNewUser = (user) => {
        debugger
        dispatch(addUser(user))
    }
    return (
        <UsersPage addUser={addNewUser}/>
    )
}
export default UsersPageContainer
