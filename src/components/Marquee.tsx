import {useScroll, useTransform} from "framer-motion";
import styles from "../assets/css/Marque.module.css";

export default function Marquee() {
    const {scrollYProgress} = useScroll()
    const x = useTransform(scrollYProgress, [0, 1], [0, -600])


    return (
        <h2 className={styles.marquee_title}>Discover my services</h2>
    )
}