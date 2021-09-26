import axios from 'axios'

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos/?_limit=4'
});

export default api;