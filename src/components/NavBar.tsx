import {NavLink} from "react-router-dom";
import styles from "../assets/css/NavBar.module.css";

function NavBar() {

    return (
        <nav className={styles.navBar}>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/contact">
                Contact
            </NavLink>
        </nav>
    )
}

export default NavBar