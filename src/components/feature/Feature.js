import React from 'react';
import './feature.scss';
import '../../scss/_utils.scss';
function Feature({ text, title }) {
  return (
    <>
      {/* and also make h2:before */}
      <h2>{title}</h2>
      <p>{text}</p>
    </>
  );
}

export default Feature;
