import axios from "axios"

export const api = axios.create({
    baseURL: "http://172.24.105.184:3333"
})