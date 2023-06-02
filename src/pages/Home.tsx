import styles from "../assets/css/Home.module.css";
import {motion} from "framer-motion";
// @ts-ignore
import {animationOne, transition, animationTextOne, animationTextTwo} from "../animations/index";
import NavBar from "../components/NavBar.tsx";
import Button from "../components/Button.tsx";
import Reveal from "../components/Reveal.tsx";

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
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1.5, duration: 3}}
                    >
                        <Button>Contact me</Button>
                    </motion.div>
                </div>
            </section>
            <section className={styles.home_about}>
                <Reveal>
                    <h1>
                        About me
                    </h1>
                </Reveal>
                <Reveal>
                    <span className={styles.text_stroke}>
                        Discover a passionate<br/>and<br/> skilled carpenter
                    </span>
                </Reveal>
                <Reveal>
                    <span>
                        dedicated to crafting bespoke creations<br/> that surpass the
                        boundaries of imagination.
                    </span>
                </Reveal>

            </section>
            <section className={styles.home_services}>
                <h1>Services</h1>
                <ul>
                    {/*<Card img={Deck} imgAlt="deck">Decks</Card>*/}
                    {/*<Card img={Fence} imgAlt="fence">Fences</Card>*/}
                    {/*<Card img={Pergolas} imgAlt="pergolas">Pergolas</Card>*/}
                    {/*<Card img={OutdoorStructure} imgAlt="outdoor structure">Outdoor structures</Card>*/}
                </ul>
            </section>
        </motion.div>
    )
}

export default Home