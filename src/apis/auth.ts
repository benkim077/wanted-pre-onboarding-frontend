import instance from './instance';
import { AuthParams, RequestSignInReturn } from '@Types/auth';
import { AxiosResponse } from 'axios';

export const requestSignUp = async ({ email, password }: AuthParams) => {
  const res = await instance.post('/auth/signup', { email, password }, { headers: { 'Content-Type': 'application/json' } });

  return res;
};

export const requestSignIn = async ({ email, password }: AuthParams): Promise<AxiosResponse<RequestSignInReturn>> => {
  const res = await instance.post('/auth/signin', { email, password }, { headers: { 'Content-Type': 'application/json' } });

  return res;
};
