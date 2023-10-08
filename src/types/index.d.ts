export type HttpRequstMethod = 
    'get' | 'GET' 
    | 'post' | 'POST' 
    | 'head' | 'HEAD' 
    | 'options' | 'OPTIONS'
    | 'delete' | 'DELETE'
    | 'patch' | 'PATCH'
    | 'put' | 'PUT'

export type AxiosRequestConfig = {
  url: string;
  method: HttpRequstMethod;
  data?: any;
  params?: any;
}