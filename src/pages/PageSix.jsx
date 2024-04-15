import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/PageSix.css';

function PageSix() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/seven');
    }, 5000); // Change this value to adjust the delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="PageSix">
      <div className="loader"></div>
      <p>Finding the learning path recommendations for you based on your responses...</p>
    </div>
  );
}

export default PageSix;
