import React from 'react'
import hero from "../../assets/images/hero.png"
import "./Hero.scss"
import contact from "../../assets/images/scroll.png"
import {motion} from "framer-motion"
const textVariants={
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>INk MEDIA</motion.h2>
          <motion.h1 variants={textVariants}>
            Best Web & Mobile Application Development Services{" "}
          </motion.h1>
          <motion.p variants={textVariants}>
            Fuel business growth with game-changing IT solutions. Elevate
            performance, foster innovation, and stay ahead with our scalable,
            transformative technology services. Your success, our commitment to
            excellence.
          </motion.p>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the latest work
            </motion.button>
            <motion.button variants={textVariants}>Contact Us</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={contact}
            alt="contact"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src={hero} />
      </div>
    </div>
  );
}

export default Hero