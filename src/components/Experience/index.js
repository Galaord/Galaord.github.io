import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { useState } from 'react';
import { useEffect } from 'react';
const Experience = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('experience-glitch')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    return(
        <>
            <div className='experience-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['Work Experience']} idx={15}/>
                    </h1>
                    <h2>
                        Internship at ERP24
                    </h2>
                    <p>
                        I have done an Internship at this company where I worked in Back-end for 750 hours for the completion of one of my classes.
                    </p>
                </div>      
            </div>
            <div class="bubbles">
                <div class="bubble"/>
                <div class="bubble"/>
                <div class="bubble"/>
                <div class="bubble"/>
                <div class="bubble"/>
                <div class="bubble"/>
                <div class="bubble"/>
                <div class="bubble"/>
                <div class="bubble"/>
                <div class="bubble"/>
            </div>
        <Loader type='line-scale-pulse-out'/>
        </>
    )
}
export default Experience;