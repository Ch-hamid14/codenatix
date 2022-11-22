import React,{useRef} from 'react';
import '../styles/contact.scss';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ozqob05', 'template_s6vbfal', form.current, '0H3urqLmlHm2drgqg')
      .then((result) => {
          console.log(result.text);
          console.log("Send Successfully");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input type="text" name='from_name' required placeholder='Abc'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name='from_email' required placeholder='abc@example.com'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" name='message' required placeholder='Tells us whats your query?'/>
                </div>
                <button type='submit' value="Send">Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact;