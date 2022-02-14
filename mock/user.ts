import {MockMethod} from 'vite-plugin-mock';
// import Mock from 'mockjs';

import register from './auth/register';

export default [
  ...register,
] as MockMethod[];

/*
* // 代码请求
  axios.get('/api/getUser')
    .then(res => {
      console.log(res)
  })
*
*
*
*
* */
