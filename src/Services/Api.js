import axios from "axios";

let API = axios.create({
    baseURL: "http://ec2-52-56-131-124.eu-west-2.compute.amazonaws.com/",
    responseType: "json",
});

API.interceptors.request.use((req) => {
    return req;
});


// <=========== all error handling ===========>

export { API }