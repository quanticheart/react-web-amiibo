import axios from 'axios';

const ApiConn = axios.create({
    baseURL: "https://www.amiiboapi.com/api/",
});

ApiConn.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default ApiConn;