import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-34af4.firebaseio.com/'
})

export default instance