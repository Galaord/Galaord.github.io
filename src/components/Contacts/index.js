import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser'

const Contacts = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm(
                'service_ihfl2mc',
                'template_v65ctyh',
                refForm.current,
                'YtBJOrt0x9kEZe4wO'

            )
            .then(
                () => {
                    alert('Message successfully sent.')
                    window.location.reload(false)
                },
                () =>{
                    alert('Failed to send message, please try again.')
                }
            )
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('contact-glitch')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    return(
    <>
        <div className='contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['Contact Me']} idx={15} />
                </h1>
            </div>
        </div>
        <div className='form-zone contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li className='full'>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='Send' />
                            </li>
                        </ul>
                    </form>
                </div>
        <Loader type='line-scale-pulse-out'/>
    </>)
}
export default Contacts;