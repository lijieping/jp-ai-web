import type { EmailCodeDTO, LoginDTO, LoginVO, RegisterDTO } from './types';
import { post } from '@/utils/request';

export const login = (data: LoginDTO) => { 
    return post<LoginVO>('/user/session', data).json().then(res => {
      console.log('Login response:', res);
      return res;
    })
    .catch(err => {
      console.error('Login error:', err);
      throw err; // 重新抛出以保持错误传播
    });
};

// 邮箱验证码
export const emailCode = (data: EmailCodeDTO) => post('/resource/email/code', data).json();

// 注册账号
export const register = (data: RegisterDTO) => post('/auth/register', data).json();
