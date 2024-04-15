import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SecondPage.css';

const options = ['Student or soon to be enrolled','Professional pursuing a career','Parent of a school-age child','Lifelong learner','Teacher','Other' ];

function SecondPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleContinueClick = () => {
    navigate('/third');
  };

  return (
    <div className="SecondPage">
      <h1>Which Describe You Best ?</h1>
      <h3>This Will help us Personalised Your Experience</h3>
      
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

export default SecondPage;
