import axios from 'axios'

const instance = axios.create({
    baseURL: "https://finalproject-p4fn.onrender.com"
})

export default instance
