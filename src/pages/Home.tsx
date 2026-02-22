import styles from "../css/Home.module.css";
import {motion} from "framer-motion";
import {animationOne, animationTextOne, animationTextTwo, transition} from "../animations/index.ts";
import NavBar from "../components/NavBar.tsx";
import Button from "../components/Button.tsx";
import Reveal from "../components/Reveal.tsx";
import Parallax from "../components/Parallax.tsx";
import Deck from "../../public/deck.jpg";
import Fence from "../../public/fence.jpg";
import Pergola from "../../public/pergola.jpg";
import Outdoor from "../../public/outdoor-structure.jpg";
import Marquee from "../components/Marquee.tsx";

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
          <h2>
            Custom Outdoor Carpentry in Vancouver Island
          </h2>
        </div>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 1.5, duration: 3}}
          className={styles.main_container_contact}
        >
          <Button>Get a Free Estimate</Button>
          <Button>View My Work</Button>
        </motion.div>
        <p>Transforming backyards into <br/> timeless outdoor living spaces across British Columbia.</p>
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
        <p className={styles.about_description}>
          I’m a French-trained carpenter now building custom outdoor spaces across British Columbia.
          With a strong focus on durability, clean lines, and structural integrity, every project I take on is built to last.

          From decks and pergolas to full outdoor structures, I believe great carpentry is not just about wood. It’s about creating spaces where families gather, relax, and build memories.
        </p>

      </section>
      <section className={styles.home_services}>
        <Marquee/>
        <div style={{position: "relative"}}>
          <Parallax image={Deck} text={"Deck"} style={{position: "absolute", top: "0"}}/>
          <Parallax image={Fence} text={"Fence"} style={{position: "absolute", right: "50px", top: "600px"}}/>
          <Parallax image={Pergola} text={"Pergola"} style={{position: "absolute", top: "1200px", width: "50vw"}}/>
          <Parallax image={Outdoor} text={"Outdoor structure"}
                    style={{position: "absolute", right: "50px", top: "1600px"}}/>
        </div>
      </section>
    </motion.div>
  )
}

export default Home