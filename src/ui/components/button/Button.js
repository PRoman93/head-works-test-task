import React from "react";
import s from './Button.module.css'

const Button = (props) => {
    return (
        <button className={s.button}>{props.name}</button>
    )
}
export default Button
