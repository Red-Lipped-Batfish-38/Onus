import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = () => {
    fetch('http://localhost:3000/account/logout', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        res.json();
      })
      .then((results) => {
        console.log('logged out of ', results);

        navigate('/');
      });
  };
  return (
    <button type="button" onClick={logout}>
      logout
    </button>
  );
};

export default LogoutButton;
