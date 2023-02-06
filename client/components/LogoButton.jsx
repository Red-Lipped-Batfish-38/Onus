import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const LogoButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="logButton"
      id="logoButton"
      onClick={() => navigate('/')}
    >
      ONUS
    </button>
  );
};

export default LogoButton;
