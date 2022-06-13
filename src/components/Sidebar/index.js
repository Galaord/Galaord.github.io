import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoH from '../../assets/images/h.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faClipboardList, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () =>(
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoH} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon = {faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon = {faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contacts">
                <FontAwesomeIcon icon = {faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon = {faClipboardList} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience">
                <FontAwesomeIcon icon = {faBriefcase} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/hugo-mendes-25756b208/">
                     <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a href="https://github.com/Galaord">
                     <FontAwesomeIcon icon={faGithub}  color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;