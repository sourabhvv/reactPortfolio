import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { AiOutlineMessage} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { IoMdSend } from "react-icons/io";


const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
})

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    Toast.fire({
      icon: 'success',
      title: 'Success',
    });
    emailjs.sendForm('reactmail', 'template_7y7opfe', form.current, 'vu70ZsrWO_JrHCALQ')
      .then((result) => {
        
      }, (error) => {
          console.log(error.text);
      });

   e.target.reset()   
  };
  return (
    <section id='contact'>
      <div className="row">
      <div className="col-md-2"></div>
    
      <div className='col-md-8 mt-2'>
        <form ref={form} onSubmit={sendEmail}>
          <div className="container">
          <h3> 📬 Get in Touch </h3>
         <div className="form-group">
          <input type='text' name='name' placeholder='enter your name' required/>
          <hr />
          <input type='email' name='email' placeholder='your email' required/>
          <hr />
          <textarea name='message' rows="4" placeholder='your message' required></textarea>
          <hr />
          </div>
          <button type='submit' className='btn btn-lg'><IoMdSend/> Submit</button>
          </div>
          
        </form>
      </div>

      <div className="col-md-2"></div>
      </div>
      

    </section>
  )
}

export default Contact