import styles from "../assets/css/Home.module.css";
import Card from "../components/Card.tsx";
import Deck from "../assets/images/deck.jpg";
import Fence from "../assets/images/fence.jpg";
import Pergolas from "../assets/images/pergolas.jpg";
import OutdoorStructure from "../assets/images/outdoor_structure.jpg";
import {motion} from "framer-motion";
// @ts-ignore
import {animationOne, transition, animationTextOne, animationTextTwo} from "../animations/index";
import NavBar from "../components/NavBar.tsx";

function Home() {

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationOne}
            transition={transition}
        >
            <NavBar/>

            <section className={styles.home_hero_section}>
                <div className={styles.home_title}>
                    <h1 className={styles.main_title}>
                        <motion.span
                            initial="textOut"
                            animate="textIn"
                            variants={animationTextOne}
                            transition={{duration: 0.8, delay: 1}}
                        >Frenchman
                        </motion.span>
                        <motion.span
                            className={styles.text_stroke}
                            initial="textOut"
                            animate="textIn"
                            variants={animationTextTwo}
                            transition={{duration: 0.5, delay: 1.5}}
                        >Carpentry
                        </motion.span>
                    </h1>
                    {/*<h2>My promise as an independent carpenter is to transform your vision into meticulously crafted*/}
                    {/*    structures*/}
                    {/*    that stand the test of time.*/}
                    {/*</h2>*/}
                </div>
            </section>
            <section className={styles.home_about}>
                <h1>About me</h1>
                <p>Discover a passionate and skilled carpenter, dedicated to crafting bespoke creations that surpass the
                    boundaries of imagination.
                </p>
            </section>
            <section className={styles.home_services}>
                <h1>Services</h1>
                <ul>
                    <Card img={Deck} imgAlt="deck">Decks</Card>
                    <Card img={Fence} imgAlt="fence">Fences</Card>
                    <Card img={Pergolas} imgAlt="pergolas">Pergolas</Card>
                    <Card img={OutdoorStructure} imgAlt="outdoor structure">Outdoor structures</Card>
                </ul>
            </section>
        </motion.div>
    )
}

export default Home