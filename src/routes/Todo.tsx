import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      navigate('/signin');
    }
  }, []);

  return (
    <>
      <h1>Todo</h1>
    </>
  );
}
