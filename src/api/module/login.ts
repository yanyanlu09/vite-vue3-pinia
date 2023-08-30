import request from '@utils/axios'

interface IResponseType<P = {}>{
  code?: number,
  status: number, 
  msg: string,
  data: P
}


interface ILogin{
  token: string,
  expires: number
}

export const login = (username: string,password: string) => {
  return request<IResponseType<ILogin>>({
    url:'/api/auth/login',
    methods:'post',
    data:{
      username,
      password
    }
  })
}