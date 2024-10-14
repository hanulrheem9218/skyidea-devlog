import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiVite } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer">
        <div>Developed with ...<SiVite color="white" /><SiTypescript color="white"/><FaSass color="white" /><FaReact color="white"/></div>
        <div>"Skyidea's personal devlog"</div>
        <div>?</div>
    </div>
  )
}

export default Footer