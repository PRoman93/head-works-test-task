import React, {useEffect} from "react";
import UsersPage from "./UsersPage";
import {useDispatch, useSelector} from "react-redux";
import {getUsers, setLoadingStatusSuccess} from "../../bll/usersPageReducer";
import s from "./UsersPage.module.css";
import Preloader from "../utils/accets/Preloader";

const UsersPageContainer = (props) => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.reducer.users)
    const loading = useSelector(state => state.reducer.loading)

    useEffect(() => {
        dispatch(setLoadingStatusSuccess(true))
        setTimeout(() => {
            dispatch(getUsers())
            dispatch(setLoadingStatusSuccess(false))
        }, 1000)
    }, [])
    return (
        <div className={s.usersPageWrapper}>
            {loading ? <Preloader/> : users && <UsersPage users={users}/>}
        </div>
    )
}
export default UsersPageContainer
