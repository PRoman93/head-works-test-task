import React from "react";
import {Route} from "react-router-dom";
import {ABOUT_ME, REGISTRATION_PAGE, USERS_LIST} from "../common/Constants";
import NavigationPage from "./navigationMenu/NavigationPage";
import UsersPageContainer from "./usersPage/UsersPageContainer";
import RegistrationPageContainer from "./registrationPage/RegistrationPageContainer";
import AboutMePage from "./aboutMePage/AboutMePage";

const MainPage = (props) => {
    return (
        <>
            <NavigationPage/>
            <Route path={USERS_LIST} component={UsersPageContainer}/>
            <Route path={REGISTRATION_PAGE} component={RegistrationPageContainer}/>
            <Route path={ABOUT_ME} component={AboutMePage}/>
        </>
    )
}
export default MainPage
