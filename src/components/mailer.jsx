import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ukg9fte', 'template_uh9yzgf', form.current, 'user_CaVgj9aXnYjHxUjP7Pc9g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />

    <label>Email</label>
    <input type="email" name="user_email" />

    <label>Message</label>
    <textarea name="message" />

    <label>Amount</label>
    <textarea name="amount" />

    <input type="submit" value="Send" />
  </form>
  );
};