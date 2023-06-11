import React, { useState } from 'react';
import { requestSignUp } from '@Apis/auth';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
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

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { status } = await requestSignUp({ email, password });

    if (status === 201) {
      navigate('/signin');
    }
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
