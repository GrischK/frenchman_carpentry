import {NavLink} from "react-router-dom";
import styles from "../assets/css/NavBar.module.css";
import logo from "../assets/images/logo.png"
import {useEffect, useState} from "react";

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolledAfter, setIsScrolledAfter] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
            setIsScrolledAfter(false); // Ajout de cette ligne pour réinitialiser isScrolledAfter
        }

        if (window.scrollY > 820) {
            setIsScrolledAfter(true);
        } else {
            setIsScrolledAfter(false);
        }
    };


    return (
        <nav
            className={`${styles.navBar} ${isScrolled ? styles.scrolled : ""} ${isScrolledAfter ? styles.scrolledAfter : ""}`}>
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