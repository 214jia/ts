import axios,{AxiosRequestConfig,AxiosResponse} from 'axios'

import {IHttp} from '../models/index'

axios.defaults.baseURL = 'http://localhost:3000';


axios.interceptors.request.use((config:AxiosRequestConfig|any)=>config)


axios.interceptors.request.use((res:AxiosResponse|any)=>{
    return res
},(err:any)=>{
    return Promise.reject(err)
});


const http:IHttp = {
    request(method,url,params){
        return axios({
            method:method,
            url:url,
            params:params
        })
    }
}
export default http;

