import React from 'react';
import './footer.scss';
import '../../scss/_utils.scss';
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer grid'>
        <div className='footer__logo flex-col'>
          <img src={logo} alt='logo' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='footer__links flex-col'>
          <h3>Links</h3>
          <div className='footer__links-container flex-col'>
            <a href='/'>Overons</a>
            <a href='/'>Social Media</a>
            <a href='/'>Counters</a>
            <a href='/'>Contact</a>
          </div>
        </div>
        <div className='footer__company flex-col'>
          <h3>Company</h3>
          <div className='footer__company-container flex-col'>
            <a href='/'>Terms & Condition</a>
            <a href='/'>Privacy Policy</a>
            <a href='/'>Contact</a>
          </div>
        </div>
        <div className='footer__followup flex-col'>
          <h3>Get in Touch</h3>
          <div className='footer__followup-container flex-col'>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.netF</p>
          </div>
        </div>
      </div>
      <p className='copyright'>© 2022 GPT-3. All rights reserved.</p>
    </div>
  );
}

export default Footer;
