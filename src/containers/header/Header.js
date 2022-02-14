import React from 'react';
import './header.scss';
import '../../scss/_utils.scss';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className='header section-padding grid' id='home'>
      <div className='header__data flex-col'>
        <h1 className='gradient-text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className='header__data-input flex'>
          <input type='text' placeholder='Your Email Address' />
          <button>Get Started</button>
        </div>
        <div className='header__data-users flex-col'>
          <img src={people} alt='users' />
          <p>1,600 people requested access to a visit in last 24 hours</p>
        </div>
      </div>
      <div className='header__image'>
        <img src={ai} alt='ai robot' />
      </div>
    </div>
  );
}

export default Header;
