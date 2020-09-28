import React, {useEffect} from "react";
import {addUser, getData, setLoadingStatusSuccess} from "../../bll/usersPageReducer";
import {useDispatch, useSelector} from "react-redux";
import s from './RegistrationPage.module.css'
import Registration from "./RegistrationForm";
import {reset} from "redux-form";
import Preloader from "../utils/accets/Preloader";

const RegistrationPage = (props) => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.reducer.data)
    const loading = useSelector(state => state.reducer.loading)

    const addNewUser = (user) => {
        dispatch(addUser(user))
        dispatch(reset('register'))
    }

    useEffect(() => {
        dispatch(setLoadingStatusSuccess(true))
        setTimeout(() => {
            dispatch(setLoadingStatusSuccess(false))
            dispatch(getData())
        }, 1000)
    }, [])

    return (
        <div className={s.registrationPageWrapper}>
            {loading ? <Preloader/> : <Registration addNewUser={addNewUser} data={data}/>}
        </div>

    )
}
export default RegistrationPage
