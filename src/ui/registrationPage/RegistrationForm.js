import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {cardRequired, required} from "../utils/validators/validators";
import {Input} from "../components/FormControl";
import Button from "../components/button/Button";
import Header from "../components/header/Header";
import s from './RegistrationPage.module.css'

const RegistrationForm = (props) => {
    const [plasticCard, setPlasticCard] = useState(false)

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                   <span><Field placeholder='имя' name='first_name' validate={[required]} component={Input}/></span>
                   <span><Field placeholder='фамилия' name='last_name' validate={[required]} component={Input}/></span>
                </div>
                <div>
                    <div><h5>введите свой пол</h5>
                        <label>мужской</label><Field component='input' type="radio" name='gender' value='male'/>
                        <label>женский</label><Field component='input' type="radio" name='gender' value='female'/>
                    </div>
                </div>
                <div>
                    <div>
                        <h5>программа лояльности</h5>
                        <label>недоступна</label><Field name='program_loyalty' component='input' type="radio"
                                                         value='unavailable' onClick={() => {
                        setPlasticCard(false)
                    }}/>
                        <label>пластиковая карта</label><Field name='program_loyalty' component='input' type="radio"
                                                          value='plastic_card' onClick={() => {
                        setPlasticCard(true)
                    }}/>
                        <label>мобильное приложение</label><Field name='program_loyalty' component='input' type="radio"
                                                                value='mobile_application' onClick={() => {
                        setPlasticCard(false)
                    }}/></div>
                </div>
                {plasticCard && <div><label>введите номер карты</label><Field name='card_number' component={Input}
                                                                                 type='password'
                                                                                 validate={cardRequired}/>
                </div>}
                <Button type={'submit'} name={'регистрация'}/>
            </form>
        </>
    )
}

const RegisterReduxForm = reduxForm({form: 'register'})(RegistrationForm)

const Registration = (props) => {
    const onSubmit = (formData) => {
        const data = {
            ...formData,
            gender: formData.gender === 'male' ? 'male' : 'female',
            program_loyalty: (formData.program_loyalty === 'unavailable'
                ? 'unavailable' : formData.program_loyalty === 'plastic_card' ? 'plastic_card'
                    : 'mobile_application'),
            date: new Date(),
            card_number: formData.program_loyalty === 'plastic_card' ? formData.card_number : null
        }
        props.addNewUser(data)
    }

    return (
        <div>
            <Header title={'Страница регистрации'}/>
            <RegisterReduxForm onSubmit={onSubmit}/>
            <h3 className={s.phrase}>{props.data}</h3>
        </div>
    )
}

export default Registration
