import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <section id='contact-a' className='text-center py-3'>
        <div className='container'>
          <h2 className='section-title'>Contact Me</h2>
          <div className='bottom-line'></div>
          <p className='lead'>Here is how you can reach me</p>
          <form
            method='post'
            name='contact v1'
            data-netlify='true'
            data-netlify-recaptcha='true'
          >
            <div className='text-fields'>
              <input type='hidden' name='form-name' value='contact v1' />

              <input
                type='text'
                className='text-input name-input'
                placeholder='Name'
                name='name'
              />
              <input
                type='text'
                className='text-input subject-input'
                placeholder='Subject'
                name='subject'
              />
              <input
                type='email'
                className='text-input email-input'
                placeholder='Email Address'
                name='email'
              />
              <input
                type='text'
                className='text-input phone-input'
                placeholder='Phone Number'
                name='phone'
              />
              <textarea
                className='text-input message-input'
                placeholder='Enter Message'
                name='message'
              ></textarea>
              <div className='my-2'>
                <div data-netlify-recaptcha='true'></div>
              </div>
            </div>
            <button type='submit' className='btn-dark'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
