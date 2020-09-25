import React from "react";
import {NavLink} from "react-router-dom";
import {ABOUT_ME, REGISTRATION_PAGE, USERS_LIST} from "../../common/Constants";
import s from './NavigationPage.module.css'
const NavigationPage = (props) => {
    return (
        <div className={s.header}>
            <div className={s.navMenu}>
                <NavLink to={USERS_LIST}>users page</NavLink>
                <NavLink to={REGISTRATION_PAGE}>registration page</NavLink>
                <NavLink to={ABOUT_ME}>about</NavLink>
            </div>
        </div>

    )
}
export default NavigationPage
