import axios from "axios";

const api = axios.create({
    // baseURL : "http://localhost:8000/api",
    baseURL : "https://api-bizna-app.onrender.com/api",
})

export default api;