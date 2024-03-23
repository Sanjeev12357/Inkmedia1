import React, { useRef } from 'react'
import {motion,useInView} from "framer-motion"
import "./services.scss"
import people from "../../assets/images/people.webp"
const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}

const Services = () => {
    const ref=useRef();
    const isInView=useInView(ref,{margin:"-100px"})

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <div variants={variants} className="textContainer">
        <motion.p>
          {" "}
          I focus on helping your brand grow
          <br />
          and move forward
        </motion.p>
        <hr />
      </div>
      <motion.div variants={variants} className="titleContainer">
        <div className="title">
          <img src={people} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="listContainer">
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>React js / Next js Development</h2>
          <p>
            Ink Media is India top ReactJS and NextJS development companies. We
            specialize in creating engaging web apps using modern frameworks.
            Our skilled developers have skills and a solid understanding of JSX
            fundamentals. It can enhance the user experience and boost
            conversion rates.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Chat Bot Development</h2>
          <p>
            Discover our suite of web services designed to enhance your digital
            success. From web design to hosting, we're your partners in building
            a powerful online presence. Explore our solutions and unlock your
            digital potential.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Android Development</h2>
          <p>
            Leverage Android development to develop top-notch, versatile mobile
            applications that elevate user experience across diverse platforms.
            Hire the expertise of leading programmers to leverage
            the dynamic capabilities of React and to create an impressive mobile
            interface (UI) through the use of declarative components.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services