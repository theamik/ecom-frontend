import axios from "axios"

let Auth_token = localStorage.getItem('token')

axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL;
axios.defaults.headers.common["Authorization"]=`Bearer ${Auth_token}`;
axios.defaults.headers.post["Content-Type"]='application/json';
axios.defaults.headers.post["Access-Control-Allow-Origin"]='Get,Post,Put,Delete,Options';

export default axios;