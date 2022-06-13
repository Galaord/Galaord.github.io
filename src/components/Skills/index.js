import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from 'react-loaders';

const Skills = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('skill-glitch')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    return(    
    <>
    <div className='skills-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} idx={15} strArray={['My Skills']} />
            </h1>
            <p>
                Although my jorney as a programmer has started rather recently, 
                I have been determined to improve over that short span of time and have never stopped trying to do so.<br/><br/>
                Even if my skills may be lacking in some departments I have always strived to improve and will continue to do so until the end.<br/><br/>
                This is a visual representation of some of those skills.
            </p>
        </div>
        <div className='skill-zone'>
            <ul>
                <li>
                    <p>HTML and CSS</p>
                    <div className='progress-bar-1'><div></div></div>
                </li>
                <li>
                    <p>JavaScript</p>
                    <div className='progress-bar-2'><div></div></div>
                </li>
                <li>
                    <p>Reactjs</p>
                    <div className='progress-bar-3'><div></div></div>
                </li>
                <li>
                    <p>Back-end</p>
                    <div className='progress-bar-4'><div></div></div>
                </li>
            </ul>
        </div>
    </div>
    <Loader type='line-scale-pulse-out'/>
    </>
    )
}
export default Skills;