import React from "react";
import s from './Header.module.css'

const Header = (props) => {
    return(
            <h2 className={s.title}>{props.title}</h2>
    )
}
export default Header
