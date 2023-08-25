import axios from 'axios';
export const axiosInstance = axios.create({
    headers : {
        // standard way of sending the token to the backend
         authorization : `Bearer ${localStorage.getItem('token')}`
    }
})
