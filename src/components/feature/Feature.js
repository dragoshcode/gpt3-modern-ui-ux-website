import React from 'react';
import './feature.scss';
import '../../scss/_utils.scss';
function Feature({ text, title,}) {
  return (
    <>
      <h2 className='feature-title'>{title}</h2>
      <p className='feature-text'>{text}</p>
    </>
  );
}

export default Feature;
