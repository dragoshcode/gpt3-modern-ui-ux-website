import React from 'react';
import './cta.scss';
import '../../scss/_utils.scss';

function CTA() {
  return (
    <div className='cta flex-col'>
      <div className='cta__details flex-col'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <button>Get Started</button>
    </div>
  );
}

export default CTA;
