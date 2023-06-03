import {useRef} from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";
import styles from "../assets/css/Parallax.module.css";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({img, text}: { img: string, text: string }) {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref});
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className={styles.Parallax_section}>
            <div ref={ref}>
                <img src={img} alt="A London skyscraper"/>
            </div>
            <motion.h2 style={{y}}>{text}</motion.h2>
        </section>
    );
}

export default function Parallax({image, text}: { image: string, text: string }) {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <Image img={image} text={text}/>
            <motion.div className="progress" style={{scaleX}}/>
        </>
    );
}
