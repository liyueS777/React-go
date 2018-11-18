
import axios from 'axios';
// import globalCode from '../constants/globalCode'; 
// import { Toast } from 'antd-mobile';
// import {createHashHistory} from 'history';
// import commonInfo from '../common/CommonInfo';

const instance = axios.create({
    //当创建实例的时候配置默认配置
    // xsrfCookieName: 'xsrf-token'
    timeout:10000,
    withCredentials:true,
    headers:{'Content-Type':'application/x-www-form-urlencode'}    
});


//添加请求拦截器
instance.interceptors.request.use(function(config){
    //在发送请求之前做某事
    return config;
  },function(error){
    //请求错误时做些事
    return Promise.reject(error);
  });

//添加响应拦截器
instance.interceptors.response.use(function(response){
    //对响应数据做些事
    return response.data;
  },function(error){
    //请求错误时做些事
    return Promise.reject(error);
  })

  export default instance