// import {AxiosPromise} from 'axios';

// import {AxiosResponse} from 'axios';

export interface responseData {
  status: 'ok' | 'fail';
  msg: string;
  isLogin?: boolean;
  data?: {
    id: number;
    username: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
  } | null,
  token?: string;
}

export type userAuthInfo = {
  username: string,
  password: string
}
