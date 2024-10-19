import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Category from "./Category";
import Archieve from "./Archieve";
import { useNavigate } from "react-router-dom";
const ControlPanel = () => {
    const navigator = useNavigate();
  return (
    <div className="control-panel">
      <div className="control-panel -container">
        <div className="control-panel -controls">
            <Category/>
            <Archieve/>
        </div>
        <ul className="control-panel -options">
          <li className="control-panel -list-option">
            <FaGithub size={20} onClick={()=>{window.open("https://github.com/hanulrheem9218", "_blank")}} className="control-icon"/>
          </li>
          <li className="control-panel -list-option">
            <FaInstagram size={20} onClick={()=>{
                navigator("");
            }}className="control-icon"/>
          </li>
        </ul>
      </div>
      <div className="control-panel-description">ControlPanel</div>
    </div>
  );
};

export default ControlPanel;
