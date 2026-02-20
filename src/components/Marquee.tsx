import {motion, useScroll, useTransform} from "framer-motion";
import styles from "../css/Marque.module.css";

export default function Marquee() {
  const {scrollYProgress} = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [100, -600])
  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 600])


  return (
    <>
      <motion.h2 style={{x}} className={styles.marquee_title}>
        Discover my services
      </motion.h2>
      <motion.h2 style={{x: x1}} className={styles.marquee_title}>
        Discover my services
      </motion.h2>
    </>
  )
}