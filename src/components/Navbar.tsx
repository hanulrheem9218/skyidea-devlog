import { useState } from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
const Navbar = () => {
  const [speaker,setSpeaker] = useState(false);
  const audio = document.getElementById("audio-player") as HTMLAudioElement;
  const toggle = () => {
    if(speaker && audio ) audio.play();
    else audio.pause();
    setSpeaker(!speaker)
  };
  return (
    <div className="navbar">
      <audio id="audio-player" >
        <source src="./ambient.mp3" type="audio/mpeg"/>
      </audio>
      <img className="navbar -img" src="/skyidea-white.svg" />
      <audio id="audio-player" >
        <source src="./ambient.mp3" type="audio/mpeg"/>
      </audio>
      <img className="navbar -img" src="/skyidea-white.svg" />
      <ul className="navbar text -small">
        <li>
           {speaker ?  <GiSpeakerOff onClick={toggle}/>: <GiSpeaker onClick={toggle}/>} 
        </li>
        <li>
          <a className="navbar -list" href="/">
            Personal
          </a>
        </li>
        <li>
          <a className="navbar -list" href="/">
            Devlog
          </a>
        </li>
        <li>
           {speaker ?  <GiSpeakerOff onClick={toggle}/>: <GiSpeaker onClick={toggle}/>} 
        </li>
        <li>
          <a className="navbar -list" href="/">
            Personal
          </a>
        </li>
        <li>
          <a className="navbar -list" href="/">
            Devlog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
