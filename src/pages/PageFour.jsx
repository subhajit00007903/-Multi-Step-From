import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/PageFour.css';

const options = ['Introductory\nArithmetic', 'Pre-Algebra', 'Algebra', 'Geometry'];

function PageFour() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleContinueClick = () => {
    navigate('/five');
  };

  return (
    <div className="PageFour">
      <h1>What is your comfort level with math?</h1>
      
      <div className="options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.split('\n').map((line, i) => <div key={i}>{line}</div>)}
          </div>
        ))}
      </div>

      <button disabled={!selectedOption} onClick={handleContinueClick}>Continue</button>
    </div>
  );
}

export default PageFour;
