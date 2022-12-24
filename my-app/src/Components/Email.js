
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toaster from 'toastify-react';

export default function Email(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xzps7oi', 'template_qw5bjls', form.current, 'TGKA50Oq5-Z8DIzAz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          toastFailure()
      });
      e.target.reset()
      props.setState(prevState => !prevState);
      toast()
      
  };


  function toast () {
    toaster.success('Message SENTTTTT!')
  }

  function toastFailure () {
    toaster.error('Message could not be sent, please try again.')
  }
  return (
    <div>
      {props.state && <form className="email-form" ref={form} onSubmit={sendEmail} >
        <label>Your name*</label>
        <input type="text" name="user_name" />
        <label>Your E-mail*</label>
        <input type="email" name="user_email" />
        <label>Your message</label>
        <textarea name="message"/>
        <input className="form-submit" type="submit" value="SEND ITTT" />
      </form>}
    </div>

  );
};
