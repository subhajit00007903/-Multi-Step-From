import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/PageFive.css';

function PageFive() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="PageFive">
      <div className="content">
        <div className="image-container">
          <img src="path_to_your_image" alt="Celebrating Character" />
        </div>
        <div className="text">
          <h1>You're On Your Way!</h1>
          <p className="stars">★★★★★</p>
          <div className="review">
            <p>“Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.” — Jacob S.</p>
          </div>
        </div>
      </div>
      <button onClick={() => navigate('/six')}>Continue</button> {/* Add an onClick handler to the button */}
    </div>
  );
}

export default PageFive;
