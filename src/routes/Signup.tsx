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

  return (
    <>
      <h1>회원가입</h1>
      <form>
        <input type='text' placeholder='Email' data-testid='email-input' onChange={handleChangeEmail} />
        <input type='password' placeholder='Password' data-testid='password-input' onChange={handleChangePassword} />
        <button type='submit' data-testid='signup-button'>
          회원가입
        </button>
      </form>
    </>
  );
}
