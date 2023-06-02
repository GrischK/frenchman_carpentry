import {useRef, useEffect, ReactNode} from "react";
import {motion, useAnimation, useInView} from "framer-motion";
import styles from "../assets/css/Reveal.module.css";

interface RevealProps {
    children: ReactNode;
}

export default function Reveal({children}: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
        console.log(isInView)
    }, [isInView]);

    return (
        <div ref={ref} className={styles.reveal_container}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 275},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5, delay: 0.75}}
            >
                {children}
            </motion.div>
        </div>

    )
}
