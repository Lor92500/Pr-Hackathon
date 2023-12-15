import { Link } from "react-router-dom";

import './Header.css';



function Header() {
    return (
        <div className="header">
            <Link to="/">

            </Link>
            <ul className="" head-menu>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/characters">Characters</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;