import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://e-commerce-bdda9.firebaseio.com/'
})

export default instance