import React from 'react';
import './footer.css';
import{ImLinkedin} from 'react-icons/im';
import{AiFillInstagram} from 'react-icons/ai';
import{AiFillTwitterSquare} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer_logo'>Nagasundaram</a>

      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#tech'>Tech Stack</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_social'>
      <a href='https://www.linkedin.com/in/nagasundaram-sundar-bb78571bb/' target="_blank" rel='noreferrer'><ImLinkedin/></a>
      <a href='https://www.instagram.com/naga_13_/' target="_blank" rel='noreferrer'><AiFillInstagram/></a>
      <a href='https://twitter.com/Nagan00860735' target='_blank' rel='noreferrer'><AiFillTwitterSquare/></a>

      </div>
      <div className='footer_copywrite'>
        <small>&copy; Nagasundaram. All rights reserved.</small>
      </div>
    </footer>
  )
}
export default Footer;
