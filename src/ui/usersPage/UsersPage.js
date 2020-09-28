import React from "react";
import s from './UsersPage.module.css'
import {NavLink} from "react-router-dom";
import {REGISTRATION_PAGE} from "../../common/Constants";
import Button from "../components/button/Button";
import Header from "../components/header/Header";

const UsersPage = (props) => {

    let renderUsers = props.users.map(el => <dl className={s.holiday}>
        <dt>Полное имя</dt>
        <dd>{el.first_name} {el.last_name}</dd>
        <dt>Дата регистрации</dt>
        <dd>{el.date}</dd>
    </dl>)

    return (
        <div className={s.userPageContainer}>
            <Header title={'Наши клиенты'}/>
            <NavLink to={REGISTRATION_PAGE} name={'new user'}><Button name={'добавить клиента'}/></NavLink>
            <div className={s.usersWrapper}>{renderUsers}</div>
        </div>
    )
}
export default UsersPage
