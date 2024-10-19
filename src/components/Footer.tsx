import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiVite } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-description">
         <p className="footer-develop">
           Developed With
           </p>
      </div>
      <ul className="footer-list">
        <li className="footer-list-item">
          <SiVite color="white"size={20} className="footer-icon"/>
          <SiTypescript color="white" size={20} className="footer-icon"/>
          <FaSass color="white" size={20} className="footer-icon"/>
          <FaReact color="white" size={20} className="footer-icon"/>
        </li>
      </ul>
      <div className="footer-copyright">© Hanul Rheem 2024</div>
    </div>
  );
};

export default Footer;
