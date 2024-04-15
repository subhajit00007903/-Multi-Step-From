import React from 'react';
import '../css/PageSeven.css';

function PageSeven() {
  
  
  
  
    const paths = [
        {
          title: <><strong>Foundational Math</strong> Build your foundational skills in algebra, geometry, and probability.</>,
          imageUrl: 'path_to_your_image' // Add your image URL here
        },
        {
          title: <><strong>Mathematical Thinking</strong> Build your foundational skills in algebra, geometry, and probability.</>,
          imageUrl: 'path_to_your_image' // Add your image URL here
        },
      ];
      
  
  
  
  
  
  
  
  
  
  
  
  

  return (
    <>
    <h1>Learning Paths based on your answer</h1>
    <div className="PageSeven">
      {paths.map((path, index) => (
        <div key={index} className="path">
          {path.title === 'Foundational Math Skills' && <div className="banner">Most Popular</div>}
          <img className="image-section" src={path.imageUrl} alt={path.title} /> {/* Image section */}
          <h2>{path.title}</h2>
          <p>{path.description}</p>
          
          
          
        </div>
      ))}
    </div>
    </>
  );
}

export default PageSeven;
