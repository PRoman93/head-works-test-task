import React, {useEffect} from "react";
import UsersPage from "./UsersPage";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../bll/usersPageReducer";
import s from "./UsersPage.module.css";

const UsersPageContainer = (props) => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.reducer.users)
    console.log(users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])
debugger
    return (
        <div className={s.usersPageWrapper}>
            {users && <UsersPage users={users}/>}
        </div>
    )
}
export default UsersPageContainer
