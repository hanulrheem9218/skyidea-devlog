import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiVite } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-list-item">
          Developed with ...
          <SiVite color="white"size={20} style={{paddingRight:"10px"}}/>
          <SiTypescript color="white" size={20} style={{paddingRight:"10px"}}/>
          <FaSass color="white" size={20} style={{paddingRight:"10px"}}/>
          <FaReact color="white" size={20} style={{paddingRight:"10px"}}/>
        </li>
        <li className="footer-list-item"> "Skyidea's personal devlog" </li>
      </ul>
    </div>
  );
};

export default Footer;
