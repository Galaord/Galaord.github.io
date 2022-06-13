import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('about-glitch')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    return (
        <>
        <div className='about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['About Me']} idx={15}/>
                </h1>
                <p>I'm a Front-end Developer from Portugal.<br/> I have an interest in creating intuitive user experiences and experimenting with UI effects and animations.</p>
                <p>Highly ambitious and willing to learn on the fly, I'm hightly adaptable and want to start making a future for myself based mostly on programming.<br/>
                    I am a fan of video games, literature and TV series.
                </p>
                <p>I'm interested in the entire spectrum of Front-end Development and have recently started trying to expand my knowledge.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4 "/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} rotateY="-90deg" color="#EC4D28"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJava} color="#DD0031"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='line-scale-pulse-out'/>
        </>
    )
}
export default About;