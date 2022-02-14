import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.scss';
import '../../scss/_utils.scss';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleCollapse = () => {
    setToggleMenu(false);
  };

  const Menu = () => (
    <>
      <a onClick={handleCollapse} href='#home'>
        Home
      </a>
      <a onClick={handleCollapse} href='#wgpt3'>
        What is GPT?
      </a>
      <a onClick={handleCollapse} href='#possibility'>
        Open AI
      </a>
      <a onClick={handleCollapse} href='#features'>
        Case Studies
      </a>
      <a onClick={handleCollapse} href='#blog'>
        Library
      </a>
    </>
  );

  return (
    <div className='gpt3__navbar flex'>
      <div className='gpt3__navbar-links flex'>
        <div className='gpt3__navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links-menu'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-btns flex'>
        <button className='sign-in'>Sign In</button>
        <button className='sign-up'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu-container scale-up-center flex-col'>
            <Menu />
            <button className='sign-in'>Sign In</button>
            <button className='sign-up'>Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
