import React from 'react';
import './cardabout.css';

const Cardabout = (props) => {
  const hyp = props.heado === 'Project'? '#project' : '#about';
  return (
    <a href={hyp}><article className='about_card' >
      {props.children}
      <h5>{props.heado}</h5>
      <small>{props.description}</small>

    </article></a>
  )
}
export default Cardabout;
//hyp variable is added.
//<a> tag is used.