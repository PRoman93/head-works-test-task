import axios from 'axios'

const instanceForUser = axios.create({
    baseURL: 'http://localhost:3004/users'
})
const instanceForRegister = axios.create({
    baseURL: "https://meowfacts.herokuapp.com/"
})

export const api = {
    getUsers() {
        return instanceForUser.get('').then(res => res.data)
    },
    addUser(user) {
        return instanceForUser.post('', user)
    },
    getData() {
        return instanceForRegister.get('').then(res => res.data)
    }
}
