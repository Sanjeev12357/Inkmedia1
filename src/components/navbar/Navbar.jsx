import "./navbar.scss"
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import youtube from "../../assets/images/youtube.png"
import dribble from "../../assets/images/dribbble.png"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ink Media
        </motion.span>
        <div className="social">
          <a href="#">
            <img src={facebook} />
          </a>
          <a href="#">
            <img src={instagram} />
          </a>
          <a href="#">
            <img src={youtube} />
          </a>
          <a href="#">
            <img src={dribble} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar