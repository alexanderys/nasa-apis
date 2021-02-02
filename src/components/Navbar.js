import {
    NavLink
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
                    <NavLink activeClassName="active" exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/apod">NASA APOD</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/search">Nasa Images</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>

    );
}

export default Navbar;