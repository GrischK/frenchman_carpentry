import {NavLink} from "react-router-dom";
import styles from "../assets/css/NavBar.module.css";
import logo from "../assets/images/logo.png"

function NavBar() {

    return (
        <nav className={styles.navBar}>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/contact">
                Contact
            </NavLink>
            <div className={styles.background}></div>
        </nav>
    )
}

export default NavBar