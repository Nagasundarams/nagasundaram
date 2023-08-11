import React from 'react';
import './project.css';
import Website from './website';
import web1 from '../../asset/web1.png';
import web2 from '../../asset/web2.jpeg';

function Project() {
    return (
        <section id='project'>
            <h5>Some of my Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio_container'>
              <Website name='F.R.I.E.N.D.S' git="https://en.wikipedia.org/wiki/Friends" demo="https://en.wikipedia.org/wiki/Joey_(TV_series)">{web1}</Website>  
              <Website name='Walking Dead' git="https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)" demo="https://www.imdb.com/title/tt1520211/">{web2}</Website>
                
            </div>
        </section>
    );
}

export default Project;
