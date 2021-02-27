import axios from 'axios';
axios.create({
    baseURL: process.env.BASE_API,
    timeout: 2000,
})
// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use( (config) =>{
     return config;
},  (error) =>{
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(  config => {
      //拦截响应，做统一处理 
      if (config.status === 200) {
        return config.data
      }      
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
      return Promise.reject(error.response.status) // 返回接口返回的错误信息
    })
export {
    axios
};