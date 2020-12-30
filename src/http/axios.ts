import { message } from 'antd';
import axios from 'axios';

interface IRequest {
  url: string;
  params?: any;
  config?: any;
  data?: any;
}

interface IHeader {
  'content-type'?: string;
}

const request = axios.create({
  baseURL: 'link-code/admin/api',
  timeout: 30000,
  withCredentials: true,
})

const getHeaders = (value: string) => {
  const Header: IHeader = {}
  if (value === 'post') {
    Header['content-type'] = 'application/json;charset=utf-8';
  }
  return Header;
}

export const get = ({url, config, params}: IRequest): Promise<any> => {
  return new Promise((resolve, reject) => {
    request.get(url, {headers: getHeaders('get'), params}).then((res: any) => {
      debugger
      if (res) {
        if (res.data.code === 0 || config.responseType === 'blob') {
          resolve(res.data);
        } else if (res.data.code === 403) {
          message.warn(res.data.message);
        } else {
          // const errMsg = res.data.message || msg;
          // if (rejectError) {
          //   reject(errMsg);
          // } else {
          //   message.warn(errMsg);
          // }
        }
      }
    }).catch((err: any) => {
    })
  })
}

export const post = ({url,data}: IRequest): Promise<any> => {
  return new Promise((resolve, reject) => {
    request.post(url, data, { headers: getHeaders('post') }).then((res: any) => {
      if (res) {
        
      }
    })
  })
}