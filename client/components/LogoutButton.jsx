import React from 'react';

const LogoutButton = () => {
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
