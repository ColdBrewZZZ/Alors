import React, { useState } from 'react';
//import './filter.css';

function CertificationFilter(props) {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const handleCertificationClick = (certification) => {
    props.setCertification(certification);
    setSelectedCertification(certification);
  };

  return (
    <div>
      <h1>Country of Origin:</h1>
      <ul>
        {props.certifications.map((certification) => (
          <button
            key={certification}
            className={selectedCertification === certification ? 'selected' : ''}
            onClick={() => handleCertificationClick(certification)}
          >
            {certification}
          </button>
        ))}
        <button
          className={selectedCertification === 0 ? 'selected' : ''}
          onClick={() => handleCertificationClick(0)}
        >
          All
        </button>
      </ul>
    </div>
  );
}

export default CertificationFilter;


//<button onClick={() => handleCertificationClick(0)}>All</button>