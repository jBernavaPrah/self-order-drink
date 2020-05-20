import axios from "axios";

export const client = axios.create({
    baseURL: '/api',
    responseType: 'json',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
