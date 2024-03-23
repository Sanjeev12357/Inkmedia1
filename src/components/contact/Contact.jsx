import React, { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xf4j81a",
        "template_xedzsbs",
        formRef.current,
        "rESFxdN-ce98VrhSb"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>sanjeevsinghsain48@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>street name</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>84992028923</span>
        </motion.div>
      </div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <input type="text" name="name" required placeholder="Name" />
          <input type="email" name="email" required placeholder="Email" />
          <textarea rows={8} name="message" placeholder="Message" />


          <button>Submit</button>
          {error && "error"}
          {success && "success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
