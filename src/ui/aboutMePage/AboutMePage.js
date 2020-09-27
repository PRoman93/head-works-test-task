import React from "react";
import s from './AboutMePage.module.css'
import Header from "../components/header/Header";

const AboutMePage = (props) => {
    return(
        <div className={s.aboutMePageWrapper}>
            <div>
                <Header title={'Обо мне'}/>
                <h3>Hello, my name is <i>Roman Prokopets</i></h3>
                <h5>I'm front-end developer </h5>
                <h5>It's my test task</h5>
                <h5>my <a href='https://github.com/PRoman93'>projects</a></h5>
            </div>

        </div>
    )
}
export default AboutMePage
