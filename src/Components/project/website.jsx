import React from 'react'
import './website.css';
 const Website = (props) => {
  return (
    <article className='portfolio_item'>
      <div className='portfolio_img'>
        <img src={props.children} alt={props.name}></img>
      </div>
      <h3>{props.name}</h3>
      <div className='portfolio_cta'>
      <a href={props.git} className='btn' target={'_blank'} rel='noreferrer'>Github</a>
      <a href={props.demo} className='btn btn-primary' target={'_blank'} rel='noreferrer'>Live demo</a>
      </div>
     
    </article>
  )
}
export default Website;