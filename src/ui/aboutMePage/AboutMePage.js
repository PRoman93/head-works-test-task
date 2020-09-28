import React from "react";
import s from './AboutMePage.module.css'
import Header from "../components/header/Header";

const AboutMePage = (props) => {
    return (
        <div className={s.aboutMePageWrapper}>
            <div>
                <Header title={'Обо мне'}/>
                <h3>Hello, my name is <i>Roman Prokopets</i></h3>
                <h3>I'm front-end developer </h3>
                <h3>It's my test task</h3>
                <h3>my <a href='https://github.com/PRoman93'>projects</a></h3>
            </div>
        </div>
    )
}
export default AboutMePage
