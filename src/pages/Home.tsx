import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { animationOne, transition } from "../animations/index.ts";
import NavBar from "../components/NavBar.tsx";
import Button from "../components/Button.tsx";
import Reveal from "../components/Reveal.tsx";
import Deck from "../../public/deck.jpg";
import Fence from "../../public/fence.jpg";
import Pergola from "../../public/pergola.jpg";
import Outdoor from "../../public/outdoor-structure.jpg";
import Hero from "../assets/images/carpentry_black_white.jpg";
import styles from "../css/Home.module.css";

const services = [
  {
    title: "Decks built for coastal weather",
    text: "Clean layouts, strong framing, smart drainage, and finishes selected for Vancouver Island conditions.",
  },
  {
    title: "Pergolas and outdoor rooms",
    text: "Shade, structure, and a sharper backyard presence without making the space feel heavy.",
  },
  {
    title: "Fences, screens, and privacy",
    text: "Straight lines, durable details, and privacy solutions that lift curb appeal immediately.",
  },
];

const projects = [
  {
    image: Deck,
    title: "Custom decks",
    text: "Outdoor living space planned around traffic flow, views, and long-term durability.",
  },
  {
    image: Pergola,
    title: "Pergolas",
    text: "Architectural shade structures with crisp proportions and carefully finished joints.",
  },
  {
    image: Fence,
    title: "Fences",
    text: "Privacy, security, and a cleaner property line with a polished carpentry finish.",
  },
  {
    image: Outdoor,
    title: "Outdoor structures",
    text: "Built features that make the backyard more useful through every season.",
  },
];

const heroServices = [
  { label: "Decks", detail: "Outdoor living" },
  { label: "Pergolas", detail: "Shade & structure" },
  { label: "Fences", detail: "Privacy & curb appeal" },
  { label: "Structures", detail: "Built to last" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0 },
};

const titleFromLeft = {
  hidden: { opacity: 0, x: -140 },
  visible: { opacity: 1, x: 0 },
};

