import React from 'react';
import aboutme from '../../asset/aboutme.jpg';
import './about.css';
import Cardabout from './cardabout';
import { BsLaptop } from 'react-icons/bs';
import { TbCertificate } from 'react-icons/tb';
import { AiOutlineFolderOpen } from 'react-icons/ai';
function About() {
var today=new Date();
const jday = new Date('05/17/2022');
var diffDays = parseInt((today - jday) / (1000 * 60 * 60 * 24), 10); 

  var exp=parseInt(diffDays/30.417);
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={aboutme} alt='myself'></img>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <Cardabout heado="Experience" description={exp+" months of experience"}> <BsLaptop className='about_icon'/></Cardabout>
            <Cardabout heado="Certification" description="2x AWS certified"> <TbCertificate className='about_icon'/></Cardabout>
            <Cardabout heado="Project" description="2 completed"> <AiOutlineFolderOpen className='about_icon'/></Cardabout>
          </div>
          <p>A person who is Willing to learn and grow.Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web</p>
          <a href='#contact' className='btn btn-primary'>Lets talk</a>
        </div>
      </div>
    </section>

  );
}

export default About;
