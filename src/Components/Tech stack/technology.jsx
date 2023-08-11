import React from 'react';
import './technology.css';

const Technology = (props) => {
  return (
    <article className='tech_details'>
        {props.children}
        <div>
        <h4>{props.mozhi}</h4>
        <small className='text-light'>{props.experience}</small>
        </div>
    </article>
  )
}
export default Technology;
