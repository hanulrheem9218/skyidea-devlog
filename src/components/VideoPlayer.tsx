import { useNavigate } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
const VideoPlayer = () => {
    const navigator = useNavigate();
  return (
    <div className="video-container">
      <video className="video" autoPlay muted playsInline >
        <source src="homepage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-description">
        <h3 className="video-title">Welcome.</h3>
        <p className="video-paragraph">Skyidea's Official Game Devlog Website.</p>
        <button onClick={() => {navigator("/devlog")}} className="video-button">View<RiArrowDropRightLine size={18} className="video-icon"/></button>
      </div>
      
    </div>
  );
};

export default VideoPlayer;
