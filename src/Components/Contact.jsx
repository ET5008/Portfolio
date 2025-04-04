import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_7jibicp', 'template_11hwk6l', form.current, {
            publicKey: '1uOwAgRILH_Xrrakl',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

    return (
        <section id='Contact' className='flex justify-center flex-col items-center mb-36'>
            <h2 className='text-3xl mb-1'>Contact</h2>
            <p className='w-90 text-center text-xl mb-4'>Stay in touch, my email is open for any inquiry.</p>
            <div className='flex justify-center'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col items-baseline w-90'>
                    <label className='text-xl'>Name <span className='text-red-500'>*</span> </label>
                    <input placeholder='' className='text-black rounded-sm border-2 border-gray-800 bg-gray-400 p-1 w-[100%] mb-3' type="text" name="user_name" />
                    <label className='text-xl'>Email <span className='text-red-500'>*</span> </label>
                    <input placeholder='' className='text-black rounded-sm border-2 border-gray-800 bg-gray-400 p-1 w-[100%] mb-3' type="email" name="user_email" />
                    <label className='text-xl'>Message <span className='text-red-500'>*</span> </label>
                    <textarea className=' text-black rounded-sm border-2 border-gray-800 bg-gray-400 p-1 w-[100%] mb-6' name="message" />
                    <div className='flex justify-center items-center w-[100%]'>
                        <input placeholder='' className='text-xl bg-gray-400 p-2 w-[100%] rounded-md border-1 text-black border-gray-900 ' type="submit" value="Send" />
                    </div>
                    
                </form>
            </div>
    
        </section>

      );
}

export default Contact;