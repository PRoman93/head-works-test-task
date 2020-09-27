import React from "react";
import {Route} from "react-router-dom";
import {ABOUT_ME, REGISTRATION_PAGE, USERS_LIST} from "../../common/Constants";
import NavigationPage from "../navigationMenu/NavigationPage";
import UsersPageContainer from "../usersPage/UsersPageContainer";
import RegistrationPage from "../registrationPage/RegistrationPage";
import AboutMePage from "../aboutMePage/AboutMePage";
import s from './MainPage.module.css'

const MainPage = (props) => {
    return (
        <>
            <NavigationPage/>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <Route path={USERS_LIST} component={UsersPageContainer}/>
                    <Route path={REGISTRATION_PAGE} component={RegistrationPage}/>
                    <Route path={ABOUT_ME} component={AboutMePage}/>
                </div>

            </div>

        </>
    )
}
export default MainPage
