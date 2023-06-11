import React from 'react';
import style from './Signup.module.css';

export default function Signup() {
  return (
    <>
      <h1>회원가입</h1>
      <form>
        <input type='text' placeholder='Email' data-testid='email-input' />
        <input type='password' placeholder='Password' data-testid='password-input' />
        <button type='submit' data-testid='signup-button'>
          회원가입
        </button>
      </form>
    </>
  );
}
