import './index.scss';
import LogoTitle from '../../assets/images/h.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
      }, []);
    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span> <br/>
                <span className={`${letterClass} _13`}>I'</span>
                <span className={`${letterClass} _14`}>m</span>
                <img src={LogoTitle} alt='developer'/>
                <span className={`${letterClass} _15`}>u</span>
                <span className={`${letterClass} _16`}>g</span>
                <span className={`${letterClass} _17`}>o</span>
                <br/>
                <span className={`${letterClass} _22`}>W</span>
                <span className={`${letterClass} _23`}>e</span>
                <span className={`${letterClass} _24`}>b</span>
                <span className={`${letterClass} _25`}> </span>
                <span className={`${letterClass} _26`}>D</span>
                <span className={`${letterClass} _27`}>e</span>
                <span className={`${letterClass} _28`}>v</span>
                <span className={`${letterClass} _29`}>e</span>
                <span className={`${letterClass} _30`}>l</span>
                <span className={`${letterClass} _31`}>o</span>
                <span className={`${letterClass} _32`}>p</span>
                <span className={`${letterClass} _33`}>e</span>
                <span className={`${letterClass} _34`}>r</span>
                <span className={`${letterClass} _35`}>.</span>
                </h1>
                <h2>Front End Developer</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            <div class="stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>
        </div>
        <Loader type='line-scale-pulse-out'/>
        </>
    )
}
export default Home;