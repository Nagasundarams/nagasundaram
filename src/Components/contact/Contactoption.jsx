import React from 'react'

const Contactoption = (props) => {
  return (
    <article className='contact_option'>
        {props.children}
        <h4>{props.platform}</h4>
        <h5>{props.ide}</h5>
        <a href={props.source} target='_blank' rel='noreferrer'>Send a message</a>
    </article>
  )
}
export default Contactoption;
