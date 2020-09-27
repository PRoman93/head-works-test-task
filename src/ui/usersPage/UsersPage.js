import React from "react";
import s from './UsersPage.module.css'
import {NavLink} from "react-router-dom";
import {REGISTRATION_PAGE} from "../../common/Constants";
import Button from "../components/button/Button";
import Header from "../components/header/Header";

const UsersPage = (props) => {

    let renderUsers = props.users.map(el =>{
        debugger
        return <div key={el.id}>
            <div className={s.userWrapper}>
                <span>полное имя: </span>
                <strong>{el.first_name} {el.last_name}</strong>;
                <span>дата регистрации: </span>{el.date}
            </div>
        </div>
    } )
    return (

        <div className={s.userPageContainer}>
            <Header title={'Наши клиенты'}/>
            <NavLink to={REGISTRATION_PAGE} name={'new user'}><Button name={'new user'}/></NavLink>
            <div className={s.usersWrapper}>{renderUsers}</div>
        </div>
    )
}
export default UsersPage
