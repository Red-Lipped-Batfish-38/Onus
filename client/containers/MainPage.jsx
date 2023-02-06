import React from 'react';
import Button from 'react-bootstrap/Button';
import Img from './removed.png';
import { useNavigate } from "react-router-dom";


const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="Home-section">
      <h1>ONUS</h1>
  
      <img src={Img} style={{'width': '30vw', 'margin': '20 auto 100 auto'}}/>
     
        
       
          <div className = "sign-buttons">
          <Button variant="primary" size="md" className = "sign-up" onClick={() => navigate("/signup")}>
          Sign Up
        </Button>
        <Button variant="secondary" size="md" className = "log-in" onClick={() => navigate("/login")}>
          Log In
        </Button>
          </div>
          
        
          
     
        
       
    </div>
  );
};

export default MainPage;
