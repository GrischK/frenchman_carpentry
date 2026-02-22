import { motion } from "framer-motion";
import { animationOne, animationTextOne, animationTextTwo, transition } from "../animations/index.ts";
import NavBar from "../components/NavBar.tsx";
import Button from "../components/Button.tsx";
import Reveal from "../components/Reveal.tsx";
import Parallax from "../components/Parallax.tsx";
import Deck from "../../public/deck.jpg";
import Fence from "../../public/fence.jpg";
import Pergola from "../../public/pergola.jpg";
import Outdoor from "../../public/outdoor-structure.jpg";
import Marquee from "../components/Marquee.tsx";
import Hero from "../assets/images/carpentry_black_white.jpg";

function Home() {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
      <NavBar />

      <section
        className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="p-6 text-white flex flex-col items-center justify-center text-[48px] font-normal">
          <h1 className="flex flex-col items-center justify-center font-[Ultra]">
            <motion.span
              initial="textOut"
              animate="textIn"
              variants={animationTextOne}
              transition={{ duration: 0.8, delay: 1 }}
              className="block"
            >
              Frenchman
            </motion.span>

            <motion.span
              initial="textOut"
              animate="textIn"
              variants={animationTextTwo}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="block text-transparent [-webkit-text-stroke:2px_white]"
            >
              Carpentry
            </motion.span>
          </h1>

          <h2 className="mt-10 text-[28px] font-[Arial]">Custom Outdoor Carpentry in Vancouver Island</h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 3 }}
          className="absolute bottom-[60px] flex gap-5"
        >
          <Button>Get a Free Estimate</Button>
          <Button>View My Work</Button>
        </motion.div>

        <p className="absolute bottom-[140px] text-center text-[18px] font-[Arial] text-white">
          Transforming backyards into <br /> timeless outdoor living spaces across British Columbia.
        </p>
      </section>

      <section className="h-screen flex flex-col items-center justify-center">
        <Reveal>
          <h1 className="p-6 text-[24px] font-[Ultra] text-[#163F5F]">About me</h1>
        </Reveal>

        <Reveal>
          <span className="p-6 text-center break-words text-[48px] font-normal text-transparent font-[Ultra] [-webkit-text-stroke:2px_#163F5F]">
            Discover a passionate<br />
            and<br /> skilled carpenter
          </span>
        </Reveal>

        <Reveal>
          <span className="p-6 text-center break-words text-[48px] font-normal text-[#163F5F]">
            dedicated to crafting bespoke creations<br /> that surpass the boundaries of imagination.
          </span>
        </Reveal>

        <p className="mt-10 p-8 text-center text-[16px] font-[Arial] text-[#163F5F]">
          I’m a French-trained carpenter now building custom outdoor spaces across British Columbia. With a strong focus
          on durability, clean lines, and structural integrity, every project I take on is built to last.
          <br />
          <br />
          From decks and pergolas to full outdoor structures, I believe great carpentry is not just about wood. It’s
          about creating spaces where families gather, relax, and build memories.
        </p>
      </section>

      <section className="">
        <Marquee />
        <div className="relative">
          <Parallax image={Deck} text={"Deck"} style={{ position: "absolute", top: "0" }} />
          <Parallax image={Fence} text={"Fence"} style={{ position: "absolute", right: "50px", top: "600px" }} />
          <Parallax image={Pergola} text={"Pergola"} style={{ position: "absolute", top: "1200px", width: "50vw" }} />
          <Parallax
            image={Outdoor}
            text={"Outdoor structure"}
            style={{ position: "absolute", right: "50px", top: "1600px" }}
          />
        </div>
      </section>
    </motion.div>
  );
}

export default Home;