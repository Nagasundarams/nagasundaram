import React from 'react';
import CTA from './CTA';
import './header.css';
import Socialhandle from './Socialhandle';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Nagasundaram</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA/>
        <Socialhandle/>
        <div className='me'>
          

        </div>
      </div>
    </header>
  )
}
export default Header;