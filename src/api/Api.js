//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://kuyberbagi.my.id/'
})

export default Api
