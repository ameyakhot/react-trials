import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
                Authorization: 'Client-ID h580OZf-5ex6LvnUqONEvIs08ELPGG6FwoFuVcSN3dw'
            }
})