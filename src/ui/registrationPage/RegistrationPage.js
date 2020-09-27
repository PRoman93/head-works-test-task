import React, {useEffect} from "react";
import {addUser, getData} from "../../bll/usersPageReducer";
import {useDispatch, useSelector} from "react-redux";
import s from './RegistrationPage.module.css'
import Registration from "./RegistrationForm";
import {reset} from "redux-form";

const RegistrationPage = (props) => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.reducer.data)
    console.log(data)

    const addNewUser = (user) => {
        debugger
        dispatch(addUser(user))
        dispatch(reset('register'))
    }

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div className={s.registrationPageWrapper}>
            <Registration addNewUser={addNewUser} data={data}/>
        </div>

    )
}
export default RegistrationPage
