import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/FastPage.css';

const options = ['Student', 'Professional', 'Parent', 'Lifelong Learner', 'Teacher', 'Other'];

function FastPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleContinueClick = () => {
    navigate('/second');
  };

  return (
    <div className="FastPage">
      <h1>Please select an option that best describes you:</h1>
      
      <div className="options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            <img src="path_to_your_image" alt={option} />
          </div>
        ))}
      </div>

      <button disabled={!selectedOption} onClick={handleContinueClick}>Continue</button>
    </div>
  );
}

export default FastPage;
