import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://5f6e074060cf97001641ba04.mockapi.io'
})


export const api = {
    getUsers() {
        return instance.get('').then(res => {
            return{
                res
            }
        })
    },
    addUser(user){
        debugger
        return instance.post('', {user})
    }
}
