import React ,{useRef}from 'react';
import './contact.css';
import Contactoption from './Contactoption';
import {CiMail} from 'react-icons/ci';
import{AiFillInstagram} from 'react-icons/ai';
import{BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

function Contact() {
  const form=useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_nzaf35e','template_kg95mvx',form.current,'x-z5p1-MzhLilhZq0')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset();
  };
  return (
   <section id='contact'>
       <h5>Get in Touch!</h5>
       <h2>Contact</h2>
       <div className='container contact_container'>
        <div className='contact_options'>
          <Contactoption ide='nagasundaram373@gmail.com' platform='Email' source='mailto:nagasundaram373@gmail.com' ><CiMail className='contact_icon'/></Contactoption>
          <Contactoption ide='naga_13_' platform='Instagram' source='https://m.me/naga_13_'><AiFillInstagram className='contact_icon'/></Contactoption>
          <Contactoption ide='+918754687641' platform='Whatsapp' source='https://api.whatsapp.com/send?phone=+918754687641'><BsWhatsapp className='contact_icon'/></Contactoption>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
       </div>
       </section>
   
  );
}

export default Contact;
