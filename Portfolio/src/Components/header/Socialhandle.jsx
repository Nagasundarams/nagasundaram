import React from 'react';
import{ImLinkedin} from 'react-icons/im';
import{AiFillInstagram} from 'react-icons/ai';
import{SiLeetcode} from 'react-icons/si';

const Socialhandle = () => {
  return (
    <div className='socialhandle'>
        <a href='https://www.linkedin.com/in/nagasundaram-sundar-bb78571bb/' target="_blank" rel='noreferrer'><ImLinkedin/></a>
        <a href='https://www.instagram.com/naga_13_/' target="_blank" rel='noreferrer'><AiFillInstagram/></a>
        <a href='https://leetcode.com/nagasundaram373/' target="_blank" rel='noreferrer'><SiLeetcode/></a>
    </div>
  )
}
export default Socialhandle;
