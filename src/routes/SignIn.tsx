import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validateAuthForm from '@Utils/validateAuthForm';
import { requestSignIn } from '@Apis/auth';

export default function SignIn() {
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

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await requestSignIn({ email, password });

    if (data.access_token) {
      localStorage.setItem('accessToken', data.access_token);

      navigate('/todo');
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      navigate('/todo');
    }
  }, []);

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Email' data-testid='email-input' onChange={handleChangeEmail} value={email} />
        <input type='password' placeholder='Password' data-testid='password-input' onChange={handleChangePassword} value={password} />
        <button type='submit' data-testid='signin-button' disabled={!validateAuthForm(email, password)}>
          로그인
        </button>
      </form>
    </>
  );
}
