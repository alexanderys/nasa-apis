import {
    Link
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (

        <nav className="navbar">
            <FontAwesomeIcon className="fontIcon" size="3x" icon={faShareAlt} />
            <FontAwesomeIcon className="fontIcon" size="3x" icon={faShareAlt} />
            <FontAwesomeIcon className="fontIcon" size="3x" icon={faShareAlt} />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/apod">NASA APOD</Link>
                </li>
                <li>
                    <Link to="/search">Nasa Images</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

    );
}

export default Navbar;