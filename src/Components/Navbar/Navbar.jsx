import "./Navbar.css"
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/food.png"







const Navbar = () => {
  return (
    <div>
        <div className="top-menu">
          <div className="left-col-cont">
        <div className="left-col"><BsTelephone /> <p>(414) 857 - 0107</p></div>
        <div className="left-col"><FaRegEnvelope />
        <p>yummy@bistrobliss</p></div>
        </div>
        <div className="right-col">
          <div className="social-cont">
        <TfiTwitter className="social" />
        </div>
        <div className="social-cont">
        <SlSocialFacebook className="social"/>
        </div>
        <div className="social-cont">
        <FaInstagram className="social"/>
        </div>
        <div className="social-cont">
        <FaGithub className="social"/>
        </div>
        </div>
            
        </div>
        <nav>
          <div>
          <img src={logo} alt="Logo" />
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Pages</li>
            <li>Contact</li>
            
          </ul>
          <ul>
          <li><span>Book A Table</span></li>
          </ul>

        </nav>




    </div>
  )
}

export default Navbar