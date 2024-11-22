import React, {  useState } from 'react';
import './contact.css';
import { IonIcon } from '@ionic/react';
import { arrowForwardSharp } from 'ionicons/icons';
import emailjs from 'emailjs-com';
import './footer.css'

const Contactus = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [compny, setCompny] = useState('');
  const [phone, setPhone] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_i1jppzu';
    const templateId = 'template_q32l3sg';
    const publicKey = 'NRgA7FvkmgogSpCqQ';

   const templateParams = {
    from_name:  name,
    from_email: email,
    to_name: "oliyaai",
    message: message,
    compny: compny,
    phone: phone
   }

   emailjs.send(serviceId, templateId, templateParams, publicKey)
   .then((response) =>{
    console.log("email sent successfull!")
    setName('')
    setEmail('')
    setCompny('')
    setMessage('')
    setPhone('')
   })
   .catch((error) =>{
    console.log("Error sending email")
   })

    // e.target.reset(); 
  };

  return (
    <>
    <section className="promo" id='contact'>
          {/* <div className="promo-bg">
            <img src={gradient} alt="" />
          </div> */}
          <div className="promo-header">
            <h2>Contact Us</h2>
          </div>
        </section>
    <div className="container" >
      <div className="contact-section">
        <div className="contact-details col">
          <p>
            Let's unlock together the next <br />
            level of possibilities! <br />
            Reach out.
          </p>

          {/* <div className="social-media item">
            <h3>Social Media</h3>
            <a href="http://google.com">Linkedin</a>  
          </div> */}

          <div className="contact-info">
            <div className="email item">
              <h3>Get in touch</h3>
              <span className='emailId'>info@softis.ai</span>
            </div>
          </div>
        </div>

        <div className="contact-form col">
          {/* <form onSubmit={sendEmail}> */}
            <div className="wrapper">
              <div className="row">
                <input 
                  type="text" 
                  placeholder="Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                  required />
                <input 
                  type="text" 
                  placeholder="Company" 
                  value={compny}
                  onChange={(e) => setCompny(e.target.value)} 
                   />
              </div>
              <div className="row">
              <input 
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required />
                <input 
                  type="text" 
                  placeholder="Phone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} 
                  required />
              </div>
              <div className="row">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} 
                ></textarea>
              </div>
              <div className="row submit">
                <button type="submit" onClick={sendEmail} >Submit <IonIcon icon={arrowForwardSharp}></IonIcon></button>
              </div>
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Contactus;
