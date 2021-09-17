import React from 'react';

function SkillCard({imageUrl, title}) {
  return (
    <div className="skill-card">
      <img className="mb-2" src={imageUrl} alt="LOL"/>
      <h6 className="font-medium">{title}</h6>
    </div>
  );
}

export default SkillCard;