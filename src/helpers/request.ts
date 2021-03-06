import axios, {AxiosRequestConfig, Method} from 'axios';
import {message} from 'ant-design-vue';
import {responseData} from '@/types/responseData';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com';

const errorMsg = (msg: string) => {
  message.error(msg);
};

const storeToken = (tokenStr: string) => {
  window.localStorage
    ? localStorage.setItem('token', tokenStr)
    : (localStorage.token = tokenStr);
};

export default function request(url: string, type: Method = 'GET', data = {}): Promise<responseData> {
  return new Promise((resolve, reject) => {
    // 配置axios选项参数
    const option: AxiosRequestConfig = {
      url,
      method: type
    };

    // 配置数据
    type.toUpperCase() === 'GET'
      ? option.params = data // 查询参数方式 传递数据
      : option.data = data;

    // 用户登出，删除 jwt parameters
    if (url === '/auth/logout') {
      window.localStorage
        ? localStorage.removeItem('token')
        : (localStorage.token = null);
    }

    // 携带JWT，设置请求头字段 axios.defaults.headers.common['Authorization']
    if (localStorage.token) {
      axios.defaults.headers.common['Authorization'] = localStorage.token;
    }

    axios(option)
      .then(res => { // AxiosPromise<any>
        // console.log(res.data);
        // 接口文档约定 res.data.status: 'ok' 见 http://dw-z.ink/2j4pC
        if (res.data.status === 'ok') {
          res.data.token && storeToken(res.data.token);
          return resolve(res.data);
        } else {
          errorMsg(res.data.msg);
          return reject(res.data);
        }
      })
      .catch(err => {
        errorMsg('网络异常');
        return reject({msg: '网络异常', errorDetail: err});
      });
  });
}

// 方法使用范例
// request('/auth/login', 'POST', {username: 'Jack', password: '123456'})
// .then(response => { console.log(response.data)})
