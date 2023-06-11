import React, { ChangeEvent, useState } from 'react';

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

  return (
    <>
      <h1>회원가입</h1>
      <form>
        <input type='text' placeholder='Email' data-testid='email-input' onChange={handleChangeEmail} value={email} />
        <input type='password' placeholder='Password' data-testid='password-input' onChange={handleChangePassword} value={password} />
        <button type='submit' data-testid='signup-button' disabled={!validateSignUpForm(email, password)}>
          회원가입
        </button>
      </form>
    </>
  );
}
