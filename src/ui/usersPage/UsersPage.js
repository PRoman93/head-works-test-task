import React, {useState} from "react";
import s from './UsersPage.module.css'

const UsersPage = (props) => {
    const [user, setUser] = useState()
    const userChange = (e) => {
        setUser(e.currentTarget.value)
    }
    const addNewUser = () => {
        debugger
        props.addUser(user)
    }
    return (


        <div className={s.usersPageWrapper}>users page

            <input type="text" onChange={userChange}/>
            <button onClick={addNewUser}>submit</button>
        </div>
    )
}
export default UsersPage
