import React, { useRef } from 'react'
import "./parallax.scss"
import {motion,useScroll,useTransform} from "framer-motion"
import sun from "../../assets/images/sun.png"
import planet from "../../assets/images/planets.png"
const Parallax = ({type}) => {

    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })

    const yText=useTransform(scrollYProgress,[0,1],["0%","500%"]);
    const yBg=useTransform(scrollYProgress,[0,1],["0%","100%"]);
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg ,#111132,#0c0c1d)"
            : "linear-gradient(180deg ,#111132,#505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type == "services" ? "What we Do?" : " What we did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        
        style={{
             y: yBg ,
          backgroundImage: `url(${
            type === "services"
              ? planet
              : sun
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
}

export default Parallax