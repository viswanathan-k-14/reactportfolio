import React from 'react';
import NavContact from '../components/NavContact';
import ContactForm from '../components/ContactForm';
const ContactScreen = () => {
  return (
    <div>
      <NavContact />
      <ContactForm />

      <section id='contact-b' class='py-3 bg-dark'>
        <div class='container'>
          <div class='contact-info'>
            <div>
              <i class='fas fa-envelope fa-2x'></i>
              <h3>Email</h3>
              <p>viswanathank1499@gmail.com</p>
            </div>

            <div>
              <i class='fas fa-phone fa-2x'></i>
              <h3>Phone</h3>
              <p>🇮🇳 8248456814</p>
            </div>
            <div>
              <i class='fas fa-address-card fa-2x'></i>
              <h3>Address</h3>
              <p>chennai-600061</p>
            </div>
          </div>
        </div>
      </section>

      <section id='contact-c' class='bg-main py-4'>
        <div class='container'>
          <h1>Let's Start Your Next Project</h1>
        </div>
      </section>
    </div>
  );
};

export default ContactScreen;
