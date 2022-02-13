import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.scss';
import '../../scss/_utils.scss';

function Navbar() {
  return (
    <div className='gpt3__navbar flex'>
      <div className='gpt3__navbar-links flex'>
        <img src={logo} alt='logo' />
        <a href='/'>Home</a>
        <a href='/'>What is GPT?</a>
        <a href='/'>Open AI</a>
        <a href='/'>Case Studies</a>
        <a href='/'>Library</a>
      </div>
      <div className='gpt3__navbar-btns flex'>
        <button className='sign-in'>Sign In</button>
        <button className='sign-up'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
