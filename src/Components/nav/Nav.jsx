import React, { useState } from 'react';
import './nav.css';
import {BiHomeAlt} from 'react-icons/bi';
import {MdPersonOutline} from 'react-icons/md';
import {MdComputer} from 'react-icons/md';
import{BiMessageRoundedDots} from 'react-icons/bi';


const Nav = () => {
  const[activenav,setActiveNav]=useState('#header');
  return (
   <nav>
    <a href='#header' className={activenav==='#header' ? 'active' : ''}  onClick={()=>{setActiveNav('#header')}}><BiHomeAlt/></a>
    <a href='#about' className={activenav==='#about' ? 'active' : ''} onClick={()=>{setActiveNav('#about')}}><MdPersonOutline/></a>
    <a href='#tech' className={activenav==='#tech' ? 'active' : ''} onClick={()=>{setActiveNav('#tech')}} ><MdComputer/></a>
    <a href='#contact' className={activenav==='#contact' ? 'active' : ''} onClick={()=>{setActiveNav('#contact')}}><BiMessageRoundedDots/></a>
   </nav>
  )
}
export  default Nav;
