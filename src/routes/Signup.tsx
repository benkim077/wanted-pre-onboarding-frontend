import React, { useState } from 'react';
import { requestSignUp } from '@Apis/auth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  const validateSignUpForm = (email: string, password: string) => {
    return validateEmail(email) && validatePassword(password);

    function validateEmail(email: string) {
      return email.includes('@');
    }

    function validatePassword(password: string) {
      return password.length >= 8;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`email: ${email}, password: ${password}`);
    const res = await requestSignUp({ email, password });
    console.log(res);
  };

  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Email' data-testid='email-input' onChange={handleChangeEmail} value={email} />
        <input type='password' placeholder='Password' data-testid='password-input' onChange={handleChangePassword} value={password} />
        <button type='submit' data-testid='signup-button' disabled={!validateSignUpForm(email, password)}>
          회원가입
        </button>
      </form>
    </>
  );
}
