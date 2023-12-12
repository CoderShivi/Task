import axios from 'axios'
const API_URL='https://jsonplaceholder.typicode.com';
const axiosInstance=axios.create({
    baseURL:API_URL,
})
const ServerServices={
    fetchData:async ()=>{
        try{
            const response = await axiosInstance.get('/posts');
            return response.data;
        } catch(error)
        {
            console.log('Error fetching data',error);
            throw error;
        }
    },
};

export default ServerServices;