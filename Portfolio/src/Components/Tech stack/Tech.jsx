import React from 'react';
import './tech.css';
import Technology from './technology';
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3 } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { SiJavascript } from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {SiPhp} from 'react-icons/si';
import {FaAws} from 'react-icons/fa';
import {FaJava} from 'react-icons/fa';
const Tech = () => {
  return (
    <section id='tech'>
      <h5>What Skills I have</h5>
      <h2>Tech Stack</h2>
      <div className='container tech_container'>
        <div className='frontend'>
          <h3>Frontend Development</h3>
          <div className='tech_content'>
            <Technology mozhi='HTML' experience='Advanced'><ImHtmlFive className='ico' /></Technology>
            <Technology mozhi='CSS' experience='Intermediate'><SiCss3 className='ico' /></Technology>
            <Technology mozhi='ReactJS' experience='Intermediate'><GrReactjs className='ico' /></Technology>
            <Technology mozhi='JavaScript' experience='Basic'><SiJavascript className='ico' /></Technology>

          </div>

        </div>
        <div className='backend'>
          <h3>Backend Development</h3>
          <div className='tech_content'>
          <Technology mozhi='AWS' experience='Intermediate'><FaAws className='ico' /></Technology>
            <Technology mozhi='Java' experience='Intermediate'><FaJava className='ico' /></Technology>
            <Technology mozhi='SQL' experience='Basic'><GrMysql className='ico' /></Technology>
            <Technology mozhi='PHP' experience='Basic'><SiPhp className='ico' /></Technology>
            


          </div>

        </div>
      </div>
    </section>
  )
}
export default Tech;
