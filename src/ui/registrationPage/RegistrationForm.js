import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {cardRequired, required} from "../utils/validators/validators";
import {Input, RadioInput} from "../components/FormControl";
import Button from "../components/button/Button";
import Header from "../components/header/Header";
import s from './RegistrationPage.module.css'

const RegistrationForm = (props) => {
    const [plasticCard, setPlasticCard] = useState(false)
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder='имя' name='first_name' validate={[required]} component={Input}/>
                    <Field placeholder='фамилия' name='last_name' validate={[required]} component={Input}/>
                </div>
                <div className={s.fieldWrapper}>
                    <h5>выберите свой пол</h5>
                    <div className={s.radioContainer}>
                        <div className={s.singleFieldWrapper}>
                            <div><label>мужской</label></div>
                            <Field component={RadioInput} type="radio" name='gender' value='male'
                                   validate={[required]}/></div>
                        <div className={s.singleFieldWrapper}>
                            <div><label>женский</label></div>
                            <Field component={RadioInput} type="radio" name='gender' value='female'
                                   validate={[required]}/></div>
                    </div>
                </div>
                <div className={s.fieldWrapper}>
                    <h5>программа лояльности</h5>
                    <div className={s.radioContainer}>
                        <div className={s.singleFieldWrapper}>
                            <label>недоступна</label><Field validate={[required]} name='program_loyalty'
                                                            component={RadioInput} type="radio"
                                                            value='unavailable' onClick={() => {
                            setPlasticCard(false)
                        }}/>
                        </div>
                        <div className={s.singleFieldWrapper}>
                            <label>пластиковая карта</label><Field validate={[required]} name='program_loyalty'
                                                                   component={RadioInput} type="radio"
                                                                   value='plastic_card' onClick={() => {
                            setPlasticCard(true)
                        }}/>
                        </div>
                        <div className={s.singleFieldWrapper}>
                            <label>мобильное приложение</label><Field validate={[required]} name='program_loyalty'
                                                                      component={RadioInput} type="radio"
                                                                      value='mobile_application' onClick={() => {
                            setPlasticCard(false)
                        }}/></div>
                    </div>
                    {plasticCard && <div><label>введите номер карты</label><Field name='card_number' component={Input}
                                                                                  type='password'
                                                                                  validate={cardRequired}/>
                    </div>}
                </div>
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
            program_loyalty: (formData.program_loyalty === 'mobile_application'
                ? 'mobile_application' : formData.program_loyalty === 'plastic_card' ? 'plastic_card'
                    : 'unavailable'),
            date: new Date().toDateString(),
            card_number: formData.program_loyalty === 'plastic_card' ? formData.card_number : null
        }
        props.addNewUser(data)
    }

    return (
        <div>
            <Header title={'Страница регистрации'}/>
            <RegisterReduxForm onSubmit={onSubmit}/>
            <div className={s.phraseWrapper}><h3 className={s.phrase}>{props.data}</h3></div>
        </div>
    )
}

export default Registration
