import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ControlPanel = () => {
  return (
    <div className="control-panel">
      <div className="control-panel -container">
        <div className="control-panel -controls">Items</div>
        <ul className="control-panel -options">
          <li className="control-panel -list-option">
            <FaGithub size={20} className="control-icon"/>
          </li>
          <li className="control-panel -list-option">
            <FaInstagram size={20} className="control-icon"/>
          </li>
        </ul>
      </div>
      <div className="control-panel-description">ControlPanel</div>
    </div>
  );
};

export default ControlPanel;
