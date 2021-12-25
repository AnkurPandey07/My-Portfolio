import React from 'react';

/**************** IMPORTING IMAGE ****************/
import Cont from '../img/contact.png';

function Contact() {
    return (
        <div className='c' id='contact-us'>
            <div className='c-bg'>
            <div className='c-begin'>
                <h3 className='c-beg'>Get In Touch</h3>
                <h1 className='c-title'>CONTACT ME</h1>
            </div>
            <div className='c-wrapper'>
                <div className='c-left'>
                <img src={Cont} alt='' className='c-img'></img>
                </div>
                <div className='c-right'>
                    <form>
                        <input type='text' placeholder='First Name' name='user_name' />
                        <input type='text' placeholder='Last Name' name='user_name' />
                        <input type='text' placeholder='Contact Number' name='user_subject' />
                        <input type='email' placeholder='Email' name='user_email' />
                        <textarea rows='5' placeholder='Write your message' name='message' />
                        <button>SUBMIT</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}


export default Contact;