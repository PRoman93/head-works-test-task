import React from "react";
import s from './FormControl.module.css'

export const Input = ({input, meta, ...props}) => {
    const error = meta.touched && meta.error
    return <div className={s.formControl + ' ' + (error ? s.error : '')}>
        <input id='input' {...input} {...props} className={s.input}/>
        {error && <div>{meta.error}</div>}
    </div>
}
export const RadioInput = ({input, meta, ...props}) => {
    const error = meta.touched && meta.error
    return <div className={s.formRadioControl + ' ' + (error ? s.error : '')}>
        <input id='input' {...input} {...props} className={s.input}/>
        {error && <div>{meta.error}</div>}
    </div>
}
