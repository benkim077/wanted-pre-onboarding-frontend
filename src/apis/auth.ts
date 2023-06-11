import instance from './instance';
import { SignUpParams } from '@Types/auth';

export const requestSignUp = async ({ email, password }: SignUpParams) => {
  const res = await instance.post('/auth/signup', { email, password }, { headers: { 'Content-Type': 'application/json' } });

  return res;
};