const titleFromRight = {
  hidden: { opacity: 0, x: 140 },
  visible: { opacity: 1, x: 0 },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.22], [1.08, 1]);
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, 70]);
  const marqueeX = useTransform(scrollYProgress, [0.04, isMobile ? 0.24 : 0.42], ["8%", isMobile ? "-56%" : "-18%"]);
  const marqueeXReverse = useTransform(scrollYProgress, [0.04, isMobile ? 0.24 : 0.42], [isMobile ? "-58%" : "-22%", "4%"]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");
    const updateIsMobile = () => setIsMobile(media.matches);

    updateIsMobile();
    media.addEventListener("change", updateIsMobile);

    return () => {
      media.removeEventListener("change", updateIsMobile);
    };
  }, []);

  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
      <NavBar />

      <section className={styles.hero}>
        <motion.div
          className={styles.heroImage}
          style={{ backgroundImage: `url(${Hero})`, scale: heroScale, y: heroY }}
        />
        <div className={styles.heroOverlay} />

        <motion.div
          className={styles.heroContent}
          variants={staggerGroup}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.eyebrow} variants={fadeUp} transition={{ duration: 0.55, delay: 0.35 }}>
            Vancouver Island outdoor carpentry
          </motion.span>
          <h1 className={styles.heroTitle}>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={titleFromLeft}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              Frenchman
            </motion.span>

            <motion.span
              initial="hidden"
              animate="visible"
              variants={titleFromRight}
              transition={{ duration: 0.65, delay: 1.35, ease: "easeOut" }}
            >
              Carpentry
            </motion.span>
          </h1>

          <motion.h2 variants={fadeUp} transition={{ duration: 0.6, delay: 1.85 }}>
            Premium decks, pergolas, fences, and outdoor structures built with French-trained precision.
          </motion.h2>

          <motion.p variants={fadeUp} transition={{ duration: 0.6, delay: 2 }}>
            Turn a plain backyard into a useful, beautiful outdoor living space with clean craftsmanship,
            durable materials, and a clear project process.
          </motion.p>

          <motion.div className={styles.heroActions} variants={fadeUp} transition={{ duration: 0.6, delay: 2.15 }}>
            <Button href="/contact">Get a Free Estimate</Button>
            <a href="#work" className={styles.textLink}>View recent work</a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.25, duration: 0.75 }}
          className={styles.trustBar}
        >
          {heroServices.map((item, index) => (
            <motion.div
              className={styles.trustItem}
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.35 + index * 0.08, duration: 0.45 }}
              whileHover={{ y: -5 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.label}</strong>
              <small>{item.detail}</small>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className={styles.marqueeBand}>
        <motion.div style={{ x: marqueeX }} className={styles.marqueeLine}>
          Custom decks / Pergolas / Fences / Outdoor structures / Vancouver Island /
        </motion.div>
        <motion.div style={{ x: marqueeXReverse }} className={styles.marqueeLineAlt}>
          French-trained precision / Coastal durability / Clean outdoor living /
        </motion.div>
      </div>

      <section className={styles.intro}>
        <Reveal>
          <p className={styles.sectionLabel}>Why clients call</p>
        </Reveal>

        <Reveal>
          <h2 className={styles.statement}>
            A backyard should feel intentional, not improvised.
          </h2>
        </Reveal>

        <Reveal>
          <p className={styles.introText}>
            Frenchman Carpentry designs and builds outdoor woodwork that looks sharp on day one and stays solid
            through coastal rain, sun, and everyday family use.
          </p>
        </Reveal>

        <motion.div
          className={styles.proofGrid}
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} whileHover={{ y: -8 }}>
            <strong>French-trained</strong>
            <span>Detail-oriented joinery and finishing</span>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ y: -8 }}>
            <strong>Island-ready</strong>
            <span>Material choices made for local weather</span>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ y: -8 }}>
            <strong>Clear process</strong>
            <span>Practical estimates and clean communication</span>
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.services}>
        <motion.div
          className={styles.sectionHeader}
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className={styles.sectionLabel}>Services</p>
          <motion.h2 variants={fadeUp}>High-impact upgrades for the spaces clients use every week.</motion.h2>
        </motion.div>
        <motion.div
          className={styles.serviceGrid}
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.article
              className={styles.serviceCard}
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.28 }}
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="work" className={styles.work}>
        <motion.div
          className={styles.sectionHeader}
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className={styles.sectionLabel}>Recent work</p>
          <motion.h2 variants={fadeUp}>Warm wood, clean lines, and structures that make the property feel finished.</motion.h2>
        </motion.div>
        <motion.div
          className={styles.projectGrid}
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          {projects.map((project, index) => (
            <motion.article
              className={styles.projectCard}
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: index % 2 === 0 ? 55 : 95, rotate: index % 2 === 0 ? -1.5 : 1.5 },
                visible: { opacity: 1, y: 0, rotate: 0 },
              }}
              whileHover={{ y: -12, scale: 1.015 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <img src={project.image} alt={project.title} />
              <div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className={styles.process}>
        <motion.p
          className={styles.sectionLabel}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Simple process
        </motion.p>
        <motion.div
          className={styles.processGrid}
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeUp} whileHover={{ y: -8 }}>
            <span>01</span>
            <h3>Walk the site</h3>
            <p>Measure the space, understand how it will be used, and identify weather or structural constraints.</p>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ y: -8 }}>
            <span>02</span>
            <h3>Shape the plan</h3>
            <p>Confirm the build approach, materials, timeline, and priorities before work starts.</p>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ y: -8 }}>
            <span>03</span>
            <h3>Build clean</h3>
            <p>Deliver tight carpentry, tidy job sites, and a finished space that feels ready to use.</p>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        className={styles.finalCta}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 initial={{ y: 42 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          Ready to make the backyard the best part of the property?
        </motion.h2>
        <motion.p initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
          Send a few details about the project and get a practical next step for your Vancouver Island home.
        </motion.p>
        <Button href="/contact">Request an Estimate</Button>
      </motion.section>
    </motion.div>
  );
}

export default Home;
