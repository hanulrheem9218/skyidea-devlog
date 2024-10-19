import { FaGithub } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Category from "./Category";
import Archive from "./Archive";
const ControlPanel = () => {
  return (
    <div className="control-panel">
      <div className="control-panel -container">
        <div className="control-panel -controls">
            <Category/>
            <Archive/>
        </div>
        <ul className="control-panel -options">
          <li className="control-panel -list-option">
            <FaGithub size={20} onClick={()=>{window.open("https://github.com/hanulrheem9218", "_blank")}} className="control-icon"/>
          </li>
          <li className="control-panel -list-option">
            <FaArtstation size={20} onClick={()=>{
                
            }}className="control-icon"/>
          </li>
          <li className="control-panel -list-option">
            <FaInstagram size={20} onClick={()=>{

            }}className="control-icon"/>
          </li>
        </ul>
      </div>
      <div className="control-panel-description">ControlPanel</div>
    </div>
  );
};

export default ControlPanel;
