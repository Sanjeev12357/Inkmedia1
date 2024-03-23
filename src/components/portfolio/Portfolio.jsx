import React, { useRef } from 'react'
import "./portfolio.scss"
import lms from "../../assets/images/lms.png"
import Movie from "../../assets//images/Movie.png"
import Paytm from "../../assets/images/Paytm.png"
import {motion,useScroll,useSpring, useTransform} from "framer-motion";

const items = [
  {
    id: 1,
    title: "Learning Management System",
    img: { lms },
    desc: "This is a full stack app made using React js , mongodb , Express js , node js and tailwind css. In this app the user can uploade there courses and sell them to students the course structure made can be complex too.",
  },
  {
    id: 2,
    title: "Movie Management System",
    img: { Movie },
    desc: "An Entertainment Platform just like netflix made using Reactjs and firebase for the backend. A user can watch movies , can search movies and can also whishlist there favourite movies",
  },
  {
    id: 1,
    title: "Transaction App",
    img: {Paytm},
    desc: "This is a full stack app made using React js , mongodb , Express js , node js and tailwind css. In this app the user on login recieve a random amount of money from 1-10000 and can send the money to other users from the app.",
  },

];

const Single=({
  item
})=>{
  const ref=useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
   // offset:["start start","end start"]
 
  });

  const y=useTransform(scrollYProgress,[0,1],[-300,300]);


  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img[Object.keys(item.img)[0]]} alt="" />
          </div>

          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Portfolio = () => {

  const ref=useRef();
  const {scrollYProgress}=useScroll({target:ref, offset:["end end","start start"]});


const scaleX=useSpring(scrollYProgress,{
  stiffness:100,
  damping:30,
})
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>

        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <>
          <Single key={item.id} item={item} />
          
        </>
      ))}
    </div>
  );
}

export default Portfolio