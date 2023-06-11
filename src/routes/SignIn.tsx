import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    console.log('로그인 요청');
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Email' data-testid='email-input' onChange={handleChangeEmail} value={email} />
        <input type='password' placeholder='Password' data-testid='password-input' onChange={handleChangePassword} value={password} />
        <button type='submit' data-testid='signin-button' disabled={!validateSignUpForm(email, password)}>
          로그인
        </button>
      </form>
    </>
  );
}
