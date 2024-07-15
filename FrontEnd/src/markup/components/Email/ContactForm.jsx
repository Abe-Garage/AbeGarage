import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3hyyrf6', 'template_3u4m9j1', form.current, {
        publicKey: '5WLgPbzkqKK3VxMpa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('your message is sent successfully !')
          setInterval(()=>{window.location.reload()},3000)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>

 <div className='contact-section'>

    <div className='auto-container'>
         <div className="contact-title">
           <h2>Contact US</h2>
        </div>

        <div className='row clearfix'>
            <div className='form-column col-lg'>
                 <div className='inner-column'>
                      <div className='contact-form'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='row clearfix'>
                                         <div className='form-group col-md-12'>
                                                <input type="text" name="user_name" placeholder='Name' />
                                         </div>

                                         <div className='form-group col-md-12'>
                                                <input type="email" name="user_email" placeholder='Your Email'/>
                                         </div>

                                         <div className='form-group col-md-12 contact_us'>
                                                  <textarea  type='text' name="message" placeholder='Your message' />
                                         </div>

                                         <div className='form-group col-md-12'>
                                                {/* <input type="submit" value="Send" className='theme-btn btn-style-one' />
                                                <span>Login</span> */}
                                                  <button className="theme-btn btn-style-one" type="submit"data-loading-text="Please wait..." >
                                                        <span>SEND</span>
                                                  </button>
                                         </div>
                                </div>
                            </form>
                      </div>
                 </div>
            </div>

        </div>

    </div>

 </div>


  );
};

export default ContactForm