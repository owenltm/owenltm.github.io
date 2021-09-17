import React from 'react';

function WorkCard({imageUrl, title, subTitle}) {
  return (
    <div className="work-card">
      <img className="rounded-xl" src={imageUrl} alt="LOL"/>
      <div>
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}

export default WorkCard;