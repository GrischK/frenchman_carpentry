import styles from "../assets/css/Home.module.css";
import Card from "../components/Card.tsx";
import Deck from "../assets/images/deck.jpg";
import Fence from "../assets/images/fence.jpg";
import Pergolas from "../assets/images/pergolas.jpg";
import OutdoorStructure from "../assets/images/outdoor_structure.jpg";
import {motion} from "framer-motion";
import { animationOne } from "../animations/index";

function Home() {

    return (
        <motion.div
            initial="out" animate="in" exit="out" variants={animationOne}
        >
            <section className={styles.home_hero_section}>
                <div className={styles.home_title}>
                    <h1 className={styles.main_title}>
                        <span>Frenchman</span>
                        <span className={styles.text_stroke}>Carpentry</span>
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