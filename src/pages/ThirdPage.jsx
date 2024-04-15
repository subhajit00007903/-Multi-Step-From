import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ThirdPage.css';

function ThirdPage() {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate('/fourth');
  };

  return (
    <>
      <div className="ThirdPage">
        <img src=" " alt="" />
        <h2>You’re in the right place. Brilliant gets you hands-on to help improve your professional skills and knowledge. You’ll interact with concepts and solve fun problems in math, science, and computer science. Continue</h2>
      </div>
      <div className="buttonContainer">
        <button onClick={handleContinueClick}>Continue</button>
      </div>
    </>
  );
}

export default ThirdPage;
