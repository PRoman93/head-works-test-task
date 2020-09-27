import React from "react";
import s from './FormControl.module.css'

export const Input = ({input, meta, ...props}) => {
    const error = meta.touched && meta.error
    return <div className={s.formControl + ' ' + (error ? s.error : '')}>
        <div><input {...input} {...props} className={s.input}/></div>
        {error && <div><span>{meta.error}</span></div>}
    </div>

}
